import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

const Nav = () => {

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollHeight = window.innerHeight;
    if (window.pageYOffset >= scrollHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <nav className={scrolled ? 'nav navbar scrolled' : 'nav navbar'}>
      <div className="logo">
        <span>Your</span>Car
      </div>
      <div className="links-cart">
        <div className="links">
          <li>
            <a href="" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="">Cars</a>
          </li>
          <li>
            <a href="#footer">Contact us</a>
          </li>
        </div>
        <div className="cart"></div>
      </div>
    </nav>
  );
};

export default Nav;
