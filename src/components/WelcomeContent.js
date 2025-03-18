import React from "react";
const WelcomeContent = ({setShowContent}) => {
  return (
    <div className="h-screen flex w-full justify-center ">
      <div
        className="wel-div absolute top-1/4 text-2xl animate-pulse"
        onClick={() => {
          setShowContent(true);
        }}
      >
        <span className="text-green-400">Hello &nbsp;</span>
        <span className="text-green-400">
          there 👋🏼 <br /><br />
        </span>
        <span className="ml-10 font-bold text-3xl">
          I'm Saranya, <br /> &nbsp;&nbsp;a Frontend Dev! <br /><br />
        </span>
        <button className="float-end bg-green-600 rounded-md px-3 ">Click to explore&nbsp;</button>
      </div>
    </div>
  );
};

export default WelcomeContent;
