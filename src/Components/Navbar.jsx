import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const Navbar = ({ theme, setTheme }) => {
  const Links = [
    { name: "Home", links: "/" },
    { name: "Education", links: "/" },
    { name: "Projects", links: "/" },
    { name: "About", links: "/" },
  ];

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className={`shadow-md w-full fixed top-0 left-0 ${theme === 'light' ? 'bg-black' : 'bg-white'}`}>
      <div className={`md:flex items-center justify-between py-4 md:px-10 ${theme === 'light' ? 'bg-black' : 'bg-white'}`}>
        <div className={`font-bold text-3xl cursor-pointer flex items-center font-[Poppins] ${theme === 'light' ? 'text-white' : 'text-gray-800'}`}>
          <span className="text-[#d11953] mx-1">Manik</span> Chandra
          <span className="text-[#d11953] mx-1">Dutt</span>
        </div>
        <ul className="md:flex md:items-center">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl">
              <a
                href={link.links}
                className={`hover:text-gray-500 duration-50 ${theme === 'light' ? 'text-white' : 'text-gray-800'}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={toggle_mode} className="cursor-pointer text-2xl">
          {theme === 'light' ? <FaSun className="w-6 h-6 text-white" /> : <FaMoon className="w-6 h-6 text-black" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
