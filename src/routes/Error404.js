import React from "react";
import { Link } from "react-router-dom";
import ErrorLg from "../assets/404_lg.svg";
import Errorsm from "../assets/404-sm.svg";
import { Button } from "../components/UI";
export default function Error404() {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 p-10">
      <img
        src={ErrorLg}
        className="hidden lg:block max-h-[600px]"
        alt="Error 404 - Page Not Found"
      />
      <img
        src={Errorsm}
        className="max-h-[600px] lg:hidden"
        alt="Error 404 - Page Not Found"
      />
      <Button to="/" variant="secondary" className="w-fit">
        Go Back!
      </Button>
    </div>
  );
}
