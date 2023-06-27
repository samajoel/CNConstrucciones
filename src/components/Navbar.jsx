import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Night from "./Night";
import Carousel from "./Carousel";
import Example from "./Example";

import Logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  function handleClick() {
    setNav((prevNav) => !prevNav);
  }

  return (
    <div className="fixed w-full h-[80px]  flex justify-between align-middle items-center px-4 bg-white opacity-15 text-[#0a192f]">
      <div className="mt-[15px]">
        <img src={Logo1} alt="Logo Image" style={{ width: "90px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex mr-[300px]">
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
      <h1 className="mr-[200px]">CN Construcciones</h1>
      {/* Social Icons */}
      <Example />
    </div>
  );
};

export default Navbar;
