import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  let variantClasses;

  if (props.variant === "primary") variantClasses = "bg-primary text-white hover:bg-black hover:text-white";
  if (props.variant === "secondary") variantClasses = "bg-secondary-400 text-primary hover:bg-black hover:text-white";

  const btnClasses =
    `btn px-7 text-base tracking-widest border-0 no-underline ${variantClasses || ""} ${
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
