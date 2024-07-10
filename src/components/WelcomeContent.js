import React from "react";
const WelcomeContent = ({setShowContent}) => {
  return (
    <div className="h-screen">
      <div
        className="wel-div absolute top-1/4 left-1/4 px-2 text-2xl animate-pulse"
        onClick={() => {
          setShowContent(true);
        }}
      >
        <span>Hello &nbsp;</span>
        <span>
          there !! <br /><br />
        </span>
        <span className="ml-10">
          I'm Saranya!  <br /><br />
        </span>
        <span className="ml-20">Click &nbsp;</span>
        <span>here &nbsp;</span>
        <span>to &nbsp;</span>
        <span>know &nbsp;</span>
        <span>more &nbsp;</span>
        <span>about &nbsp;</span>
        <span>me... &nbsp;</span>
      </div>
    </div>
  );
};

export default WelcomeContent;
