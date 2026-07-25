import { useParams, Link } from 'react-router-dom';
import { courseList } from '../data/content.js';

function CourseDetails() {
  const { courseId } = useParams();
  const course = courseList.find((item) => item.id === courseId);

  if (!course) {
    return (
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Course Not Found</h1>
          <p className="text-muted">The requested course does not exist. Please return to the courses page.</p>
          <Link to="/courses" className="btn btn-primary rounded-pill px-4">Back to Courses</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center gap-4">
          <div className="col-lg-7">
            <h1 className="fw-bold">{course.title}</h1>
            <p className="text-muted">{course.description}</p>
            <div className="mb-4">
              <span className="badge bg-primary me-2">{course.category}</span>
              <span className="badge bg-warning text-dark">{course.level}</span>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-4 shadow-sm">
                  <p className="mb-1 text-muted">Instructor</p>
                  <strong>{course.instructor}</strong>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-3 bg-white rounded-4 shadow-sm">
                  <p className="mb-1 text-muted">Duration</p>
                  <strong>{course.duration}</strong>
                </div>
              </div>
            </div>
            <Link to="/register" className="btn btn-primary btn-lg rounded-pill">Enroll Now</Link>
          </div>
          <div className="col-lg-4">
            <div className="card rounded-4 shadow-sm border-0 p-4">
              <h5 className="fw-bold">Course details</h5>
              <p className="text-muted mb-3">Price: <strong>{course.price}</strong></p>
              <p className="text-muted mb-3">Rating: <strong>{course.rating} / 5</strong></p>
              <p className="text-muted mb-0">Students enrolled: <strong>{course.students}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
