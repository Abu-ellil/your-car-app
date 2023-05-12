import React from "react";
import classes from "../Logos/Logos.css";
import bmw from "../img/logos/bmw.png";
import volovo from "../img/logos/Volvo_logo1 1.png";
import suzuki from "../img/logos/Suzuki_logo_2 1.png";
import toyota from "../img/logos/Toyota_EU 1.png";
import nissan from "../img/logos/Nissan_2020_logo.png";
import merc from "../img/logos/Mercedes-Benz_free_logo.png";
import imm from "../img/logos/image 262.png";
import vec from "../img/logos/Vector.png";


const Logos = () => {
  return (
    <div className="logos">
      <img src={bmw} alt="" />
      <img src={volovo} alt="" />
      <img src={suzuki} alt="" />
      <img src={toyota} alt="" />
      <img src={nissan} alt="" />
      <img src={merc} alt="" />
      <img src={imm} alt="" />
      <img src={vec} alt="" />
      
    </div>
  );
};

export default Logos;
