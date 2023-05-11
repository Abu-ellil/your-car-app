import React, { useState, useEffect } from "react";
import testCar from "../img/testmon-car.png";
import classes from "../testimonials/testimonials.css";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials();
  }, []);

 useEffect(() => {
   const timer = setTimeout(() => {
     showNextTestimonial();
   }, 3000);

   return () => {
     clearTimeout(timer);
   };
 }, [currentTestimonialIndex, testimonialsData]);


  const fetchTestimonials = async () => {
    try {
      setTimeout(() => {
        const data = {
          testimonials: [
            {
              name: "John Moo",
              description:
                "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
            },
            {
              name: "Sarah Ahmed",
              description:
                "YourCar made selling my car a breeze. They handled all the paperwork and negotiations, and I received a fair price for my vehicle. I would definitely use their services again in the future.",
            },
            {
              name: "Michael Khalil",
              description:
                "I had a wonderful experience renting a car from YourCar. The car was in excellent condition and the pickup and drop-off process was seamless. I highly recommend them for anyone in need of a luxury car rental.",
            },
            {
              name: "Emily Han",
              description:
                "YourCar exceeded my expectations in every way. From the moment I walked in, I felt like a valued customer. The staff went above and beyond to ensure that I found the car of my dreams. I couldn't be happier with my purchase and I highly recommend YourCar to anyone in the market for a luxury vehicle.",
            },
          ],
        };
        setTestimonialsData(data.testimonials);
      }, 1000);
    } catch (error) {
      console.log("Error fetching testimonials:", error);
    }
  };

const showNextTestimonial = () => {
  if (testimonialsData.length > 0) {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonialsData.length
    );
  }
};

  return (
    <div className="testimonials">
      <div className="title">TESTIMONIALS</div>
      <h2>Testimonials</h2>
      <div className="testimonials-cards">
        {testimonialsData.length > 0 && (
          <div className="testimonials-card">
            <div className="text">
              <p>{testimonialsData[currentTestimonialIndex].description}</p>
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <div className="name">
              <h1>{testimonialsData[currentTestimonialIndex].name}</h1>
              <p>{testimonialsData[currentTestimonialIndex].location}</p>
            </div>
            {/* <div className="circle">{testimonialsData.fill('O')}</div> */}
          </div>
        )}
        <img className="testmonial-car" src={testCar} alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
