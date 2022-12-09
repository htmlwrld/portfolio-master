import React from "react";
import { Text } from "../container/Language";

const Projects = () => {
  return (
    <section className="align-center justify-center relative h-screen">
      <div className="bg-black text-center" id="projects">
        <h2 className="text-[#001987] font-space md:text-[2.5rem] text-[2rem] mx-auto mb-[5rem] ">
          <Text tid="projects" />
        </h2>
      </div>
      <div className="grid bg-black overflow-hidden grid-cols-3 grid-rows-2 gap-7 absolute top-[20%] md:right-[7.5rem] md:left-[7.5rem] right-[2rem] bottom-0 left-[2rem] mx-auto ">
        <div className="project">38</div>
        <div className="project">39</div>
        <div className="project">40</div>
        <div className="project">4</div>
        <div className="project">5</div>
        <div className="project">6</div>
      </div>
    </section>
  );
};

export default Projects;
