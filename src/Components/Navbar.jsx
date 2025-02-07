import React, { useState } from "react";
import { FaBars, FaCloud, FaTimes, FaHome, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Hero from "../pages/Hero";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Links = [
    { name: "Home", links: "#home", icon: <FaHome /> },
    { name: "Skills", links: "#skills", icon: <FaLaptopCode /> },
    { name: "Projects", links: "#project", icon: <FaProjectDiagram /> },
    { name: "Contact", links: "#contact", icon: <FaEnvelope /> },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className="shadow-lg w-full top-0 left-0 z-50 bg-white bg-opacity-10 text-white border-b-white border-b-4 transition-all duration-200 ease-in-out"
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between py-6 px-4 md:px-12">
        {/* Logo */}
        <Hero/>

        {/* Links - Mobile & Desktop */}
        <ul
          className={`md:flex md:items-center fixed md:static top-0 left-0 w-full h-full md:h-auto bg-bg-color md:bg-transparent flex-col md:flex-row items-center justify-center transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-1/2" : "translate-x-full"
          } md:translate-x-0 md:flex-row md:w-auto z-40`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 ml-8 text-2xl my-7 md:my-0 transition-all duration-300 ease-in-out flex items-center space-x-2"
            >
              <a
                href={link.links}
                onClick={closeMenu}
                className="text-white hover:text-text-color  font-semibold transition-all duration-150 ease-in-out relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gradient-to-r from-pink-700 to-blue-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full flex items-center space-x-2"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu - Mobile */}
        <div
          className="text-2xl md:hidden cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
