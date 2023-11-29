import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar expand="lg" className="navbar-bg" expanded={expanded}>
      <Navbar.Brand as={Link} to="/">
        <div className="logo-container">
          <img
            className="logo"
            src="/logobordecuadrado-01.jpg"
            alt="Logo"
          />
        </div>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="navbarCollapse"
        onClick={() => setExpanded(!expanded)}
      />

      <Navbar.Collapse id="navbarCollapse">
        <div className="nav-links">
          <Nav onClick={closeMenu}>
            <Nav.Link as={Link} to="/" className="custom-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="custom-link">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="custom-link">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="custom-link">
              Contact Us
            </Nav.Link>
            <a
              className="custom-link"
              href="https://www.instagram.com/hra.usa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </a>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
