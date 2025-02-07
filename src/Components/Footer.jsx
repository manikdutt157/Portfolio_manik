import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Hero from '../pages/Hero';

const Footer = () => {
  return (
    <footer className="w-full bg-bg-color border-t-2 border-white text-white p-5 py-10">
      <div className="flex flex-col items-center space-y-10 ">
        {/* Logo and Social Media Links */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <Hero/>

          {/* Social Media Links */}
          <ul className="flex space-x-5 md:space-x-10 mt-4 md:mt-0">
            <li>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="h-7 w-7 hover:rotate-45 duration-500 hover:text-text-color transition-all hover:-translate-y-1 cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="h-7 w-7 hover:rotate-45 duration-500 hover:text-text-color transition-all hover:-translate-y-1 cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="h-7 w-7 hover:rotate-45 duration-500 hover:text-text-color transition-all hover:-translate-y-1 cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright and Links */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between border-t pt-3">
          <p className="text-sm text-center md:text-left mb-2 md:mb-0 transition-all hover:-translate-y-1 cursor-pointer duration-700">
            Copyright © 2024 ❤️ Made by Manik. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm justify-center md:justify-start">
            <a href="/privacy" className="hover:underline transition-all hover:-translate-y-1 duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:underline transition-all hover:-translate-y-1 duration-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
