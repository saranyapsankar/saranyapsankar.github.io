import React from "react";
import { Link } from "react-router-dom";
import { GIT_HUB_URL, LINKDIN_URL, GMAIL_URL, MOBILE_URL } from "../utils/constant";

const Contact = () => {
  return (
    <ul className="flex gap-8 items-center">
      <li className="hover:text-green-500">
        <Link to="">
          <img className="w-11 rounded-2xl" src={GIT_HUB_URL} />
        </Link>
      </li>
      <li className="hover:text-green-500">
        <Link to=""> 
        <img className="w-10 rounded-2xl" src={LINKDIN_URL} />
        </Link>
      </li>
      <li className="hover:text-green-500">
        <Link to="">
        <img className="w-10 rounded-2xl" src={GMAIL_URL} />
        </Link>
      </li>
      <li className="hover:text-green-500">
        <Link to="">
        <img className="w-10 rounded-2xl" src={MOBILE_URL} />
        </Link>
      </li>
    </ul>
  );
};

export default Contact;
