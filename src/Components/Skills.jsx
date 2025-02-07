import React from "react";
import htmlIcon from "../assets/SkillsImg/html.png";
import cssIcon from "../assets/SkillsImg/css.png";
import jsIcon from "../assets/SkillsImg/javaScript.png";
import javaIcon from "../assets/SkillsImg/java.png";
import pythonIcon from "../assets/SkillsImg/python.png";
import phpIcon from "../assets/SkillsImg/php.png";
import reactIcon from "../assets/SkillsImg/react.png";
import nodeIcon from "../assets/SkillsImg/node.png";
import mysqlIcon from "../assets/SkillsImg/mysql.png";
import FaceApp from "../pages/Face";

const skillIcons = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  Java: javaIcon,
  Python: pythonIcon,
};
const skillIcons2 = {
  PHP: phpIcon,
  React: reactIcon,
  Node: nodeIcon,
  MySQL: mysqlIcon,
};

const Skills = () => {

  return (
    <>
      <section
        id="skills"
        className="flex flex-col justify-center items-center px-4 py-8 md:py-8 m-8 md:m-16"
      >
        <h2 className="text-center text-3xl md:text-5xl space-y-2 space-x-2 font-semibold mb-8 md:mb-10 text-white">
          <hr className="w-1/2 float-left" />
          Skills
          <hr className="w-1/2 float-right" />
        </h2>
        <div className="w-full md:flex-row flex flex-col ">

          <div className="w-full md:w-1/2 m-2 flex justify-center items-center relative">
            <span className="absolute top-0 left-0 md:top-0 md:left-[5%] text-white text-sm sm:text-base md:text-xl lg:text-2xl bg-gradient-to-r from-pink-700 to-blue-700 animate-gradient bg-opacity-5 transition-all hover:-translate-y-1 px-3 py-1 sm:px-4 sm:py-2 rounded-md">
              Web Development
            </span>
            <span className="absolute top-[55%] left-[55%] md:top-[55%] md:left-[5%] text-white text-sm sm:text-base md:text-xl lg:text-2xl bg-gradient-to-r from-pink-700 to-blue-700 animate-gradient bg-opacity-5 transition-all hover:-translate-y-1 px-3 py-1 sm:px-4 sm:py-2 rounded-md">
              App Development
            </span>
            <FaceApp />
            <span className="absolute top-[55%] left-0 md:top-0 md:left-[65%] text-white text-sm sm:text-base md:text-xl lg:text-2xl bg-gradient-to-r from-pink-700 to-blue-700 animate-gradient bg-opacity-5 transition-all hover:-translate-y-1 px-3 py-1 sm:px-4 sm:py-2 rounded-md">
              Web Development
            </span>
            <span className="absolute top-0 left-[55%] md:top-[55%] md:left-[65%] text-white text-sm sm:text-base md:text-xl lg:text-2xl bg-gradient-to-r from-pink-700 to-blue-700 animate-gradient bg-opacity-5 transition-all hover:-translate-y-1 px-3 py-1 sm:px-4 sm:py-2 rounded-md">
              Web Development
            </span>
          </div>


          <div className="w-full md:w-1/2">

            <div className="flex flex-wrap justify-center gap-4 p-2">
              {Object.entries({ ...skillIcons }).map(
                ([skill, iconPath], index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center bg-white bg-opacity-10 rounded-md p-4 hover:scale-110 transition-transform duration-100"
                  >
                    <img
                      src={iconPath}
                      alt={skill}
                      className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-16 lg:h-16 backdrop-blur-lg transition-transform duration-200 ease-in-out"
                    />
                  </div>
                )
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-2">
              {Object.entries({ ...skillIcons2 }).map(
                ([skill2, iconPath2], index2) => (
                  <div
                    key={index2}
                    className="flex justify-center items-center md:mt-10 bg-white bg-opacity-10 rounded-md p-4 hover:scale-110 transition-transform duration-100"
                  >
                    <img
                      src={iconPath2}
                      alt={skill2}
                      className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-16 lg:h-16 backdrop-blur-lg transition-transform duration-200 ease-in-out"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

      </section>
      <hr className="w-full h-2" />
    </>
  );
};

export default Skills;
