import React from "react";
import ProjectCard from "../pages/ProjectCard";
import Project1 from "../assets/ProjectImg/project3.png";
import Project2 from "../assets/ProjectImg/project3.png";
import Project3 from "../assets/ProjectImg/project3.png";
import Project4 from "../assets/ProjectImg/project3.png";

const ProjectsSection = () => {
  return (
    <>
      <section
        id="project"
        className="w-full flex flex-col items-center px-4 py-8 md:py-10"
      >
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-8 text-white">
          <div className="text-center text-3xl md:text-5xl space-y-2 space-x-2 font-semibold mb-8 md:mb-10 text-white">
            <hr className="w-1/2 float-left border-white" />
            Projects
            <hr className="w-1/2 float-right border-white" />
          </div>
        </h2>

        {/* Project Cards Container */}
        <div className="w-full md:grid md:grid-cols-1 gap-4 px-2 md:px-12">
          {/* Desktop: Grid Layout */}
          <div className="flex flex-wrap justify-center gap-3">
            <ProjectCard
              image={Project1}
              title="Project 1"
              description="This is the description for Project 1."
              link="https://example.com/project1"
            />
            <ProjectCard
              image={Project2}
              title="Project 2"
              description="This is the description for Project 2."
              link="https://example.com/project2"
            />
            <ProjectCard
              image={Project3}
              title="Realtime Location Tracker"
              description="This is the description for Project 3."
              link="https://github.com/manikdutt157/Realtime_Location_Tracker"
            />
            <ProjectCard
              image={Project4}
              title="Project 3"
              description="This is the description for Project 3."
              link="https://example.com/project3"
            />

          </div>
        </div>
      </section>
      <hr className="w-full h-2" />
    </>
  );
};

export default ProjectsSection;
