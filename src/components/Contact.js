import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GIT_HUB_URL,
  GIT_HUB_VAL,
  LINKDIN_URL,
  LINKDIN_VAL,
  GMAIL_URL,
  GMAIL_VAL,
  MOBILE_URL,
  MOBILE_VAL,
  COPY_ICON_URL,
} from "../utils/constant";
import SnackBar from "./SnackBar";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const mailtoHref = "mailto:saranyapsankar@gmail.com?subject=SendMail&body=Description";
  return (
    <ul className="flex gap-8 items-center animate-pulse">
      <li className="transition duration-300 ease-in-out transform hover:scale-110 ">
        <Link to={GIT_HUB_VAL} target="_blank" rel="noopener noreferrer">
          <img className="w-11 rounded-2xl" src={GIT_HUB_URL} />
        </Link>
      </li>
      <li className="transition duration-300 ease-in-out transform hover:scale-110">
        <Link to={LINKDIN_VAL} target="_blank" rel="noopener noreferrer">
          <img className="w-10 rounded-2xl" src={LINKDIN_URL} />
        </Link>
      </li>
      <li className="transition duration-300 ease-in-out transform hover:scale-110">
        <Link to={mailtoHref}>
          <img className="w-10 rounded-2xl" src={GMAIL_URL} />
        </Link>
      </li>
      <li className="relative group inline-block transition duration-300 ease-in-out transform hover:scale-110">
        <Link to={MOBILE_VAL}>
          <img className="w-10 rounded-lg" src={MOBILE_URL} />
        </Link>
        <div className="cust-pop opacity-0 invisible text-sm group-hover:opacity-100 group-hover:visible absolute w-40 -top-2 left-14 bg-slate-700 text-white border border-transparent rounded-lg shadow-lg shadow-green-800 py-2 z-10">
          <div className="flex flex-col text-sm font-normal m-2 gap-3">
            <div className="flex gap-3">
              <span>+91-9745253961</span>
              <button className="" onClick={() => {
                navigator.clipboard.writeText('+91-9745253961');
                setIsActive(true);
                setTimeout(()=>{setIsActive(false);}, 1000)
                }}>
                <img className="w-5" src={COPY_ICON_URL} />
              </button>
            </div>
            <div className="flex gap-3">
              <span>{MOBILE_VAL}</span>
              <button className="" onClick={() => {
                navigator.clipboard.writeText('+91-9745253961');
                setIsActive(true);
                setTimeout(()=>{setIsActive(false);}, 1000)
                }}>
                <img className="w-5" src={COPY_ICON_URL} />
              </button>
            </div>

          <SnackBar message="Copied!!" isActive={isActive}></SnackBar>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Contact;
