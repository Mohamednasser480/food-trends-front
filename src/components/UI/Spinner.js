import React from "react";

const Spinner = (props) => {
  return (
    <div
      className={`h-2/6 max-h-[3rem] w-2/6 max-w-[3rem] animate-spin rounded-full border-[0.45rem] border-dotted border-white ${
        props.className || ""
      }`}
    ></div>
  );
};

export default Spinner;
