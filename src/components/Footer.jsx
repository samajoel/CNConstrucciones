import React from "react";
import Logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer p-10   text-neutral-content bg-white flex justify-end">
      <div className="flex justify-end">
        <img className="w-[90px] h-[110px]" src={Logo1} alt="logo" />
        <p>
          CN Construciones (Colombia - Villa Elisa - Paraguay) 📍
          <br />
          Copyright © 2023 - Todos lo derechos reservados.
        </p>
        <span className="footer-title">Desarrollado:</span>
        <a href="https://joelportfolio.vercel.app/">⚛️</a>
      </div>
    </footer>
  );
};

export default Footer;
