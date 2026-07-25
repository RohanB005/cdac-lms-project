# Dashboard Implementation Prompt

Develop a new Dashboard component for the existing Student Registration System.

Requirements:

- Add a Dashboard navigation item that routes to `/dashboard`.
- Use React + TypeScript + Tailwind CSS.
- Use Recharts for the Pie Chart.
- Fetch data from the existing Node.js + Express + MySQL backend.
- Do NOT use mock or local data.

Create the following backend APIs if they do not exist:

- GET /api/dashboard/stats
- GET /api/dashboard/students
- GET /api/dashboard/course-distribution

Follow the existing MVC architecture.

Dashboard features:

1. Display four summary cards:
   - Total Registered Students
   - Total Courses
   - Total Locations
   - Total Designations

2. Display a responsive Pie Chart titled **Student Course Distribution**.
   - Show registered students grouped by course.
   - Include legend, tooltip, percentage and student count.
   - Automatically refresh after a new registration.

3. Display a searchable table containing:
   - ID
   - Name
   - Designation
   - Course
   - Location

4. Add filters for:
   - Course
   - Location
   - Designation

5. Handle:
   - Loading state
   - Empty database
   - API errors
   - Database errors

6. Backend:
   - Create routes, controllers and models.
   - Use async/await.
   - Use mysql2 prepared statements.
   - Return JSON responses.
   - Follow MVC architecture.

Generate all required React components, Express routes, controllers, models, SQL queries and API integration code.