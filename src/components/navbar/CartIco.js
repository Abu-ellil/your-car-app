import React, { useState } from "react";
import "../navbar/cartbtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="CartButton">
      <button onClick={handleCartToggle}>
        <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} />
          <div className="prod">5</div>
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



 