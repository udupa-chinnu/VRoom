const cron = require('node-cron');
const pool = require('./routes/dbConnect'); // Adjust the path to your db connection module



const cronJob = () => {
// Schedule the task to run daily at midnight
cron.schedule('0 0 * * *', async () => {
    console.log('Cron Job Started: Checking and updating vehicle availability...');

    try {
        // Update vehicles whose return date has passed
        const [result] = await pool.query(`
            UPDATE vehicle v
            JOIN booking b ON v.v_id = b.v_id
            SET v.availability = 'available', b.booking_status = 'completed'
            WHERE b.return_date < NOW() AND b.booking_status = 'booked';
        `);

        await pool.query('INSERT INTO cron_logs (status, message) VALUES (?, ?)', ['success', `${result.affectedRows} vehicles updated.`]);


        console.log(`Cron Job Completed: ${result.affectedRows} vehicles updated to available.`);
    } catch (error) {
        console.error('Error in Cron Job:', error);
    }
});

}

module.exports = cronJob;