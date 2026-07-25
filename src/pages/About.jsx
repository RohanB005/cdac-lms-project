function About() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero">
          <div className="page-copy">
            <span className="page-chip">Why choose CDAC LMS</span>
            <h1>A dedicated platform for modern learning and career growth.</h1>
            <p>
              Our LMS is designed with students, instructors, and administrators in mind, delivering a polished experience with strong frontend architecture.
            </p>
            <ul className="page-list">
              <li><i className="bi bi-check-circle-fill"></i>Expert mentors and real-world curriculum.</li>
              <li><i className="bi bi-check-circle-fill"></i>Responsive experience on desktop and mobile.</li>
              <li><i className="bi bi-check-circle-fill"></i>Course progress, certificates, and dashboard insights.</li>
            </ul>
          </div>

          <div className="page-card">
            <h3>Platform benefits</h3>
            <p><strong>Flexible learning:</strong> Study at your own pace with lifetime access.</p>
            <p><strong>Professional design:</strong> Clean interface with smooth transitions.</p>
            <p><strong>Future-ready:</strong> Prepared for API integration and admin workflows.</p>

            <div className="metric-grid">
              <div className="metric-pill">
                <strong>24/7</strong>
                <span>learning access</span>
              </div>
              <div className="metric-pill">
                <strong>100%</strong>
                <span>responsive UI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
