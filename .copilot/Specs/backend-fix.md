Convert the existing backend from PostgreSQL to MySQL (XAMPP).

Requirements:

The current project incorrectly uses:
- pg
- PostgreSQL Pool
- PGHOST, PGDATABASE, PGUSER, PGPASSWORD
- PostgreSQL SQL syntax
- in-memory fallback storage
- local registration storage when database is unavailable

Remove all PostgreSQL-related code completely.

Remove:
- pg package
- Pool from pg
- fallbackRegistrations array
- databaseReady flag
- initializeDatabase() function
- CREATE TABLE IF NOT EXISTS query
- PostgreSQL RETURNING syntax
- "Registration saved locally while the database is unavailable."
- every PostgreSQL environment variable

Replace everything with MySQL using mysql2/promise.

Use:

Database:
- registrationDB

Table:
- registration

Columns:
- id (AUTO_INCREMENT PRIMARY KEY)
- name
- designation
- course
- location

Backend Stack:
- Node.js
- Express.js
- MySQL (XAMPP)
- mysql2
- dotenv
- cors

Follow MVC architecture.

Project structure:

backend/
│
├── server.js
├── package.json
├── .env
│
├── config/
│      db.js
│
├── routes/
│      registrationRoutes.js
│
├── controllers/
│      registrationController.js
│
├── models/
│      registrationModel.js
│
└── middleware/

Create config/db.js using mysql2/promise connection pool.

Use environment variables:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=registrationDB
DB_PORT=3306

Registration API:

POST /api/registration

Validate:
- name
- designation
- course
- location

Trim whitespace.

Reject empty strings.

Return HTTP 400 for validation errors.

Use parameterized query:

INSERT INTO registration
(name, designation, course, location)
VALUES (?, ?, ?, ?)

Do not concatenate SQL strings.

Return:

Success:

{
  "success": true,
  "message": "Registration successful"
}

Failure:

{
  "success": false,
  "message": "Registration failed"
}

server.js should:

- import express
- import cors
- import dotenv
- import registration routes
- import database connection
- use express.json()
- use cors()
- register routes
- add health endpoint
- add invalid JSON handler
- add 404 handler
- add global error handler
- verify MySQL connection before starting
- listen on port 5000

The application must NOT save registrations locally if the database is unavailable.

Instead return:

HTTP 500

{
  "success": false,
  "message": "Database connection failed."
}

Generate all required files with complete production-ready code.

Do not use PostgreSQL anywhere.

Do not use fallback storage.

Do not use mock data.

The project must work directly with MySQL running in XAMPP.