import React from "react";
import ReactTooltip from "react-tooltip";

export default function ShareIcon(props) {
  <ReactTooltip />;

  return (
    <>
      <a
        href={props.href}
        className="text-base-400 transition-colors duration-300  hover:text-black"
        data-tip={props.tooltip}
      >
        {props.icon}
      </a>
      {/* Iniliaze Tooltip */}
      <ReactTooltip
        effect="solid"
        className="!font-satoshi  !w-fit !px-2 !py-1 !font-medium transition-all duration-1000"
      />
    </>
  );
}
