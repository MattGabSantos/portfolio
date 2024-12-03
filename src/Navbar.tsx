import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';  

const NavbarComponent: React.FC = () => {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(false);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <>
      {/* Main Navbar with Translucent Background */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top w-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", boxShadow: "none" }}>
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            Matt Santos
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSideNav}
            aria-controls="navbarNav"
            aria-expanded={sideNavOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#intro">Intro</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Education</a>
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


      <div
        className={`side-navbar${sideNavOpen ? " open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Translucent black 
          color: "white", 
          paddingTop: "60px", 
          zIndex: 9999,
          transition: "transform 0.3s ease",
          transform: sideNavOpen ? "translateX(0)" : "translateX(-100%)"
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }}
        >
          <li>
            <a href="#intro" style={{ color: "white", padding: "15px", display: "block" }}>Intro</a>
          </li>
          <li>
            <a href="#experience" style={{ color: "white", padding: "15px", display: "block" }}>Education</a>
          </li>
          <li>
            <a href="#skills" style={{ color: "white", padding: "15px", display: "block" }}>Skills</a>
          </li>
          <li>
            <a href="#projects" style={{ color: "white", padding: "15px", display: "block" }}>Projects</a>
          </li>
        </ul>
      </div>

    {/* Overlay when side navbar is open */}
    {sideNavOpen && (
        <div
          className="overlay"
          onClick={() => setSideNavOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Translucent black
            zIndex: 9998
          }}
        />
      )}
    </>
  );
};

export default NavbarComponent;
