import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import classes from '../css/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-text foo">
          <h2>
            <span>Your</span>Car
          </h2>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <br />
          <p>
            {" "}
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>

        <div className="news foo">
          <h2>News Letter</h2>
          <p>
            Subscribe to our news letter for updates, news and exclusive offers
          </p>
          <div className="subscribe">
            <input type="email" />
            <button className="sub">Subscribe</button>
          </div>
          <div className="social">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>

        <div className="contact foo">
          <h2>Contact</h2>
          <p>2038 2nd Avenue, Las Vegas, United States</p>
          <p>
            01444773421423
            <br />
            01477678449405
          </p>
          <a href="info@YourCar.com">info@YourCar.com</a>
        </div>
      </div>
      <div className="rights">
        <p>
          © Copyright <span className="Year">2023</span> ·{" "}
          <a href="#">
            <span>YourCar</span>{" "}
          </a>{" "}
          All rights reserved{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer