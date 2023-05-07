import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Cars</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </div>
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </nav>
  );
}

export default Nav