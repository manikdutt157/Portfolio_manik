import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import ParallaxStars from "./pages/ParalaxStars";

const App = () => {
  return (
    <div className="relative min-h-screen w-full">
      <ParallaxStars />
      <div className="relative z-10  bg-opacity-70 min-h-screen">
        <Navbar />
        <Home />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
