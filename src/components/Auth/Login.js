import React from "react";
import Form from "../UI/Form/Form";
import { Input } from "../UI/Form";
import { useForm } from "react-hook-form";
import { Button, Typography, Loader } from "../UI";
import { joiResolver } from "@hookform/resolvers/joi";
import loginSchema from "../../services/form-schemes/login";
import { login, selectStatus } from "../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";

export default function Login({ setShowRegister }) {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectStatus);
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

  return (
    <div className="h-full">
      {authStatus === "loading" ? <Loader /> : null}
      <Form
        onSubmit={handleSubmit((user) =>
          dispatch(login({ email: user.email, password: user.password }))
        )}
        className="p-8"
      >
        <Typography component="h1" className="text-center text-primary">
          Sign in
        </Typography>
        <Typography component="body2" className="mt-5 text-center">
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
        <div className="flex flex-col">
          <Input
            type="text"
            register={loginRegister.email}
            errors={errors}
            placeholder="Your email"
            id="email"
          />
          <Input
            type="password"
            register={loginRegister.password}
            errors={errors}
            placeholder="Password"
            id="password"
          />

          <button
            type="button"
            className="mt-10 self-end font-medium text-black hover:text-primary"
          >
            Forgot password?
          </button>
          <Typography component="body2"></Typography>
        </div>

        <Button variant={"secondary"} type="submit" className="mt-10">
          Login
        </Button>
      </Form>
    </div>
  );
}
