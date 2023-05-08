import React, { useState, useContext } from "react";
import "../navbar/cartbtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Cards/Crds";

const CartButton = ({list}) => {
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
    console.log(list.list);
  };

  return (
    <div className="CartButton">
      <button onClick={handleCartToggle}>
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="prod">{11}</div>
        </div>
      </button>
      <div className={`CartDropdown ${isCartOpen ? "visible" : ""}`}>
        {/* Place your cart content here */}
        <p>Cart items</p>
      </div>
    </div>
  );
};

export default CartButton;
