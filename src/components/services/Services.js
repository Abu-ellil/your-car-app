import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Services.css'

const Services = () => {
  return (
    <div className="services">
      <div className="title">SERVICES</div>
      <h2>Services</h2>
      <div className="service">
        <div className="car-sales">
          <div className="ico ">
            <i><img src="../img/ico/s" alt="" /></i>
          </div>
          <div className="service-title">Car sales</div>
          <div className="service-text">
            At YourCar, we offer a wide selection of luxury vehicles for sale.
            Whether you're in the market for a sleek sports car or a spacious
            SUV, we have the perfect vehicle to fit your needs.
          </div>
        </div>
        <div className="car-sales">
          <div className="ico">
            
            




          </div>
          <div className="service-title">Car rental</div>
          <div className="service-text">
            If you're in need of a luxury car rental, look no further than
            YourCar. Our fleet of high-end vehicles is regularly maintained and
            serviced to ensure that you have a safe and comfortable driving
            experience.
          </div>
        </div>
        <div className="car-sales">
          <div className="ico">


            
            




          </div>
          <div className="service-title">Car selling</div>
          <div className="service-text">
            At YourCar, we make it easy to sell your car. Simply bring your
            vehicle in for an appraisal, and we'll handle the rest. We offer
            fair prices and a hassle-free selling process, so you can get your
            vehicle with minimal effort.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services