import React from "react";
import { forwardRef } from 'react';

const Summary = forwardRef((props)=> {
    const { refList } = props;
    return (
        <section className="h-5/6 py-20 mt-12 text-gray-400" ref={(ref) => { refList[0] = ref }}>
        <div className="flex justify-between font-serif font-bold text-3xl">
        <span>&#8220;</span>
        <span>&#8221;</span>
        </div>
         
          <blockquote className="flex flex-col gap-2 ml-5">
          <i>Hey there!   🙋🏻‍♀️</i>
          <i>
            I'm a front-end developer originally from Kerala and currently based
            in Bangalore, India. My journey in front-end development began in
            2015, driven by my passion for creating visually appealing,
            intuitive, and responsive user interfaces. Along the way, I've had
            the opportunity to build software for an IoT-based startup, as well
            as for large global organizations in telecommunications,
            agricultural commodities, and sales forecasting sectors.
          </i>
          <i>
            Beyond my professional projects, I actively explore Angular and
            React by developing small-scale user interfaces. This helps me
            broaden my expertise and stay updated with the latest front-end
            technologies and practices.
          </i>
          
          </blockquote>
         
        </section>
    )
})

export default Summary;