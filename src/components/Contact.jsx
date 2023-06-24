import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div name="contact" className="h-full w-full carousel carousel-vertical">
      <div className="carousel-item w-full bg-[#16697A]  h-full flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14420.623519984612!2d-57.5851625!3d-25.3660917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da995c84ad6d5%3A0x9e51a88ed6137112!2sCN%20construcciones!5e0!3m2!1sen!2spy!4v1687550586262!5m2!1sen!2spy"
          width={1600}
          height={300}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="carousel-item w-full bg-[#489FB5]  h-full text-black flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <a
          href="
          https://wa.me/595983263282"
        >
          <FaWhatsapp className="w-[150px] h-[150px]" />
        </a>
      </div>
      <div className="carousel-item w-full bg-[#82C0CC]  h-full text-black flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <FaInstagram className="w-[150px] h-[150px]" />
      </div>
      <div className="carousel-item w-full bg-[#EDE7E3]  h-full text-black  flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <FaFacebook className="w-[150px] h-[150px]" />
      </div>
      <div className="carousel-item w-full bg-[#FFA62B]  h-full text-black flex justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <HiOutlineMail className="w-[150px] h-[150px]" />
      </div>
    </div>
  );
};

export default Contact;
