import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faTrash,
  faMinus,
  faUsers,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import carsData from "../API/CarsData";
import { motion } from "framer-motion";
import Carousel from "react-elastic-carousel";
import '../Shop/Shop.css'
import "../Shop/neoCArt.css";
import Nav from "../navbar/Nav";







const Shop = () => {
   const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
   const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);




  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);




  const handleAddToCart = (car) => {
    setCartItems((prevCartItems) => [...prevCartItems, car]);
    setCartCount((prevCartCount) => prevCartCount + 1);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });
    setCartCount((prevCartCount) => prevCartCount - 1);
  };

  const handleDeleteFromCart = (index) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });
    setCartCount((prevCartCount) => prevCartCount - 1);
  };

const handleDeleteAll = () => {
  setCartItems([]);
  localStorage.removeItem("cartItems");
};

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
    console.log('don!!!');
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
      setCartCount(storedCartItems.length);
    }
  }, []);

  return (
    <div>
      <Nav toggel={handleCartToggle} count={cartCount} />
      <div className="shop-container">
        <div className="cards-title">
          <div className="title">Cars</div>
          <h2>Cars</h2>
        </div>
        <div className="car-container">
          <Carousel itemsToShow={3}>
            {carsData.map((car, index) => (
              <div className="car-card" key={index}>
                <img src={car.image} alt={car.name} className="car-image" />
                <div className="car-details">
                  <h3>{car.name}</h3>
                  <p>{car.class}</p>
                  <p>{car.description}</p>
                </div>
                <div className="car-card-bottom">
                  <div className="info">
                    <div>
                      <p>
                        <FontAwesomeIcon icon={faUsers} /> {car.seats} Seats
                      </p>
                    </div>
                    <div>
                      <p>
                        <FontAwesomeIcon icon={faSuitcase} /> {car.luggage}{" "}
                        Luggage
                      </p>
                    </div>
                  </div>
                  <div className="counter">
                    <button
                      className="counter-btn minus"
                      onClick={() => handleRemoveFromCart(index)}
                      disabled={!cartItems.includes(car)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>
                      {cartItems.filter((item) => item === car).length}
                    </span>
                    <button
                      className="counter-btn plus"
                      onClick={() => handleAddToCart(car)}
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* ====================CART========================== */}
      {/* ====================CART========================== */}
      {/* ====================CART========================== */}

      <div className="cart-container">
        {/* <button className="cart-btn" onClick={handleCartToggle}>
          ({cartCount})
        </button> */}

        {isCartOpen && (
          <div className="cart-dropdown">
            {cartItems.length === 0 ? (
              <h1>Your cart is empty</h1>
            ) : (
              <>
                {cartItems.map((car, index) => (
                  <div className="cart-item" key={index}>
                    <img src={car.image} alt={car.name} className="car-image" />
                    <div className="cart-item-details">
                      <h3>{car.name}</h3>
                      <p>{car.class}</p>
                    </div>
                    <div className="cart-item-counter">
                      <button
                        className="counter-btn"
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>
                        {cartItems.filter((item) => item === car).length}
                      </span>
                      <button
                        className="counter-btn"
                        onClick={() => handleAddToCart(car)}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                      </button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteFromCart(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
                <button className="delete-all-btn" onClick={handleDeleteAll}>
                  Delete All
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
