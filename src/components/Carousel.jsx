import React from "react";
import Brickwall from "../assets/brickwall.png";
import Excavator from "../assets/excavator.png";
import Helmet from "../assets/helmet.png";
import Hook from "../assets/hook.png";
import Sketch from "../assets/sketch.png";
import Window from "../assets/window.png";
const Carousel = () => {
  return (
    <div className="carousel carousel-center w-full">
      <div className="carousel-item bg-[#16697A] w-[300px] h-[300px] flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img
          src={Brickwall}
          alt="Pizza"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="carousel-item bg-[#489FB5] w-[300px] h-[300px] flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img
          src={Excavator}
          alt="Pizza"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="carousel-item bg-[#82C0CC] w-[300px] h-[300px] flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img
          src={Helmet}
          alt="Pizza"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="carousel-item bg-[#EDE7E3] w-[300px] h-[300px] flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img
          src={Hook}
          alt="Pizza"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="carousel-item bg-[#FFA62B] w-[300px] h-[300px] flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img
          src={Sketch}
          alt="Pizza"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    </div>
  );
};

export default Carousel;
