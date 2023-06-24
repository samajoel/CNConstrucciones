import React from "react";
import Logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer p-10   text-neutral-content bg-white ">
      <div>
        <img className="w-[90px] h-[110px]" src={Logo1} alt="logo" />
        <p>
          CN Construciones (Colombia - Villa Elisa - Paraguay) 📍
          <br />
          Copyright © 2023 - Todos lo derechos reservados.
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-6 mt-[100px]">
          <span className="footer-title">Desarrollado por :</span>
          <a href="https://joelportfolio.vercel.app/">⚛️</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
