import React from "react";

export default function ProductIcon(props) {
  return (
    <div
      className={`product-icon group-one flex h-12 w-12 cursor-pointer items-center justify-center rounded-full  ${props.border&&"border"} bg-white transition-all duration-300 hover:border-black hover:bg-black`}
      data-tip={props.tooltip} onClick={props.onClickHandler}
    >
      {props.children}
    </div>
  );
}
