import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import classes from "../Footer/Footer.css";

const Footer = () => {

const [email, setEmail] = useState('');


  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    sendEmail(email);
  };

  const sendEmail = (email) => {
    console.log(`Sending email to: ${email}`);

    setEmail('');
  };



    
  const emailAddress = "aboellil.me@gmail.com";
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
          <p>
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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
              <button type="submit" className="sub">
                Subscribe
              </button>
            </form>
          </div>
          <div className="social">
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="contact foo">
          <h2>Contact</h2>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            2038 2nd Avenue, Las Vegas, United States
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            01444773421423
            <br />
            01477678449405
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href={`mailto:${emailAddress}`}>info@YourCar.com</a>
          </p>
        </div>
      </div>
      <div className="rights">
        <p>
          © Copyright <span className="Year">2023</span> ·{" "}
          <a href="#">
            <strong>YourCar</strong>{" "}
          </a>
          {"#"}
          All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
