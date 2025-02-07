import React from "react";
import Pic from "../assets/image.jpg";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <section id="home" className="w-full md:h-[750px] flex flex-col md:flex-row justify-center items-center ">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2  p-6 md:p-20 text-center md:text-left rounded-md">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">
            Hi, I am <span className="bg-gradient-to-r from-pink-700 to-blue-500 bg-clip-text text-transparent">Manik </span><span className="bg-gradient-to-r from-pink-700 to-blue-500 bg-clip-text text-transparent">Chandra</span>
            <span className="bg-gradient-to-r from-pink-700 to-blue-500 bg-clip-text text-transparent"> Dutt</span>
          </h1>

          <p className="font-mono text-md md:text-lg mt-4 text-gray-300">
            Software Engineering Student. Passionate about creating, innovating, and solving challenges through code.
          </p>

          {/* Social Media Section */}
          <div className="flex justify-center md:justify-start mt-6 space-x-6">
            <FaLinkedin className="w-8 h-8 hover:text-text-color transition-all hover:-translate-y-1 cursor-pointer" />
            <FaGithub className="w-8 h-8 hover:text-text-color transition-all hover:-translate-y-1 cursor-pointer" />
            <FaTwitter className="w-8 h-8 hover:text-text-color transition-all hover:-translate-y-1 cursor-pointer" />
          </div>

          {/* Resume Button */}
          <div className="mt-8">
            <button className="px-6 py-2 w-full md:w-1/3 flex items-center justify-center bg-white  rounded-lg text-lg font-semibold transition duration-200 bg-gradient-to-r from-pink-700 to-blue-700 animate-gradient bg-opacity-5 hover:-translate-y-1">
              RESUME <FaDownload className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Section (Triangle-Shaped Profile Image) */}
        <div className="w-full p-2 md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
          <div className="w-70  h-80 md:w-3/5 md:h-5/6 ">
            <img
              src={Pic}
              alt="Profile"
              className="w-full h-full p-2 object-cover overflow-hidden rounded-full transition-all hover:-translate-y-4 shadow-text-color shadow-lg bg-gradient-to-r from-pink-700 to-blue-500 hover:shadow-text-color border-4 border-white hover:shadow-2xl"
            />
          </div>
        </div>
      </section>

      <hr className="w-full h-2" />

    </>
  );
};

export default Home;
