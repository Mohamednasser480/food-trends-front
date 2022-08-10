import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Button } from "../UI";

export default function RegisterSucceeded({ setShowRegister }) {
  const handleOnClick = () => {
    setShowRegister(false);
  };
  return (
    <div className="flex max-w-[90%] flex-col justify-center gap-5 text-center">
      <div className="flex justify-center">
        <BsCheckCircle size={120} className="text-primary" />
      </div>
      <h1 className="text-lg font-medium">
        Thank you! Please check your email for confirmation code.
      </h1>
      <Button
        variant={"primary"}
        type="submit"
        className="mt-5"
        onClick={handleOnClick}
      >
        Login!
      </Button>
    </div>
  );
}
