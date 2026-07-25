# 👤 User Management Module

## Objective

Act as a Senior MERN Stack Developer and enhance the existing Learning Management System (LMS) by implementing a complete User Management module.

The implementation should follow React best practices, Bootstrap 5 styling, reusable components, and clean folder architecture.

---

# Module Scope

Implement the following modules:

- Login (Sign In)
- Student Registration (Sign Up)
- Store registered users in JSON
- Student Dashboard User Management
- Form Validation
- Authentication Flow
- Success/Error Messages

---

# Login Navigation

Update the existing Navbar.

Requirements:

- Add a **Login** button on the top-right corner.
- Style the Login button using Bootstrap.
- The button should have:
  - Red background
  - White text
  - Rounded corners
  - Hover effect
- Clicking the button should navigate to the Login page using React Router.

Example Route

```
/login
```

---

# Login Page

Create

```
src/pages/Login.jsx
```

The page should contain

- Username
- Password

Buttons

- Sign In

Below the button display

```
New User? Sign Up Here
```

The "Sign Up Here" text should navigate to

```
/register
```

---

# Login Validation

Validate

Username

- Required
- Minimum 4 characters
- Maximum 20 characters

Password

- Required
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character

Display validation messages below each field.

---

# Successful Login

When login is successful display

```
✅ New user logged in successfully.
```

The success message should

- Be green
- Bootstrap Alert Success
- Automatically disappear after a few seconds

---

# Registration Page

Create

```
src/pages/Register.jsx
```

Registration Form Fields

- Full Name
- Username
- Password
- Confirm Password
- Email
- Phone Number

Buttons

- Register
- Reset

---

# Registration Validation

Full Name

- Required
- Only alphabets

Username

- Required
- Minimum 4 characters
- Unique

Password

- Minimum 8 characters
- One uppercase
- One lowercase
- One number
- One special character

Confirm Password

- Must match Password

Email

- Valid email format

Phone Number

- Exactly 10 digits

---

# Registration Success

After successful registration

Display

```
Registration Successful
```

Redirect user to Login page.

---

# Data Storage

Store registered users inside

```
src/data/store.json
```

Example

```json
[
  {
    "id": 1,
    "name": "Rohan Barkade",
    "username": "rohan123",
    "password": "Rohan@123",
    "email": "rohan@gmail.com",
    "phone": "9876543210"
  }
]
```

Use this JSON as the application's temporary data source.

Note:

This is frontend-only storage for development purposes. Design the code so it can later be replaced with Spring Boot REST APIs.

---

# Authentication Flow

Registration

↓

Store user in store.json

↓

Redirect to Login

↓

Login

↓

Validate Credentials

↓

Navigate to Dashboard

---

# Student Dashboard

Create or update

```
Student Dashboard
```

Add a new sidebar menu

```
User Management
```

---

# User Management Page

Display all registered users from

```
store.json
```

Show data in a responsive Bootstrap table.

Columns

- ID
- Name
- Username
- Email
- Phone Number

Actions

- View
- Edit
- Delete

Use Bootstrap buttons.

---

# Search Feature

Add search functionality.

Users can search by

- Name
- Username
- Email

---

# Sorting

Allow sorting by

- Name
- Username

---

# Future Features

Prepare code for

- JWT Authentication
- Spring Boot Backend
- MySQL Database
- Role-Based Login
- Admin Login
- Instructor Login
- Student Login

---

# Folder Structure

```
src/

├── components/
│      ├── LoginForm/
│      ├── RegisterForm/
│      ├── UserTable/
│      └── Validation/

├── pages/
│      ├── Login.jsx
│      ├── Register.jsx
│      ├── Dashboard.jsx
│      └── UserManagement.jsx

├── data/
│      └── store.json

├── services/
│      └── authService.js

├── hooks/

├── App.jsx

└── main.jsx
```

---

# UI Requirements

Use Bootstrap 5.

Use

- Cards
- Forms
- Alerts
- Toast
- Tables
- Pagination
- Modal
- Icons

The application must be

- Responsive
- Mobile Friendly
- Tablet Friendly
- Desktop Friendly

---

# Coding Standards

- Functional Components only
- React Hooks
- React Router DOM
- Reusable Components
- Clean Code
- Separate CSS files
- Meaningful variable names
- Comments where necessary

---

# Future Backend Integration

The entire authentication module should be designed so that local JSON storage can later be replaced with Spring Boot REST APIs.

Do not tightly couple the UI with the storage implementation.

---

# GitHub Copilot Instructions

Act as a Senior MERN Stack Developer.

Generate production-ready React code.

Implement a complete User Management module including Login, Registration, Validation, Dashboard, and User Management using reusable React components and Bootstrap 5.

Store temporary data in `src/data/store.json` and display all registered users inside the Student Dashboard → User Management page.

Prepare the architecture for future Spring Boot, JWT Authentication, and MySQL integration.