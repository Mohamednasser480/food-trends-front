import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  // const variant=props.variant==primary?;
  const btnClasses =
    `btn px-7 text-base tracking-widest text-white no-underline hover:bg-black ${
      props.className || ""
    }`.trim();
  if (props.to)
    return (
      <Link onClick={props.onClick} to={props.to} className={btnClasses}>
        {props.children}
      </Link>
    );
  return (
    <button
      type={props.type || "button"}
      className={btnClasses}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
