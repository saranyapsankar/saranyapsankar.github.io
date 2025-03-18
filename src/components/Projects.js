import React from "react"; 
import { forwardRef } from 'react';
import { projects } from "../utils/data";

const Projects = forwardRef((props, ref)=> {
    const { refList } = props;
    return (
        <div className="flex flex-col gap-3 shadow-md text-sm 
        shadow-green-300 border border-green-900 rounded-md p-4 my-40" ref={(ref) => { refList[4] = ref }}>
            <div className="my-4 text-center font-medium text-white bg-black -mt-4 -mx-4 p-2 shadow-green-300 border border-green-900 ">Projects</div>
            {
                projects?.map((item)=>(
                    <div className="flex gap-5 items-center frame-text shadow-md shadow-green-400 px-2 py-2 max-md:flex-col" key={item.name}>
                    <div className="flex flex-col md:w-1/2 gap-2">
                    <img className="w-60 h-40" src={item.logo}/>
                    <div className="text-green-800 font-semibold dark:text-green-400 text-center">{item.name}</div>
                    </div>
                    <div className="md:w-1/2 text-black dark:text-white flex flex-col gap-2">
                    <span className="text-xs">{item.description}</span>
                    <a href={item.link} className="text-xs text-blue-500">Deployed website</a>
                    <a href={item.git} className="text-xs text-blue-500">Git Repository</a>
                    </div>
                    </div>
                ))
            }
        </div>
    )
})

export default Projects;