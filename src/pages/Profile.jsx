function Profile() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="auth-card">
              <span className="page-chip">Profile</span>
              <h2>Account overview</h2>
              <p className="text-muted mb-4">Manage your account details, enrolled courses, and learning progress in one place.</p>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" value="Rohan Kumar" readOnly />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" value="rohan@example.com" readOnly />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Role</label>
                  <input type="text" className="form-control" value="Student" readOnly />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Progress</label>
                  <input type="text" className="form-control" value="68%" readOnly />
                </div>
              </div>
              <div className="mt-4 text-end">
                <button className="btn btn-primary rounded-pill px-4">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
