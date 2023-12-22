import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link to="/" className="navbar-brand">
        <img
          className="img-fluid"
          src="data:image/png;base64,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"
          alt="Logo"
          width={100}
          height={25}
        />
      </Link>
      <Link to="/" className="navbar-brand" style={{ fontWeight: 'bolder', color: 'black', fontSize: '35px' }}>
        SpaceX
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
        <NavLink
  to="/"
  className="nav-item nav-link"
  
  style={{ fontWeight: 'bolder', marginLeft: 25, fontSize: 'large', color: 'black' }}
>
  Home
</NavLink>

<NavLink
  to="/about"
  className="nav-item nav-link"
 
  style={{ fontWeight: 'bolder', fontSize: 'large', color: 'black', marginLeft: 25 }}
>
  About
</NavLink>

<NavLink
  to="/contact"
  className="nav-item nav-link"
 
  style={{ fontWeight: 'bolder', fontSize: 'large', color: 'black', marginLeft: 25 }}
>
  Contact
</NavLink>
          <li style={{ marginLeft: 25 }} className="nav-item">
            <Link to="#search">
              <button style={{ marginLeft: 20 }} type="button" className="btn btn-outline-primary">
                Search
              </button>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
