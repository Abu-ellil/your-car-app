import React, { useContext, useState, createContext } from "react";
import carsData from "../API/CarsData";
import classes from "../Cards/Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faSuitcase,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import CartButton from "../navbar/CartIco";


import { faCartShopping } from "@fortawesome/free-solid-svg-icons";




const Crds = () => {


    const [list, setList] = useState([])

  const [offset, setOffset] = useState(0);
  const [cartCounts, setCartCounts] = useState(Array(carsData.length).fill(0));

///////add
  const handleAddClick = (index, increment,car) => {
    setCartCounts((prevCounts) => {
      const updatedCounts = [...prevCounts];
      updatedCounts[index] += increment;

      setList([...list, car])
      
        console.log(list);
      return updatedCounts;
    });
  };
///////remove

 const handleRemoveClick = (index, increment, car) => {

  if(list.length>0){
   setList((prevCounts) => {
     const updatedCounts = [...prevCounts];
     updatedCounts[index] += increment;

     updatedCounts.splice(index, 1);

     console.log(list);
     return updatedCounts;
   });}
   
 };

///////del all

const delAll =()=>{
  setList([])
}


 const handleLeftClick = () => {
   setOffset(Math.max(offset - 350, 0));
 };

 const handleRightClick = () => {
   setOffset(Math.min(offset + 350, 1150));
 };
// ..........................
// ..........................
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
    console.log(list.list);
  };
// ..........................
// ..........................

  return (
    <>
      {/* ..................... */}
      <div className="CartButton">
        <button onClick={handleCartToggle}>
          <div className="cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="prod">{list.length}</div>
          </div>
        </button>
        <div className={`CartDropdown ${isCartOpen ? "visible" : ""}`}>
          
          {list.map((car,indx,itm)=>{
            return (
              <>
                <div className="card-itm">
                  <div className="inf">
                    <h3>{car.class}</h3>
                    <p>{car.name}</p>
                    <div className="btns">
                      <button
                        className="add-btn pls"
                        onClick={() => handleRemoveClick(indx, -1, car)}
                      >
                        -
                      </button>
                      <span>{cartCounts[indx]}</span>
                      <button
                        className="add-btn mns"
                        onClick={() => handleAddClick(indx, 1, car)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <img src={car.image} alt="" />
                </div>
              </>
            );
          })}




         <button className="del-btn" onClick={delAll}>Delete All</button>
        </div>
        
      </div>

      {/* ..................... */}
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
                        onClick={() => handleRemoveClick(index, -1, car)}
                        // onClick={() => handleRemoveClick(index, -1, car)}
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
    </>
  );
};

export default Crds
