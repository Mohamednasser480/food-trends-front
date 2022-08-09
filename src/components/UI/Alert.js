import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Typography } from "./index";

const Alert = (props) => {
  let defaultClasses = `flex gap-x-2 mb-6 items-center p-3 text-white ${
    props.className ?? ""
  }`;
  const type = props.type ?? "error";
  const render = {
    error: (
      <div className={`${defaultClasses} bg-error`}>
        <MdErrorOutline className="h-5 w-5" />
        {props.children}
      </div>
    ),
    success: (
      <div className={`${defaultClasses} bg-success`}>
        <AiOutlineCheckCircle className="h-5 w-5" />
        <Typography variant="body2">{props.children}</Typography>
      </div>
    ),
  };
  return render[type] ? render[type] : null;
};

export default Alert;
