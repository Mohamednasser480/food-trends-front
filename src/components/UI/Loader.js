import React from "react";
import { Spinner } from "./";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80">
      <Spinner />
    </div>
  );
};

export default Loader;
