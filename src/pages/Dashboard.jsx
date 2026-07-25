function Dashboard() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero">
          <div className="page-copy">
            <span className="page-chip">Dashboard</span>
            <h1>Your learning hub, shaped for momentum.</h1>
            <p>
              Track your progress, review your achievements, and keep every course close at hand with a focused workspace.
            </p>
          </div>

          <div className="page-card">
            <h3>Quick actions</h3>
            <button className="btn btn-primary w-100 rounded-pill mb-3">Continue Learning</button>
            <button className="btn btn-outline-light w-100 rounded-pill mb-3">My Courses</button>
            <button className="btn btn-outline-light w-100 rounded-pill">Update Profile</button>
          </div>
        </div>

        <div className="metric-grid mt-4">
          <div className="metric-pill">
            <strong>6</strong>
            <span>active courses</span>
          </div>
          <div className="metric-pill">
            <strong>3</strong>
            <span>certificates earned</span>
          </div>
          <div className="metric-pill">
            <strong>68%</strong>
            <span>overall progress</span>
          </div>
          <div className="metric-pill">
            <strong>4</strong>
            <span>upcoming sessions</span>
          </div>
        </div>

        <div className="course-grid-page mt-4">
          <div className="course-page-card">
            <h5>Active Courses</h5>
            <p className="text-muted mb-0">You are enrolled in 6 active courses and continuing your learning journey.</p>
          </div>
          <div className="course-page-card">
            <h5>Certificates</h5>
            <p className="text-muted mb-0">Complete courses and earn industry-ready certificates to showcase your achievements.</p>
          </div>
          <div className="course-page-card">
            <h5>Upcoming Sessions</h5>
            <p className="text-muted mb-0">Live labs and mentor reviews are lined up for this week.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
