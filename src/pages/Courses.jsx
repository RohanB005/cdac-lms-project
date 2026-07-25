import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { courseList } from '../data/courses.js';
import { categoryList } from '../data/categories.js';

function Courses() {
  const location = useLocation();
  const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const anchor = document.getElementById(targetId);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  return (
    <section className="page-shell">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div>
            <span className="page-chip">Courses</span>
            <h1 className="fw-bold">Browse the learning paths that fit your next move.</h1>
            <p className="text-muted mb-0">Browse all available training programs and register for the course that fits your career path.</p>
          </div>
          <Link to="/register" className="btn btn-primary rounded-pill mt-3 mt-md-0">
            Register Now
          </Link>
        </div>

        <div id="course-categories" className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 fw-semibold mb-0">Course Categories</h2>
            <p className="text-muted mb-0">Jump to a category and explore available courses.</p>
          </div>
          <div className="category-grid">
            {categoryList.map((category) => (
              <div key={category.title} id={slugify(category.title)}>
                <Link to={`/courses#${slugify(category.title)}`} className="category-card">
                  <div className="category-icon">
                    <i className={`bi ${category.icon}`}></i>
                  </div>
                  <h6 className="fw-bold mb-2">{category.title}</h6>
                  <p>{category.courses} courses</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="course-grid-page">
          {courseList.map((course) => (
            <div key={course.id} className="course-page-card">
              <div className="d-flex justify-content-between align-items-center">
                <span className="badge">{course.category}</span>
                <span className="text-warning small">{course.rating} <i className="bi bi-star-fill"></i></span>
              </div>
              <div>
                <h5 className="card-title">{course.title}</h5>
                <p className="text-muted mb-2">{course.description}</p>
              </div>
              <div className="text-muted small">
                <p className="mb-1"><strong>Instructor:</strong> {course.instructor}</p>
                <p className="mb-1"><strong>Duration:</strong> {course.duration}</p>
                <p className="mb-0"><strong>Level:</strong> {course.level}</p>
              </div>
              <div className="course-meta mt-auto">
                <span className="price">{course.price}</span>
                <Link to={`/courses/${course.id}`} className="btn btn-sm btn-outline-light rounded-pill">
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
