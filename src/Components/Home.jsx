import React, { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {

  const [theme, setTheme] = useState('light')
  
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="w-full min-h-screen py-16 px-8 bg-[#d11953] backdrop-blur-90px ">
        
      </div>
    </>
  );
};

export default Home;
