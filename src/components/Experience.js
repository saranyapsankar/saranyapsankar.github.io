import React, { useState } from "react";
import { forwardRef } from 'react';
import { experienceList } from "../utils/data";
import CompanyCard from "./CompanyCard";

const Experience = forwardRef((props, ref)=> {
    const { refList } = props;
    const [showIndex, setShowIndex] = useState(null);
return (
    <section className="flex flex-col gap-5 text-gray-200 h-5/6 py-20 item-reveal on-scroll" ref={(ref) => { refList[1] = ref }}>
          {
            experienceList?.map((expItem, index)=> (
              <CompanyCard key={expItem?.id} experience={expItem} 
              showIndex={index ===showIndex ? true : false}
              setShowIndex={()=> {
                index ===showIndex ? setShowIndex(null) : setShowIndex(index)
              }}
              ></CompanyCard>
            ))
          }
        </section>
)
});

export default Experience;