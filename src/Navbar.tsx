import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container">
        <a className="navbar-brand" href="#home">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#intro">Intro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
