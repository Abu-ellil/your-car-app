import React, { useState } from "react";
import carsData from "../API/CarsData";
import classes from "../Cards/Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faSuitcase,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import crr from "../img/cars/car.png";

const Crds = () => {
  const [offset, setOffset] = useState(0);
  const [cartCounts, setCartCounts] = useState(Array(carsData.length).fill(0));

  const handleLeftClick = () => {
    setOffset(Math.max(offset - 350, 0));
  };

  const handleRightClick = () => {
    setOffset(Math.min(offset + 350, 1150));
  };

  const handleAddClick = (index, increment) => {
    setCartCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] += increment;
      return updatedCounts;
    });
  };

  return (
    <div className="cards-main">
      <div className="cards-title">
        <div className="title">Cars</div>
        <h2>Cars</h2>
      </div>
      <div className="cards-wrapper">
        <div
          className="cards"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {carsData.map((car, index) => {
            return (
              <div className="card" key={index}>
                <img className="car-img" src={car.image} alt={car.name} />
                <div className="car-name">
                  <h3>{car.name}</h3>
                  <p>{car.class}</p>
                </div>
                <p className="description">{car.description}</p>
                <div className="add-cart-btn">
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
                  <div className="btns">
                    <button
                      className="add-btn pls"
                      onClick={() => handleAddClick(index, 1)}
                    >
                      +
                    </button>
                    <span>{cartCounts[index]}</span>
                    <button
                      className="add-btn mns"
                      onClick={() => handleAddClick(index, -1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="controls">
        <button className="left" onClick={handleLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="right" onClick={handleRightClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Crds;
