import React from "react";
import { NavLink } from "react-router-dom";

export default function MobileNavlink(props) {
  const addActiveLink = ({ isActive }) => {
    const className =
      "flex items-center gap-2 py-2  px-2 text-[#1F2227] hover:bg-base-200 transition-colors duration-300 hover:text-primary rounded-md ";
    return (
      className + (isActive ? " !bg-primary !text-white" : " text-[#1F2227]")
    );
  };

  return (
    <NavLink to={props.to} className={addActiveLink} onClick={props.onClick}>
      {props.icon}
      <span className="whitespace-nowrap font-sans text-lg font-medium">
        {props.text}
      </span>
    </NavLink>
  );
}
