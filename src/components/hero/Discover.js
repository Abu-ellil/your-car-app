import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Discover = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="hero-text">
      <div></div>
      <div className="content">
        <h1>Find the perfect car for you at YourCar.</h1>
        <p>
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>

        <a href="#Contact" className="btn">
          <Link
            to="cars"
            smooth={true}
            duration={500}
            onClick={() => handleLinkClick("Contact")}
          >
            Discover <FontAwesomeIcon icon={faArrowTrendUp} />
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Discover;
