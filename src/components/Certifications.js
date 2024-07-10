import React from "react"; 
import { forwardRef } from 'react';
import { certifications } from "../utils/data";

const Certification = forwardRef((props, ref)=> {
    const { refList } = props;
    return (
        <div className="flex flex-col gap-3 shadow-md text-sm 
        shadow-green-300 border border-green-900 rounded-md p-4 my-40" ref={(ref) => { refList[3] = ref }}>
            <div className="my-4 text-center font-medium bg-black -mt-4 -mx-4 p-2 shadow-green-300 border border-green-900 ">Certifications</div>
            {
                certifications?.map((item)=>(
                    <div className="flex gap-5 items-center frame-text" key={item.name}>
                    <img className="size-10" src={item.logo}/>
                    <span>{item.name}</span>
                    </div>
                ))
            }
        </div>
    )
})

export default Certification;