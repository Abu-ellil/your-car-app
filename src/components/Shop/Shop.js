import React, { useState, useEffect } from "react";
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

const dataFromLocalStorage = JSON.parse(localStorage.getItem('list')|| '[]')



const Shop = () => {
  const [list, setList] = useState(dataFromLocalStorage);
  const [offset, setOffset] = useState(0);
  const [cartCounts, setCartCounts] = useState(Array(carsData.length).fill(0));
  const [neolist, setNeolist] = useState(list);
 useEffect(() => {
   setNeolist(list);
 }, [list]);

useEffect(()=>{
  localStorage.setItem('list', JSON.stringify(neolist))
},[neolist])


  const handleAddClick = (index, increment, car) => {
    setCartCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] += increment;
      if (updatedCounts[index] === 1) {
        setList((prevList) => [...prevList, car]);
      }
      return updatedCounts;
    });
  };

  const handleRemoveClick = (index) => {
    setCartCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      if (updatedCounts[index] > 0) {
        updatedCounts[index]--;
        if (updatedCounts[index] === 0) {
          setList((prevList) => {
            const updatedList = [...prevList];
            updatedList.splice(index, 1);
            return updatedList;
          });
        }
      }
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
    setOffset(Math.max(offset - 350, 0));
  };

  const handleRightClick = () => {
    setOffset(Math.min(offset + 350, 1150));
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const updatedNeolist = [...new Set(list)];
    setNeolist(updatedNeolist);
  }, [list]);

  return (
    <>
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
                        onClick={() => handleRemoveClick(index)}
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
            <div className="prod">{neolist.length}</div>
          </div>
        </button>
        <div className={`CartDropdown ${isCartOpen ? "visible" : ""}`}>
          {neolist.map((car, index, itm) => {
            return (
              <div key={index} className="card-itm">
                <div className="inf">
                  <h3>{car.class}</h3>
                  <p>{car.name}</p>
                  <div className="btns">
                    <button
                      className="add-btn pls"
                      onClick={() => handleRemoveClick(index)}
                    >
                      -
                    </button>
                    <span>{cartCounts[index]+1}</span>
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
