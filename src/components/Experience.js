import React from "react";
import { forwardRef } from 'react';

const Experience = forwardRef((props)=> {
    const { refList } = props;
return (
    <section className="flex flex-col gap-3 opacity-50 h-5/6 py-20" ref={(ref) => { refList[1] = ref }}>
          <p>
            I've built products for companies and businesses worldwide, ranging
            from telecommunication dashboard websites to high-performance
            sales-forecasting applications, with a focus on fast, elegant, and
            accessible user experiences.
          </p>
          <p>
            Currently, I work at XactlyCorp as a Senior Frontend Engineer on a
            web-based sales forecasting application that provides detailed
            insights and aligns with the organization's sales processes,
            handling large amounts of data.
          </p>
          <p>
            Previously, I was a Senior Frontend Engineer at LiveSmart, a
            startup, where I worked on projects like a property and hub
            installation management web application for apartments, dashboard
            application for AI chatbot management, and a LINE-based BOT for
            smart room control. I've got a chance to explore Google's
            Interactive Canvas framework while working on a POC App which
            supports conversational actions for smart room control features in
            the hospitality domain.
          </p>
          <p>
            Before LiveSmart, I served as a Senior Frontend Engineer at
            Accenture, where I developed a .NET Core + Angular-based web
            application for managing trades and their execution (buy/sell a
            commodity).
          </p>
          <p>
            My software development journey began at IBM, where I built a
            responsive, mobile-compatible web app for ticket management using
            Angular 4 and Spring Boot.
          </p>
          <p>
            Throughout my career, I've worked on multiple migration projects
            from desktop to web-based solutions using Angular 4, 7, 9, 17, and
            React 16, with a strong focus on performance and delivering a
            flawless user experience.
          </p>
        </section>
)
});

export default Experience;