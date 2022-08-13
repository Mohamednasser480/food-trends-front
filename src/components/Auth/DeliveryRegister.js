import { joiResolver } from "@hookform/resolvers/joi";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Loader, Typography } from "../../components/UI";
import { deliveryRegisterSchema } from "../../services/form-schemes";
import {
  registerDelivery,
  registerSelector,
  loginSelector,
  getUserData,
  loginErrorSelector,
  selectStatus,
  verifySelector,
} from "../../store/slices/auth";
import Form, { Input } from "../UI/Form";
import RegisterError from "./RegisterError";
import RegisterSucceeded from "./RegisterSucceeded";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { cookie } from "../../services";

export default function DeliveryRegister(props) {
  const { status, error } = useSelector(registerSelector);
  const { status: verifyStatus, error: verifyError } =
    useSelector(verifySelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(deliveryRegisterSchema),
  });
  const dispatch = useDispatch();
  const deliveryRegister = {
    name: { ...register("name") },
    email: { ...register("email") },
    password: { ...register("password") },
    mobile: { ...register("mobile") },
  };
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // if (loginStatusObj.status=="succeeded") {
    //   dispatch(getUserData(token));
    // }
    if (verifyStatus == "loading" && verifyError == "") {
      const token = cookie.getCookie("token");
      navigate("/");
      dispatch(getUserData(token));
    }
  }, [verifyStatus]);

  return (
    <div className="container flex flex-col gap-2  p-5 ">
      <Typography
        variant="h2"
        component="h5"
        className=" mb-3 text-center text-[3.25rem] uppercase text-primary md:mb-0 md:text-6xl"
      >
        Delivery Register
      </Typography>
      <div className="flex flex-wrap items-center justify-center">
        {status === "error" ? (
          <div className="flex flex-col gap-4 lg:w-1/2">
            {showLogin ? (
              <Login showSignUp={false} />
            ) : (
              <RegisterError error={error} showLogin={false} />
            )}
            {!showLogin && (
              <Button
                variant={"primary"}
                type="submit"
                className=""
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
            )}
          </div>
        ) : status === "loading" ? (
          <Loader />
        ) : status === "succeeded" ? (
          <div className="flex flex-col items-center justify-center gap-4">
            {!showLogin && <RegisterSucceeded showLogin={false} />}
            {showLogin ? (
              <Login showSignUp={false} />
            ) : (
              <Button
                variant={"primary"}
                type="submit"
                className="w-[90%]"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
            )}
          </div>
        ) : (
          // <Login/>
          <Form
            onSubmit={handleSubmit((newUserData) =>
              dispatch(registerDelivery(newUserData))
            )}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col gap-y-3">
              <Input
                type="text"
                register={deliveryRegister.name}
                errors={errors}
                placeholder="Full Name"
                id="name"
              />
              <Input
                type="text"
                register={deliveryRegister.email}
                errors={errors}
                placeholder="Your Email"
                id="email"
              />
              {/**set inpput type email */}
              <Input
                type="password"
                register={deliveryRegister.password}
                errors={errors}
                placeholder="Password"
                id="password"
              />

              <Input
                type="text"
                register={deliveryRegister.mobile}
                errors={errors}
                placeholder="Mobile Number"
                id="mobile"
              />
            </div>

            <Button variant={"secondary"} type="submit" className="mt-5 ">
              sign up
            </Button>
          </Form>
        )}

        <div className="hidden w-1/2 p-10 lg:block">
          <img src={require("../../assets/Delivery.png")} className="w-full" />
        </div>
      </div>
    </div>
  );
}
