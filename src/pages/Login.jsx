function Login() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="auth-card">
              <span className="page-chip">Login</span>
              <h2>Welcome back</h2>
              <p className="text-muted mb-3">Access your student or instructor dashboard with secure login.</p>
              <form>
                <div>
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <div className="d-flex justify-content-between align-items-center pt-2">
                  <a href="#" className="small text-decoration-none">Forgot password?</a>
                  <button type="submit" className="btn btn-primary rounded-pill px-4">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
