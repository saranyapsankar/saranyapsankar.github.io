import React from "react";
import {SELF_ICON, EXP_ICON, SKILLS_ICON, CERT_ICON, PROJ_ICON} from '../utils/constant'

const SectionMenu = ({ refList }) => {
    const handleClick = (event) => {
        event.scrollIntoView({ behavior: "smooth", block: "center" });
      };
    return (
         <div className="flex gap-2 font-light min-h-1/6 lg:flex-col">
                  <button id="about" className="h-10 flex items-center text-white bg-teal-900 dark:bg-black  hover:opacity-100
                  focus:opacity-100 outline-none border-2 dark:lg:opacity-50 border-green-700 w-[50px] lg:w-[80px]
                  hover:w-fit hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg lg:rounded-sm lg:px-4"
                  onClick={() => handleClick(refList[0])}>
                    {/* <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span> */}
                    <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
                    <img className="size-8 mx-2" src={SELF_ICON}/>
                    <span className="content-center">About</span>
                    </div>
                   
                  </button>
                  <button className="text-white h-10 flex items-center hover:opacity-100
                  focus:opacity-100 outline-none bg-teal-900 dark:bg-black dark:lg:opacity-50 border-2 border-green-700 w-[50px] lg:w-[80px]
                  hover:w-fit hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg lg:rounded-sm lg:px-4"
                   onClick={() => handleClick(refList[1])}>
                    {/* <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span> */}
                    <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
                    <img className="size-8 mx-2" src={EXP_ICON}/>
                    <span className="content-center">Experience</span>
                    </div>
                  </button>
                  <button className="text-white h-10 flex items-center hover:opacity-100
                   focus:opacity-100 outline-none bg-teal-900 dark:bg-black dark:lg:opacity-50 border-2 border-green-700 w-[50px] lg:w-[80px]
                  hover:w-fit hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg lg:rounded-sm lg:px-4"
                  onClick={() => handleClick(refList[2])}>
                    {/* <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span> */}
                    <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
                    <img className="size-8 mx-2" src={SKILLS_ICON}/>
                    <span className="content-center">Skills</span>
                    </div>
                  </button>
                  <button className="text-white h-10 flex items-center hover:opacity-100
                  focus:opacity-100 outline-none bg-teal-900 dark:bg-black dark:lg:opacity-60 border-2 border-green-700 w-[50px] lg:w-[80px]
                  hover:w-fit hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg lg:rounded-sm lg:px-4"
                  onClick={() => handleClick(refList[3])}>
                    {/* <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span> */}
                    <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
                    <img className="size-8 mx-2" src={CERT_ICON}/>
                    <span className="content-center">Certifications</span>
                    </div>
                  </button>
                  <button className="text-white h-10 flex items-center hover:opacity-100
                  focus:opacity-100 outline-none bg-teal-900 dark:bg-black dark:lg:opacity-60 border-2 border-green-700 w-[50px] lg:w-[80px]
                  hover:w-fit hover:pr-2 max-lg:border-l-0 max-lg:rounded-br-lg lg:rounded-sm lg:px-4"
                  onClick={() => handleClick(refList[4])}>
                    {/* <span className="w-5/12 border h-0 mr-3 max-lg:hidden"></span> */}
                    <div className=" flex gap-2 overflow-x-hidden max-lg:hover:w-full">
                    <img className="size-8 mx-2" src={PROJ_ICON}/>
                    <span className="content-center">Projects</span>
                    </div>
                  </button>
                </div>
    )
};

export default SectionMenu;