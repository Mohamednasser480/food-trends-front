import React, { useState } from "react";
import Form from "../UI/Form/Form";
import { Input } from "../UI/Form";
import { useForm } from "react-hook-form";
import { Button, Typography, Loader } from "../UI";
import { joiResolver } from "@hookform/resolvers/joi";
import vendorRegisterSchema from "../../services/form-schemes/vendor-register";
import { useDispatch, useSelector } from "react-redux";
import { registerSelector, registerVendor } from "../../store/slices/auth";
import RegisterError from "./RegisterError";
import RegisterSucceeded from "./RegisterSucceeded";
const VendorRegister = ({ setShowVendorRegister, setShowRegister }) => {
  const { status, error } = useSelector(registerSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(vendorRegisterSchema),
  });
  const dispatch = useDispatch();
  const vendorRegister = {
    name: { ...register("name") },
    email: { ...register("email") },
    password: { ...register("password") },
    storeName: { ...register("storeName") },
  };
  handleSubmit((newUser) => {
    dispatch(registerVendor(newUser));
  });
  return (
    <div className="relative flex h-full items-center justify-center">
      {console.log(error)}
      {status === "error" ? (
        <RegisterError error={error} setShowRegister={setShowRegister} />
      ) : status === "loading" ? (
        <Loader />
      ) : status === "succeeded" ? (
        <RegisterSucceeded setShowRegister={setShowRegister} />
      ) : (
        <Form
          onSubmit={handleSubmit((newUserData) =>
            dispatch(registerVendor(newUserData))
          )}
          className="p-10"
        >
          <Typography
            component="h2"
            className="text-center leading-[44px] tracking-tight text-primary"
          >
            Join us as a vendor
          </Typography>

          <Typography component="body2" className="my-5 text-center">
            Already have an account?
            <button
              type="button"
              className="mx-1 mt-4 font-medium capitalize text-black hover:underline"
              onClick={() => setShowRegister(false)}
            >
              Sign in
            </button>
            instead
          </Typography>
          <div className="flex flex-col gap-y-3">
            <Input
              type="text"
              register={vendorRegister.name}
              errors={errors}
              placeholder="Your full name"
              id="name"
            />
            <Input
              type="text"
              register={vendorRegister.email}
              errors={errors}
              placeholder="Your email"
              id="email"
            />
            {/**set inpput type email */}
            <Input
              type="password"
              register={vendorRegister.password}
              errors={errors}
              placeholder="Password"
              id="password"
            />

            <Input
              type="text"
              register={vendorRegister.storeName}
              errors={errors}
              placeholder="Your store name"
              id="storeName"
            />
          </div>

          <Button variant={"secondary"} type="submit" className="mt-5">
            sign up
          </Button>

          <button
            type="button"
            className="mt-4 font-medium capitalize hover:underline"
            onClick={() => setShowVendorRegister(false)}
          >
            not a vendor?
          </button>
        </Form>
      )}
    </div>
  );
};

export default VendorRegister;
