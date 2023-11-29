import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const openWhatsAppChat = () => {
    let phoneNumber = "+17863911248";
    let whatsappURL = `https://wa.me/${phoneNumber}?text=Hello,%20I%20have%20a%20question`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="home-container">
        <div className="content-left">
          <h1>AK Stones</h1>
          <hr></hr>
          <p>
            Our company offers quartz and porcelain slabs for sale and
            distribution, providing the general public with a wide range of
            beautiful stones available in various colors. These can be used for
            creating kitchen countertops, flooring, and more.
          </p>
        </div>
        <div className="content-right">
          <img src="/ej/cocina.jpeg" alt="kitchen" />
        </div>
      </div>

      <div className="home-container2">
        <img src="/ej/cocina3.jpeg" alt="kitchen" />
        <div>
          <h3>
            {" "}
            Slabs of Porcelain, Quartzite and Quartz to the best factory price
          </h3>
          <p>
            These options cater to the diverse tastes of families and businesses
            looking to enhance the elegance and refinement of their homes and
            industries.
          </p>

          <Link to="/products">Products</Link>
        </div>
      </div>

      <div className="home-container3">
        <div>
          <h3>Have Questions? Call us now:</h3>
          <h4>+1 (786) 391 1248 / (786) 542 3153</h4>
          <a href="/" onClick={openWhatsAppChat}>
            whatsapp
          </a>
        </div>
        <img src="/ej/cocina2.jpeg" alt="kitchen" />
      </div>
    </>
  );
}

export default HomePage;
