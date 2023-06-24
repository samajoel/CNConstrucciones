import React from "react";
import Logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer p-10  text-neutral-content bg-white">
      <div>
        <img className="w-[100px] h-[100px]" src={Logo1} alt="logo" />
        <p>
          CN Construciones
          <br />
          --
        </p>
      </div>
      <div>
        <span className="footer-title">Desarrollado por :</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://joelportfolio.vercel.app/">⚛️</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
