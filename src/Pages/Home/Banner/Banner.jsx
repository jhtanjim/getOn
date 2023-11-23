import React from "react";
import Banner1 from "../../../assets/Images/Banner/Bannr1.png";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={Banner1} className="w-full" />
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
