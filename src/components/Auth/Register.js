import React, { useState } from "react";
import Form from "../UI/Form/Form";
import { Input, Select } from "../UI/Form";
import { useForm } from "react-hook-form";
import { Button, Loader, Typography } from "../UI";
import { joiResolver } from "@hookform/resolvers/joi";
import registerSchema from "../../services/form-schemes/customer-register";
import { useDispatch, useSelector } from "react-redux";
import { registerSelector, registerUser } from "../../store/slices/auth";
import RegisterError from "./RegisterError";
import RegisterSucceeded from "./RegisterSucceeded";
import Data from "../../eg.json";
export default function Register({ setShowRegister, setShowVendorRegister }) {
  let [city, setCity] = useState("");
  let [governorate, setGovernorate] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector(registerSelector);
  const handleVendorLogin = () => {
    setShowVendorRegister(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
  });

  const singUpRegister = {
    name: { ...register("name") },
    email: { ...register("email") },
    password: { ...register("password") },
    mobile: { ...register("mobile") },
  };

  // handleSubmit((newUser) => {
  //   // dispatch(registerUser(newUser));
  // });
  // (newUserData) => dispatch(registerUser(newUserData));
  const gov = new Set();
  Data.forEach((record) => gov.add(record.admin_name));
  // console.log(Array.from(gov));
  // city = city.toLowerCase();
  // governorate = governorate.toLowerCase().replace(/\s/g, '');
  const [govNotValid, setGovNotValid] = useState(false);
  const [cityNotValid, setCityNotValid] = useState(false);
  return (
    <div className="absolute left-0 top-0 w-full flex h-full items-center justify-center">
      {status === "error" ? (
        <RegisterError error={error} setShowRegister={setShowRegister} />
      ) : status === "loading" ? (
        <Loader />
      ) : status === "succeeded" ? (
        <RegisterSucceeded setShowRegister={setShowRegister} />
      ) : (
        <Form
          onSubmit={handleSubmit((newUserData) => {
            if (governorate == "") {
              setGovNotValid(true);
              return;
            }

            if (city == "") {
              setCityNotValid(true);
              return;
            }

            dispatch(
              registerUser({
                ...newUserData,
                address: {
                  city: city.toLowerCase(),
                  governorate: governorate.toLowerCase(),
                },
              })
            );
            setCityNotValid(false);
            setGovNotValid(false);
            setCity("")
            setGovernorate("")
          })}
          className="w-full px-10"
        >
          <Typography
            component="h1"
            className="text-center leading-[44px] text-primary"
          >
            Sign up
          </Typography>
          <Typography component="body2" className="my-3 text-center">
            Already have an account?
            <button
              type="button"
              className="mx-1 text-black"
              onClick={() => setShowRegister(false)}
            >
              Sign in
            </button>
          </Typography>
          <div className="flex flex-col gap-y-2">
            <Input
              type="text"
              register={singUpRegister.name}
              errors={errors}
              placeholder="Your full name"
              id="name"
            />
            <Input
              type="email"
              register={singUpRegister.email}
              errors={errors}
              placeholder="Your email"
              id="email"
            />
            <Input
              type="password"
              register={singUpRegister.password}
              errors={errors}
              placeholder="Password"
              id="password"
            />
            <Input
              type="text"
              register={singUpRegister.mobile}
              errors={errors}
              placeholder="Mobile Number"
              id="mobile"
            />
            <p className="font-medium">Address:</p>
            <select
              className="select w-full"
              onChange={(e) => {
                if (gov == "") {
                  setGovNotValid(true);
                  return;
                }
                setGovNotValid(false);
                setGovernorate(e.target.value);
              }}
            >
              <option selected disabled value="">
                Choose Your Governate
              </option>
              {Array.from(gov).map((el, index) => {
                return (
                  <option value={el} key={index}>
                    {el}
                  </option>
                );
              })}
            </select>
            {govNotValid && (
              <p className="font-medium text-red-500">
                Please Choose your Governate
              </p>
            )}

            {governorate !== "" ? (
              <select
                onChange={(e) => {
                  setCity(e.target.value);

                  if (city == "") {
                    setCityNotValid(true);
                    return;
                  }
                  setCityNotValid(false);
                }}
                className="select"
              >
                <option selected disabled value={""}>
                  Choose Your City
                </option>
                {Data.filter((dt) => dt.admin_name === governorate).map(
                  (el, index) => {
                    return (
                      <option value={el.city} key={index}>
                        {el.city}
                      </option>
                    );
                  }
                )}
              </select>
            ) : (
              ""
            )}
            {cityNotValid && (
              <p className="font-medium text-red-500">
                Please Choose your City
              </p>
            )}
          </div>

          <Button variant={"secondary"} type="submit" className="mt-5">
            sign up
          </Button>
          <button
            type="button"
            className="mt-2 font-medium capitalize hover:underline"
            onClick={handleVendorLogin}
          >
            sign up as a vendor instead ?
          </button>
        </Form>
      )}
    </div>
  );
}
