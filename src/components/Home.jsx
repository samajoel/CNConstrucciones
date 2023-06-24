import React from "react";

import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen  backback ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-black">
          <span className="text-[#F2BE22]">CN </span> Construcciones
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#EDE7E3]">
          Mejorando la vida de la gente, por medio de la construccion.
        </h2>
        <p className="text-white font-bold py-4 max-w-700px flex items-center">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Somos, tu distribuidor integral",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Tenemos, los mejores precios del mercado",
              1000,
              "Llegamos, a vos",
              1000,
              "Siempre, pensando en vos",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />

          {/*   <button className="text-white group rounded-md border-2 px-6 ml-[5%] py-3 my-2 flex items-center hover:bg-pink-pink600 hover:border-[#F2BE22]">
            <Link to="work" spy={true} smooth={true} duration={500}>
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button> */}
        </p>
      </div>
    </div>
  );
};

export default Home;
