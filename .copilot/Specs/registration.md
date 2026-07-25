# Registration Module - Node.js + Express + MySQL (XAMPP)

## Objective

Develop a backend API using **Node.js**, **Express.js**, and **MySQL (XAMPP)** to store Registration Form data submitted from the frontend.

The Registration Form is already available as a Navigation Component in the existing application.

---

# Database Details

Database Name

```
registrationDB
```

Table Name

```
registration
```

The backend must connect to the existing MySQL database and insert records into the `registration` table.

---

# Registration Form Fields

| Field | Type | Required |
|--------|------|----------|
| Name | VARCHAR | Yes |
| Designation | VARCHAR | Yes |
| Course | VARCHAR | Yes |
| Location | VARCHAR | Yes |

---

# Technologies

Use the following technologies:

- Node.js
- Express.js
- MySQL (XAMPP)
- mysql2
- dotenv
- cors
- nodemon

---

# Folder Structure

```
backend/
│
├── server.js
├── package.json
├── .env
│
├── config/
│     db.js
│
├── routes/
│     registrationRoutes.js
│
├── controllers/
│     registrationController.js
│
├── models/
│     registrationModel.js
│
└── middleware/
```

Follow the MVC architecture.

---

# Install Dependencies

```bash
npm init -y

npm install express mysql2 cors dotenv

npm install --save-dev nodemon
```

---

# Environment Variables

Create a `.env` file.

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=registrationDB
DB_PORT=3306
```

> Leave `DB_PASSWORD` empty if your XAMPP MySQL installation has no password.

---

# Database Connection

Create a reusable MySQL connection inside

```
config/db.js
```

Use the `mysql2/promise` package and create a connection pool.

Display

```
Connected to MySQL Database
```

after a successful connection.

---

# REST API

Create

```
POST /api/registration
```

Purpose

Insert a new registration.

---

# Request Body

```json
{
    "name":"John Doe",
    "designation":"Software Engineer",
    "course":"PG-DAC",
    "location":"Pune"
}
```

---

# Success Response

```json
{
    "success": true,
    "message": "Registration successful"
}
```

---

# Error Response

```json
{
    "success": false,
    "message": "Registration failed"
}
```

---

# Validation Rules

Validate every request.

Rules

- Name is required.
- Designation is required.
- Course is required.
- Location is required.
- Trim whitespace.
- Reject empty strings.
- Return HTTP 400 if validation fails.

---

# SQL Query

Use prepared statements.

```sql
INSERT INTO registration
(name, designation, course, location)
VALUES (?, ?, ?, ?);
```

Do **not** concatenate SQL strings.

---

# Controller Responsibilities

- Validate user input.
- Call the model.
- Handle exceptions.
- Return proper HTTP status codes.
- Return JSON responses.

---

# Model Responsibilities

- Execute MySQL queries.
- Return results.
- Throw database errors to the controller.

---

# Route Responsibilities

Register

```
POST /api/registration
```

and connect it to the controller.

---

# Express Server

Configure

- express.json()
- cors()
- dotenv
- Registration routes

Run on

```
http://localhost:5000
```

Console output

```
Server running on port 5000
Connected to MySQL Database
```

---

# Frontend Integration

The existing Registration Component should submit data using

```
POST http://localhost:5000/api/registration
```

Content-Type

```
application/json
```

On success

- Display a green success message.
- Clear the form.
- Stay on the Registration page.

On failure

- Display the backend error message.

---

# Error Handling

Handle

- Database connection failures.
- Validation errors.
- SQL errors.
- Invalid JSON.
- Unexpected server exceptions.

Return meaningful JSON responses.

---

# Code Quality

Requirements

- Use async/await.
- Use MVC architecture.
- Keep business logic out of routes.
- Use parameterized queries.
- Write clean, modular, and reusable code.
- Add comments where appropriate.

---

# Testing Checklist

- Successful registration inserts a row into the database.
- Empty Name returns HTTP 400.
- Empty Designation returns HTTP 400.
- Empty Course returns HTTP 400.
- Empty Location returns HTTP 400.
- Database connection failures are handled gracefully.
- SQL errors return appropriate responses.
- Data is visible in the `registration` table through phpMyAdmin.

---

# Expected Outcome

The application should:

- Connect to the existing MySQL database (`registrationDB`) hosted in XAMPP.
- Accept registration data through a REST API.
- Validate all inputs before insertion.
- Insert records securely using prepared statements.
- Return structured JSON responses.
- Integrate seamlessly with the existing Registration component.
- Follow a clean MVC architecture that is easy to maintain and extend.