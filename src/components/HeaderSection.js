import React, { useRef, useEffect } from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import Summary from "./Summary";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  let refList = useRef([]);
  const handleClick = (event) => {
    event.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const elm = document.getElementById('about');
    elm?.focus();
  }, []);
  return (
    <div className="relative p-10 flex justify-between w-11/12 m-auto gap-3 text-start">
      <div className="w-1/2 flex flex-col gap-20 sticky h-72 top-10 py-20">
        <div className="w-4/5 flex flex-col gap-5">
          <span className="bold text-5xl tracking-tight">
            Saranya Pandyatt Sivasankaran
          </span>
          <span className="bold text-2xl">Senior Front End Developer</span>
          <span className="text-md opacity-50 w-11/12">
            I specialize in creating finely tuned, engaging and scalable
            frontend products, with a focus on responsive and modular design to
            enhance user experiences.
          </span>
        </div>

        <div className="flex flex-col gap-2 font-light">
          <div id="about" className="opacity-50 flex items-center w-7/12 hover:w-9/12 hover:opacity-100
          focus:w-9/12 focus:opacity-100"
          onClick={() => handleClick(refList[0])}>
            <span className="w-6/12 border h-0 mr-3"></span>
            <span>About</span>
          </div>
          <div className="opacity-50 flex items-center w-7/12 hover:w-9/12 hover:opacity-100"
           onClick={() => handleClick(refList[1])}>
            <span className="w-6/12 border h-0 mr-3"></span>
            <span>Experience</span>
          </div>
          <div className="opacity-50 flex items-center w-7/12 hover:w-9/12 hover:opacity-100"
          onClick={() => handleClick(refList[0])}>
            <span className="w-6/12 border h-0 mr-3"></span>
            <span>Projects</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Contact></Contact>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-20 text-lg">
        <Summary
          ref={(ref) => {
            refList[0] = ref;
          }}
          refList={refList}
        />

        <Experience
          ref={(ref) => {
            refList[1] = ref;
          }}
          refList={refList}
        />
      </div>
    </div>
  );
};

export default HeaderSection;
