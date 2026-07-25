import { Link, NavLink } from 'react-router-dom';
import { categoryList } from '../../data/categories';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-shell">
          <Link className="navbar-brand" to="/">
            <span className="brand-mark">⌘</span>
            CDAC LMS
          </Link>

          <div className="nav-links">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <div className="dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/courses" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Courses
              </NavLink>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/courses">All Courses</Link></li>
                <li><hr className="dropdown-divider" /></li>
                {categoryList.map((category) => {
                  const slug = category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <li key={category.title}>
                      <Link className="dropdown-item" to={`/courses#${slug}`}>
                        {category.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </div>

          <NavLink className="nav-cta" to="/register">
            Start Free Trial
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
