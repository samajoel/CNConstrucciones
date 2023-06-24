import React, { useEffect, useState } from "react";

import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
/* import Carousel from "./components/Carousel"; */
import Contact from "./components/Contact";
/* import Skills from "./components/Skills";
  import Work from "./components/Work";
  import Contact from "./components/Contact";  */

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.title = "CN - Construcciones"; // Set your desired title here
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
