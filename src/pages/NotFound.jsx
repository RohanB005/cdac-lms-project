import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">404</h1>
        <p className="lead text-muted">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4">Return Home</Link>
      </div>
    </section>
  );
}

export default NotFound;
