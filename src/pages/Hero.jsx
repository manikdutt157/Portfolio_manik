import React from "react";
import { FaCloud } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="font-bold md:text-4xl text-3xl cursor-pointer flex items-center space-x-3 font-mono">
      <FaCloud className="text-sec-color" />
      <span className="bg-gradient-to-r from-pink-700 to-blue-500 bg-clip-text text-transparent">Manik</span>
      <span className="bg-gradient-to-r from-pink-700 to-blue-500 bg-clip-text text-transparent">Chandra</span>
      <span className="bg-gradient-to-r from-pink-700 to-blue-500 bg-clip-text text-transparent">Dutt</span>
    </div>
  );
};

export default Hero;
