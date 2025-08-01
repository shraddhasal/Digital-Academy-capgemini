import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-black navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">{props.Home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{props.About}</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/TextForm">{props.TextForm}</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/BMICal">{props.BMICal}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}

Navbar.propTypes = {
  Home: PropTypes.string,
  About: PropTypes.string
};
