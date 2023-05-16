import React from "react";
import aboutus from "../aboutUs/aboutus.css";

const AboutUs = () => {
  return (
    <div id="about" className="about-us">
     
      <div className="about-content">
         <div className="about-titles">
        <h1 className="title">ABOUT US</h1>
        <h2>About</h2>
      </div>
        <p>
          YourCar is a luxury car dealership that offers a personalized and
          first-class experience to its clients. Our team of experienced
          professionals is dedicated to providing exceptional service and
          finding the perfect vehicle to match our clients' unique preferences
          and requirements. We have an extensive selection of high-end vehicles,
          ranging from sports cars to SUVs, all of which are maintained to the
          highest standards of quality and safety.
          <br />
          <br />
          At YourCar, we are committed to creating a stress-free and enjoyable
          car buying experience. We understand that purchasing a luxury car can
          be a significant investment, which is why we offer flexible financing
          options to make the process more manageable. Our team is available to
          answer any questions and provide guidance throughout the entire buying
          process. We take pride in our outstanding customer service and
          attention to detail, and we are confident that our clients will be
          satisfied with their experience at YourCar.
        </p>

        
      </div>
      <img alt="car" src={require("../img/about.png")} />
    </div>
  );
};

export default AboutUs;
