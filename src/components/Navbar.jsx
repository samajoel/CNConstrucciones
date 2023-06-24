import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Night from "./Night";
import Carousel from "./Carousel";

import Logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  function handleClick() {
    setNav((prevNav) => !prevNav);
  }

  return (
    <div className="fixed w-full h-[80px]  flex justify-between items-center px-4 bg-white opacity-15 text-[#0a192f] ">
      <div>
        <img src={Logo1} alt="Logo Image" style={{ width: "90px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            Inicio 🗒️
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            Nosotros 🏗️
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contacto 📲
          </Link>
        </li>
      </ul>

      <Night />

      {/* Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-white   flex flex-col justify-center items-center "
          }
        >
          <li className="py-6 text-4xl text-[black] ">
            <Link
              onClick={handleClick}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Inicio 🗒️
            </Link>
          </li>
          <li className="py-6 text-4xl text-[black]">
            <Link
              onClick={handleClick}
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              Nosotros 🏗️
            </Link>
          </li>
          <li className="py-6 text-4xl text-[black] ">
            <Link
              onClick={handleClick}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contacto 📲
            </Link>
          </li>
        </ul>
      </div>
      {/* Social Icons */}
    </div>
  );
};

export default Navbar;
