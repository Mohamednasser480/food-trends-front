import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  let variantClasses;

  if (props.variant === "primary")
    variantClasses =
      "btn px-7 bg-primary text-white hover:bg-black hover:text-white";
  if (props.variant === "secondary")
    variantClasses =
      "btn px-7 bg-secondary-400 text-primary hover:bg-black hover:text-white";
  if (props.variant === "user-account")
    variantClasses =
      "bg-secondary-400 text-primary hover:bg-primary hover:text-white p-1 rounded-lg capitalize mx-2 font-medium";

  const btnClasses = `text-base btn tracking-widest border-0 no-underline ${
    variantClasses || ""
  } ${props.className || ""}`.trim();
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
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default Button;
