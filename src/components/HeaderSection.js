import React, { useRef, useEffect } from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import Summary from "./Summary";
import Skills from './Skills';
import Certification from "./Certifications";
import {SELF_ICON, EXP_ICON, SKILLS_ICON, CERT_ICON} from '../utils/constant'

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
    <div className="relative p-10 flex justify-between lg:w-11/12 m-auto gap-3 text-start max-lg:flex-col max-lg:p-0 max-lg:w-full">
      <div className="frame-1 lg:w-1/2 flex flex-col lg:sticky lg:h-screen max-lg:h-[80vh] top-10 lg:py-12 max-lg:mx-10 lg:justify-around max-lg:relative 
      max-lg:justify-between max-lg:w-full">
        <div className="w-4/5 flex flex-col gap-5 h-3/6">
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

        <div className="flex lg:flex-col gap-2 font-light min-h-1/6 max-lg:fixed max-lg:top-0 max-lg:-left-20 flex-col w-4/5">
          <button id="about" className="lg:opacity-50 h-10 flex items-center lg:w-9/12 lg:hover:w-full hover:opacity-100
          lg:focus:w-full focus:opacity-100 outline-none max-lg:bg-black max-lg:border-2 max-lg:border-green-700 max-lg:w-1/6
          max-lg:hover:w-fit max-lg:hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg max-lg:focus:w-14"
          onClick={() => handleClick(refList[0])}>
            <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span>
            <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
            <img className="size-8 mx-2" src={SELF_ICON}/>
            <span className="content-center">About</span>
            </div>
           
          </button>
          <button className="lg:opacity-50 h-10 flex items-center lg:w-9/12 lg:hover:w-full hover:opacity-100
          lg:focus:w-full focus:opacity-100 outline-none max-lg:bg-black max-lg:border-2 max-lg:border-green-700 max-lg:w-1/6
          max-lg:hover:w-fit max-lg:hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg max-lg:focus:w-14"
           onClick={() => handleClick(refList[1])}>
            <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span>
            <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
            <img className="size-8 mx-2" src={EXP_ICON}/>
            <span className="content-center">Experience</span>
            </div>
          </button>
          <button className="lg:opacity-50 h-10 flex items-center lg:w-9/12 lg:hover:w-full hover:opacity-100
          lg:focus:w-full focus:opacity-100 outline-none max-lg:bg-black max-lg:border-2 max-lg:border-green-700 max-lg:w-1/6
          max-lg:hover:w-fit max-lg:hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg max-lg:focus:w-14"
          onClick={() => handleClick(refList[2])}>
            <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span>
            <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
            <img className="size-8 mx-2" src={SKILLS_ICON}/>
            <span className="content-center">Skills</span>
            </div>
          </button>
          <button className="lg:opacity-50 h-10 flex items-center lg:w-9/12 lg:hover:w-full hover:opacity-100
          lg:focus:w-full focus:opacity-100 outline-none max-lg:bg-black max-lg:border-2 max-lg:border-green-700 max-lg:w-1/6
          max-lg:hover:w-fit max-lg:hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg max-lg:focus:w-14"
          onClick={() => handleClick(refList[3])}>
            <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span>
            <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
            <img className="size-8 mx-2" src={CERT_ICON}/>
            <span className="content-center">Certifications</span>
            </div>
          </button>
        </div>
        <div className="flex gap-2 h-12">
          <Contact></Contact>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-20 text-lg max-lg:w-full">
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
        
        <Skills 
          ref={(ref) => {
            refList[2] = ref;
          }}
          refList={refList}
          />
          
          <Certification
          ref={(ref) => {
            refList[3] = ref;
          }}
          refList={refList}
          />
      </div>
    </div>
  );
};

export default HeaderSection;
