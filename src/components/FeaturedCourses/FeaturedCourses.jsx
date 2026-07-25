import { useEffect } from 'react';
import { courseList } from '../../data/content';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: '✦',
    title: 'Spotlight curation',
    text: 'Guided pathways shaped around ambition, precision, and momentum.',
  },
  {
    icon: '◌',
    title: 'Live feedback',
    text: 'Collaborative reviews and structured critique tuned for fast progress.',
  },
  {
    icon: '⬢',
    title: 'Studio access',
    text: 'Private labs, prompt packs, and polished project workflows.',
  },
];

function FeaturedCourses() {
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card');
    const updatePointer = (card, event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', (event) => updatePointer(card, event));
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', (event) => updatePointer(card, event));
      });
    };
  }, []);

  return (
    <section className="content-section" id="featured-courses">
      <div className="container">
        <div className="section-title">
          <div>
            <h2>High-definition learning systems</h2>
            <p>Built for disciplined growth, sharp feedback, and premium outcomes.</p>
          </div>
          <Link to="/courses" className="btn-ghost">
            View All Courses
          </Link>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Signal</th>
                <th>Benchmark</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Completion</td>
                <td>92%</td>
                <td>+18%</td>
                <td><span className="check-pill"><span>✓</span>Active</span></td>
              </tr>
              <tr>
                <td>Retention</td>
                <td>87%</td>
                <td>+12%</td>
                <td><span className="check-pill"><span>✓</span>Stable</span></td>
              </tr>
              <tr>
                <td>Mentor touchpoints</td>
                <td>24</td>
                <td>+6</td>
                <td><span className="check-pill"><span>✓</span>Live</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cta-section">
          <div className="cta-card">
            <h2>Let the work speak for itself.</h2>
            <p>Every course, lab, and update is designed to feel sharp, focused, and unmistakably premium.</p>
            <Link className="btn-primary" to="/register">Join the Studio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
