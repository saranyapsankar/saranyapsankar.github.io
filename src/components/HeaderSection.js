import React, { useRef, useEffect } from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import Summary from "./Summary";
import Skills from './Skills';
import Certification from "./Certifications";
import SectionMenu from "./SectionMenu";
import Projects from "./Projects";


const HeaderSection = () => {
  let refList = useRef([]);
  // const handleClick = (event) => {
  //   event.scrollIntoView({ behavior: "smooth", block: "center" });
  // };

  useEffect(() => {
    const elm = document.getElementById('about');
    elm?.focus();
  }, []);
  return (
    <div className="relative p-10 flex justify-between lg:w-11/12 m-auto gap-3 text-start max-lg:flex-col max-lg:p-0 max-lg:w-full">
      
      <div className="frame-1 w-full flex flex-col lg:sticky lg:h-screen max-lg:h-[80vh] lg:py-12 max-lg:mx-10 lg:justify-around max-lg:relative 
      max-lg:justify-around max-lg:w-full">
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

          <div className="flex gap-2 h-12">
          <Contact></Contact>
        </div>
        {/* <div className="lg:block hidden" >
        <SectionMenu refList={refList}></SectionMenu>
        </div> */}
        </div>

      </div>
      <div className="w-full flex flex-col gap-20 text-lg max-lg:w-full">
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
          <Projects
          ref={(ref) => {
            refList[3] = ref;
          }}
          refList={refList}
          />
      </div>
      <div className="block fixed left-0 m-4 lg:top-0 max-lg:bottom-0 ">
      <SectionMenu refList={refList} />
      </div>
    </div>
  );
};

export default HeaderSection;
