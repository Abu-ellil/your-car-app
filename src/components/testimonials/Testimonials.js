import React from 'react'
import testCar from '../img/testmon-car.png'
import classes from '../css/testimonials.css'

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="title">TESTIMONIALS</div>
      <h2>Testimonials</h2>
      <div className="testimonials-cards">
        <div className="testimonials-card">
          <div className="text">
            <p>
              I recently bought a car through YourCar and I was blown away by
              their exceptional service. The staff were friendly and
              knowledgeable, and they helped me find the perfect car for my
              needs. I highly recommend YourCar to anyone looking for a luxury
              car buying experience.
            </p>
          </div>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <div className="name">
            <h1>Annie Rudy</h1> <p>Las vegas</p>
          </div>
        </div>
        <img className='testmonial-car' src={testCar} alt="" />
      </div>
    </div>
  );
}

export default Testimonials