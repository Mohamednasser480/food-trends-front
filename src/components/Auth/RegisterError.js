import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { changeRegisterStatus } from "../../store/slices/auth";
import { Button } from "../UI";

export default function RegisterError({ error, setShowRegister }) {
  const dispatch = useDispatch();
  const onLoginClickHandler = () => {
    dispatch(changeRegisterStatus("idle"));
  };

  let errorMessage = "";

  const isRegsitered = error.search("email_1 dup key:") !== -1 ? true : false;

  if (error) {
    if (isRegsitered) {
      errorMessage = "Email is registered before, Please Login!";
    }
  }

  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-6">
        <BiErrorCircle size={120} className="text-secondary-400" />
        <h1 className="text-lg font-medium">{errorMessage}</h1>
      </div>
      <div className="flex flex-col justify-center">
        <Button
          variant={"primary"}
          type="submit"
          className="mt-5"
          onClick={() => setShowRegister(false)}
        >
          Login
        </Button>
        <Button
          variant={"secondary"}
          type="button"
          className="mt-5"
          onClick={onLoginClickHandler}
        >
          Sign up with another account?
        </Button>
      </div>
    </div>
  );
}
