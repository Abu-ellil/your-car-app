import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import carsData from "../API/CarsData";
import classes from "./Shop.css";
import cartcss from "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faSuitcase,
  faChevronRight,
  faChevronLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";





const dataFromLocalStorage = JSON.parse(localStorage.getItem("list") || "[]");





const Shop = () => {
  const [list, setList] = useState(dataFromLocalStorage);
  const [offset, setOffset] = useState(0);
  const [cartCounts, setCartCounts] = useState(Array(carsData.length).fill(0));
  const [neolist, setNeolist] = useState(list);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(neolist));
  }, [neolist]);

  const handleAddClick = (index, increment, car) => {
    setCartCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] += increment;
      if (updatedCounts[index] === 1) {

        setList((prevList) => [...prevList, car]);
      }
console.log(cartCounts[index]+1);

      return updatedCounts;
    });
  };

  const handleDeleteClick = (index) => {
    setCartCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] = 0;
      return updatedCounts;
    });
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      return updatedList;
    });
  };

  const delAll = () => {
    setList([]);
  };

  const handleLeftClick = () => {
    const newActiveCardIndex =
      (activeCardIndex - 1 + carsData.length) % carsData.length;
    setActiveCardIndex(newActiveCardIndex);
    setOffset((1920 - 350) / 2 - newActiveCardIndex * 350);
  };

  const handleRightClick = () => {
    const newActiveCardIndex = (activeCardIndex + 1) % carsData.length;
    setActiveCardIndex(newActiveCardIndex);
    setOffset((window - 350) / 2 - newActiveCardIndex * 350);
  };

  const handleCircleClick = (index) => {
    setActiveCardIndex(index);
    setOffset((window - 350) / 2 - index * 350);
  };

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const updatedNeolist = [...new Set(list)];
    setNeolist(updatedNeolist);
  }, [list]);

  const containerRef = useRef(null);

  const handleTouchStart = (event) => {
    event.stopPropagation();
  };

  const handleTouchEnd = (event) => {
    const buttonId = event.target.id;
  };

  return (
    <>
      <div id="cars" className="cards-main">
        <div className="cards-title">
          <div className="title">Cars</div>
          <h2>Cars</h2>
        </div>

        <div className="cards-container">
          <Draggable
            axis="x"
            nodeRef={containerRef}
            onStart={handleTouchStart}
            onStop={handleTouchEnd}
          >
            <div
              ref={containerRef}
              className="cards"
              style={{ transform: `translateX(-350px)` }}
            >
              {carsData.map((car, index) => {
                return (
                  <div
                    key={index}
                    amount={cartCounts[index]}
                    className={`card ${
                      activeCardIndex === index ? "active-card" : ""
                    }`}
                    style={{ transform: `translateX(-${offset}px)` }}
                    onClick={() => handleCardClick(index)}
                  >
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
                          onClick={() => handleAddClick(index, -1, car)}
                        >
                          -
                        </button>
                        <span>{cartCounts[index]}</span>
                        <button
                          className="add-btn mns"
                          onClick={() => handleAddClick(index, 1, car)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Draggable>
        </div>
        <div className="circles">
          {carsData.map((_, index) => (
            <span
              key={index}
              className={`circleA ${
                activeCardIndex === index ? "active-circle" : ""
              }`}
              onClick={() => handleCircleClick(index)}
            ></span>
          ))}
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
      <div className="CartButton">
        <button className="cart-ico-main" onClick={handleCartToggle}>
          <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="prod">{list.length}</div>
          </div>
        </button>
        <div className={`CartDropdown ${isCartOpen ? "visible" : ""}`}>
          {neolist.map((car, index) => {
            return (
              <div key={index} className="card-itm">
                <div className="inf">
                  <h3>{car.class}</h3>
                  <p>{car.name}</p>
                  <div className="btns">
                    <button
                      className="add-btn pls"
                      onClick={() => handleAddClick(index, -1, car)}
                    >
                      -
                    </button>
                    <span>{cartCounts[index] + 1}</span>
                    <button
                      className="add-btn mns"
                      onClick={() => handleAddClick(index, 1, car)}
                    >
                      +
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteClick(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                <img src={car.image} alt="" />
              </div>
            );
          })}
          <button className="del-btn" onClick={delAll}>
            Delete All
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
