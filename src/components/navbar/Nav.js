import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= window.innerHeight) {
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
    <nav className={scrolled ? "nav navbar scrolled" : "nav navbar"}>
      <div className="logo">
        <span>Your</span>Car
      </div>
      <div className="links-cart">
        <div className="links">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={activeLink === "Home" ? "active" : ""}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={activeLink === "About" ? "active" : ""}
              onClick={() => handleLinkClick("About")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className={activeLink === "Services" ? "active" : ""}
              onClick={() => handleLinkClick("Services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="cars"
              smooth={true}
              duration={500}
              className={activeLink === "Cars" ? "active" : ""}
              onClick={() => handleLinkClick("Cars")}
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={activeLink === "Contact" ? "active" : ""}
              onClick={() => handleLinkClick("Contact")}
            >
              Contact us
            </Link>
          </li>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
