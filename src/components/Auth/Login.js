import React, { useState } from "react";
import Form from "../UI/Form/Form";
import { Input } from "../UI/Form";
import { useForm } from "react-hook-form";
import { Button, Typography, Loader } from "../UI";
import { joiResolver } from "@hookform/resolvers/joi";
import loginSchema from "../../services/form-schemes/login";
import {
  changeLoginStatus,
  login,
  loginSelector,
} from "../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDialog from "./Confirm";

export default function Login({ setShowRegister, showSignUp = true }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();
  const { status, error } = useSelector(loginSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
  });

  const loginRegister = {
    email: { ...register("email") },
    password: { ...register("password") },
  };

  let errorMessage = "";
  switch (error) {
    case `Pending`:
      errorMessage =
        "Please Verify Your Email, We 've send you a confirmation code.";
      break;
    case `Error: Unable to login`:
      errorMessage = "Wrong Email or Password!";
      break;
    default:
      break;
  }

  let onSubmitFunction = (user) => {
    dispatch(login(user));
    if (error == "Pending") {
      setShowConfirm(true);
    }
  };

  let onClickFunction = () => {
    setShowConfirm(true);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center p-8">
      {status === "loading" ? (
        <Loader />
      ) : showConfirm ? (
        <ConfirmDialog />
      ) : (
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          {/* <img src={require('../../assets/Logo.png')} alt="" /> */}
          <Typography component="h1" className="text-center text-primary">
            Sign in
          </Typography>

          <Typography
            component="body2"
            className={`mt-5 text-center ${showSignUp ? "" : "invisible"}`}
          >
            Don't have an account yet?
            <button
              type="button"
              className="mx-1 text-black"
              onClick={() => setShowRegister(true)}
            >
              Sign up
            </button>
            for free
          </Typography>

          <div className="my-5 flex flex-col gap-y-4">
            <Input
              type="email"
              register={loginRegister.email}
              errors={errors}
              placeholder="Your email"
              id="email"
              disabled={error == "Pending"}
            />
            <Input
              type="password"
              register={loginRegister.password}
              errors={errors}
              placeholder="Password"
              id="password"
              disabled={error == "Pending"}
            />
            <p className="px-2 text-center text-lg font-medium text-red-600 md:px-10">
              {errorMessage}
            </p>

            <Typography component="body2"></Typography>
          </div>

          {error == "Pending" ? (
            <div className="flex flex-col gap-2">
              <Button variant="primary" type="button" onClick={onClickFunction}>
                Verify
              </Button>
              <Button
                variant="secondary"
                type="button"
                onClick={() => {
                  dispatch(changeLoginStatus());
                }}
              >
                Login
              </Button>
            </div>
          ) : (
            <Button variant="secondary" type="submit" className="">
              Login
            </Button>
          )}
        </Form>
      )}
    </div>
  );
}
