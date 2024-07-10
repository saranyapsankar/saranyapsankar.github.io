import React, { useState } from "react";
import { skillsObject} from "../utils/data";
import { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  const { refList } = props;
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <div
      className="p-3 flex flex-col gap-2 shadow-md shadow-green-300 border border-green-900 rounded-md bg-gray-800 relative"
      ref={(ref) => {
        refList[2] = ref;
      }}
    >
        <div className="flex rounded-md self-center">
        {
        skillsObject?.map((skillItem, index) => (
            <button key={skillItem.headerLabel+index} className={`text-sm leading-4 border border-gray-700 rounded-sm px-3
             text-center min-w-24 w-auto py-3 hover:bg-green-700 ${selectedTab === index ? 'bg-green-700' : 'bg-gray-900'}`}
             onClick={()=>{
                setSelectedTab(index);
             }}>{skillItem.headerLabel}</button>
        ))
        }
       
        </div>
      {skillsObject?.map((skillItem, index) => (
        
          <div className="flex place-content-center" key={skillItem.headerLabel}>
            {selectedTab === index && <div className="flex flex-wrap gap-3 w-11/12">
            {skillItem?.skillList?.map((item) => (
              <div
                key={item.title}
                className="w-24 h-20 rounded-md bg-neutral-800 text-sm flex flex-col items-center 
            shadow-sm shadow-green-300 justify-evenly py-2 text-center item-in-out"
              >
                <img
                  className={`rounded-lg ${item?.addClass}`}
                  src={item.imgUrl}
                />
                <span className="text-xs">{item.title}</span>
              </div>
            ))}
          </div>}
          
        </div>
      ))}
    </div>
  );
});

export default Skills;
