import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import CartButton from "./CartIco";
import Footer from "../Footer/Footer";

const Nav = () => {
  return (
    <nav className="nav">
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
        <div className="cart">
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;
