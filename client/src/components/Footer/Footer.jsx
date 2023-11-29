import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="container" >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer-bg ">


      
        <p className="col-md-4 mb-0 text-body-secondary rights-reserved">
          &copy; 2023 | AK Stones. All Rights Reserved.
        </p>

        <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 logo-container-f">
          <Link to="/">
            <img
              src="/akstone02.png"
              alt="Logo"
              width="80"
              height="80"
              className="me-2"
            />
          </Link>
        </div>

        <div className="nav col-md-4 justify-content-end contact-info-f">
          <a
            href="https://www.google.com/maps/place/4468+NW+74+AV,+FL+33166"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link px-2 text-body-secondary text-decoration-none"
          >
            4468 NW 74 AV, FL 33166
          </a>
          {/* <br />
          <p>+1 (786) 391 1248</p> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
