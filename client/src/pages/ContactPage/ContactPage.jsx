import React from "react";
import "./ContactPage.css";

function redirectToGoogleMaps() {
  const address = "4468 NW 74th Ave Miami, FL 33166";
  const formattedAddress = address.split(" ").join("+");
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;

  window.open(googleMapsLink, "_blank");
}

function ContactPage() {
  return (
    <>
      <div className="contact-us">
     
        <img
          src="/mapa.png"
          alt="map"
          className="map-img"
          style={{ cursor: "pointer" }}
          onClick={redirectToGoogleMaps}
        />

      
        <div className="contact-info">
        <a
            href="https://www.google.com/maps/place/4468+NW+74+AV,+FL+33166"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link px-2 text-body-secondary text-decoration-none"
          >
            4468 NW 74 AV, FL 33166
          </a>
          <hr />
          <p>
            Call us now <span class="phone-number"> +1 (786) 391 1248</span>{" "}
            <span class="call-text">
              / <span class="phone-number">(786) 542 3153</span>
            </span>
          </p>
          <p className="email">hramiami@gmail.com</p>
        </div>
      </div>

      <div class="opening-hours">
        <div class="left-section">
          <h2>Opening Hours</h2>
          <img src="/horas.png" alt="Horas" class="specific-img large-img" />
        </div>
        <img src="/ej/cocina5.jpeg" alt="Cocina" class="specific-img" />
      </div>
{/* 
    <div class="days">
            <div class="day">Monday</div>
            <div class="day">Tuesday</div>
            <div class="day">Wednesday</div>
            <div class="day">Thursday</div>
            <div class="day">Friday</div>
            <div class="day">Saturday</div>
            <div class="day closed">Sunday</div>
          </div>
          <div class="hours">
            <div class="hour">9:00 AM – 6:00 PM</div>
            <div class="hour">9:00 AM – 6:00 PM</div>
            <div class="hour">9:00 AM – 6:00 PM</div>
            <div class="hour">9:00 AM – 6:00 PM</div>
            <div class="hour">9:00 AM – 6:00 PM</div>
            <div class="hour">10:00 AM – 4:00 PM</div>
            <div class="hour closed">Closed</div>
          </div>  */}
    </>
  );
}

export default ContactPage;
