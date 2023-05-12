import classes from "../cars/CarsGallery.css";

import React from "react";

const CarsGallery = () => {
  const emailAddress = "aboellil.me@gmail.com";
  const contactUsViaMail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="cars-gallery">
      <h1>Tesla Model 3</h1>
      <p>Disruptive, avant-garde, futuristic, innovative.</p>
      <button className="btn" onClick={contactUsViaMail}>
        Contact
      </button>
    </div>
  );
};

export default CarsGallery;
