import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80">
      <div className="h-12 w-12 animate-spin rounded-full border-[0.45rem] border-dotted border-white"></div>
    </div>
  );
};

export default Loader;
