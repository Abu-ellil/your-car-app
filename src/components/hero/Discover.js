import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";




const Discover = () => {
  return (
    <div className="hero-text">
      <div></div>
      <div className="content">
        <h1>Find the perfect car for you at YourCar.</h1>
        <p>
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>
        
        <a href='#' className="btn">
          Discover <FontAwesomeIcon icon={faArrowTrendUp} />
        </a>
      </div>
    </div>
  );
}

export default Discover