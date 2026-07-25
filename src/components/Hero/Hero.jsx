import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="kicker-dot"></span>
              Editorial learning systems
            </div>
            <h1>
              Build with <span className="accent-word">clarity</span>, move with precision.
            </h1>
            <p>
              A refined learning experience for modern creators, builders, and teams who want depth without the noise.
            </p>

            <div className="hero-actions">
              <Link className="btn-primary" to="/courses">
                Explore Courses
              </Link>
              <Link className="btn-ghost" to="/register">
                Start Free Trial
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow-orb"></div>
            <div className="glow-orb-2"></div>
            <div className="mockup-card">
              <div className="mockup-top">
                <span className="mockup-pill">Signal / Live</span>
                <span className="mockup-pill">01.24</span>
              </div>
              <div className="mockup-grid">
                <div className="panel">
                  <h4>Performance</h4>
                  <p>High clarity output with handcrafted paths for every milestone.</p>
                  <div className="stat-row"><span>Momentum</span><strong>91%</strong></div>
                  <div className="stat-row"><span>Retention</span><strong>88%</strong></div>
                </div>
                <div className="panel">
                  <h4>Studio</h4>
                  <p>Immersive reviews, live feedback, and elegant workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
