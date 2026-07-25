# 🎓 Learning Management System (LMS)
## Project Instructions

## 📌 Project Overview
Develop a modern Learning Management System (LMS) frontend using **React.js**, **Vite**, **Bootstrap 5**, and **React Router**. The application should be responsive, modular, scalable, and ready for future Spring Boot REST API integration.

## 🎯 Objectives
- Responsive SPA
- Reusable React functional components
- Mobile-first UI
- Bootstrap 5
- Clean folder structure
- Register Now button on every course
- Course Registration page
- Future-ready backend integration

## 🛠 Tech Stack
- React.js
- Vite
- JavaScript (ES6+)
- Bootstrap 5
- React Router DOM
- Bootstrap Icons
- Google Fonts (Poppins)

## 📂 Folder Structure
```text
src/
 ├── assets/
 ├── components/
 │    ├── Navbar/
 │    ├── Hero/
 │    ├── Features/
 │    ├── Courses/
 │    ├── Categories/
 │    ├── Instructors/
 │    ├── Testimonials/
 │    ├── FAQ/
 │    ├── Newsletter/
 │    ├── Contact/
 │    ├── CTA/
 │    └── Footer/
 ├── data/
 ├── hooks/
 ├── pages/
 │    ├── Home.jsx
 │    ├── Courses.jsx
 │    ├── CourseDetails.jsx
 │    ├── CourseRegistration.jsx
 │    ├── Login.jsx
 │    ├── Register.jsx
 │    ├── Dashboard.jsx
 │    ├── Profile.jsx
 │    ├── ExternalData.jsx
 │    └── NotFound.jsx
 ├── services/
 ├── styles/
 ├── App.jsx
 └── main.jsx
```

## 🧭 Navigation
Home, About, Courses, Categories, Instructors, Contact, Login, Register, Dashboard.

## 🏠 Homepage Modules
- Responsive Navbar
- Hero Banner
- Featured Courses
- Categories
- Why Choose Us
- Popular Instructors
- Testimonials
- Statistics Counter
- FAQ
- Newsletter
- Contact
- Footer

## 📚 Course Module
Each card must contain:
- Image
- Title
- Description
- Instructor
- Duration
- Level
- Price
- Rating
- **Register Now** button

Clicking Register Now should navigate to Course Registration.

## 📝 Course Registration
Fields:
- Full Name
- Email
- Mobile
- Date of Birth
- Gender
- Address
- Qualification
- Selected Course
- Preferred Batch
- Payment Option
- Terms Checkbox

Buttons:
- Register
- Reset

Validate required fields and show success message.

## 👨‍🎓 Student Module
Register, Login, Profile, Wishlist, My Courses, Continue Learning, Certificates.

## 👨‍🏫 Instructor Module
Dashboard, Add/Edit Course, Upload Notes, Upload Videos, Manage Students.

## 👨‍💼 Admin Module
Manage Students, Instructors, Courses, Categories, Reports and Analytics.

## 🔎 Search
Search by Course, Instructor, Category and Skill.

## ❤️ Wishlist
Add/Remove courses.

## 🌐 External API Module
Create ExternalData.jsx.
Consume:
https://jsonplaceholder.typicode.com/users

Display responsive Bootstrap table with:
ID, Name, Username, Email, Phone, Website, Company, City.

Implement:
- useState
- useEffect
- Fetch API
- Loading Spinner
- Error Handling
- Search
- Pagination (optional)

## 🎨 UI Guidelines
- Bootstrap Cards
- Carousel
- Accordion
- Progress Bar
- Toast
- Modal
- Pagination
- Hover animations
- Rounded corners
- Soft shadows

## 🧩 Coding Standards
- Functional Components only
- Reusable components
- Separate CSS files
- Meaningful names
- No duplicate code
- Clean comments

## 📄 Dummy Data
Store reusable data under src/data:
- courses.js
- categories.js
- instructors.js
- testimonials.js

## 🌿 Git Standards
Feature branches:
- feature/navbar
- feature/courses
- feature/course-registration
- feature/dashboard

Example commits:
- Create Hero component
- Add Course Registration page
- Integrate External API

## ⚡ Performance
- Lazy loading
- Optimized images
- Small reusable components
- Avoid unnecessary re-renders

## 🔗 Future Backend
Spring Boot + MySQL + JWT + REST APIs.

Future APIs:
- Authentication
- Student
- Instructor
- Course
- Enrollment
- Dashboard

## 🤖 GitHub Copilot Instructions
Act as a Senior React Developer.

Generate production-ready React code using:
- React Functional Components
- React Router
- Bootstrap 5
- Responsive design
- Component-based architecture
- Clean folder structure

Implement:
- Homepage
- Courses
- Course Details
- Course Registration
- Authentication
- Student Dashboard
- Admin Dashboard
- External API integration
- Contact
- FAQ
- Newsletter

Use meaningful dummy data where backend is unavailable.
Prepare every page for future Spring Boot REST API integration.
