# VRoom: A Vehicle Rental Management System

VRoom is a web application for managing vehicle rentals, built with **Node.js**, **Express**, and **MySQL**.
It features separate **user** and **admin** dashboards, allowing users to browse and book vehicles, while admins can manage the vehicle inventory, view bookings, and review feedback.

---

## 🚀 Features

### User Dashboard

* **User Authentication**: Secure user registration and login.
* **Vehicle Browsing**: View a list of available vehicles.
* **Vehicle Booking**: Book a vehicle, specifying destination and return date.
* **Booking History**: View a history of all personal bookings.
* **Feedback System**: Submit feedback for completed bookings.

### Admin Dashboard

* **Admin Authentication**: Secure admin registration and login.
* **Vehicle Management**: Add, edit, and delete vehicles from the inventory.
* **Booking Oversight**: Track all bookings made by users.
* **Feedback Review**: View feedback submitted by users to improve service.

---

## 🛠 Technologies

* **Backend**: Node.js, Express.js
* **Templating**: EJS (Embedded JavaScript)
* **Database**: MySQL
* **Authentication**: bcrypt for password hashing, express-session for session management
* **File Uploads**: multer for handling vehicle image uploads
* **Scheduled Tasks**: node-cron for automated tasks (e.g., updating vehicle availability)

---

## ⚙️ Installation

### Prerequisites

* Node.js (v14 or higher)
* MySQL Server

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/udupa-chinnu/VRoom.git
   cd VRoom
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the MySQL database**:

   * Create a database named `vehiclerentalsystem`.
   * Update the database connection details in `routes/dbConnect.js` with your MySQL credentials.
   * Create the necessary tables: `user`, `admin`, `vehicle`, `booking`, `payment`, `feedback`, and `cron_logs`.
   * The schema can be inferred from queries in:

     * `routes/UserRoute.js`
     * `routes/adminRoute.js`
     * `cron.js`

4. **Run the application**:

   ```bash
   npm start
   ```

   The app will be running at: **[http://localhost:3000](http://localhost:3000)**

---

## 📌 API Endpoints

### User Routes

* `GET /` → Landing page with user and admin login options
* `GET /login` → User login page
* `POST /login` → Handles user login authentication
* `GET /register` → User registration page
* `POST /register` → Handles user registration
* `GET /home` → User dashboard showing available vehicles
* `GET /available-vehicles` → Fetch available vehicles
* `POST /rent-vehicle/:id` → Initiates vehicle rental
* `GET /book-vehicle` → Booking form
* `POST /book-vehicle` → Handles booking
* `GET /user-bookings/:u_id` → View user booking history
* `GET /give-feedback/:vehicle_id` → Feedback form
* `POST /submit-feedback` → Handles feedback submission
* `GET /logout` → Logout user

### Admin Routes

* `GET /admin/login` → Admin login page
* `POST /admin/login` → Handles admin login
* `GET /admin/register` → Admin registration page
* `POST /admin/register` → Handles admin registration
* `GET /admin/dashboard` → Admin dashboard
* `GET /admin/add-vehicle` → Add new vehicle form
* `POST /admin/add-vehicle` → Add new vehicle
* `GET /admin/update-vehicle/:id` → Edit vehicle form
* `PUT /admin/update-vehicle/:id` → Update vehicle
* `DELETE /admin/delete-vehicle/:id` → Delete vehicle
* `GET /admin/view-feedback` → View all feedback
* `GET /admin/logout` → Logout admin

---

