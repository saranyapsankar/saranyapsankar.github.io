import React from "react";
const CompanyCard = ({ experience, showIndex, setShowIndex }) => {
  return (
    <div className="shadow-md shadow-green-300 border border-green-900 rounded-md hover:cursor-pointer">
      <div className="p-3 bg-black border-green-900 border-b-4 item-in-out" onClick={() => { setShowIndex(!showIndex) }}>
        <div className="text-xl font-bold">
          {experience.jobTitle}
          {!showIndex ? (
            <span className="float-end text-green-400">＋</span>
          ) : (
            <span className="float-end text-green-400">－</span>
          )}
        </div>
        <div className="text-xs font-bold opacity-70">
          {experience.expSummary}
        </div>
        <hr className="border-green-900 my-2"></hr>
        <div className="text-xs font-normal">{experience.description}</div>
      </div>

      {showIndex && (
        <ul className="list-disc text-xs font-normal opacity-70 font-display gap-2 flex flex-col m-2 ml-4 pl-4 item-reveal">
          {experience?.detailedInfo?.map((item, index) => (
            <li key={index}>{item} </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CompanyCard;
