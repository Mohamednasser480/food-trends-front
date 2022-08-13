import React, { useEffect, useCallback, useState } from "react";
import Form, { Input, TextArea } from "../UI/Form";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import contactUsSchema from "../../services/form-schemes/contact";
import { Button, Typography } from "../UI";
import { selectUserToken } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
export default function ContactForm() {
  const token = useSelector(selectUserToken);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(contactUsSchema),
  });

  function showNotification(arg) {
    switch (arg) {
      case "error":
        toast.error(` Please Login First!`, {
          position: "bottom-center",
          autoClose: 1000,
        });
        break;
      case true:
        toast.success(`Message has been sent!`, {
          position: "bottom-center",
          autoClose: 1000,
        });
        break;

      default:
        break;
    }


    return "";
  }

  const onSubmit = async (data) => {
    const onSendMessage = async (data) => {
      try {
        const url = `https://food-trends-api.herokuapp.com/api/v1/users/contact`;
        const res = await axios.post(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        showNotification(true)
        return res.data;
      } catch (error) {
        showNotification("error")
        console.log(error);

      }
    };
    onSendMessage(data);
    reset();
  };

  const contactRegister = {
    name: { ...register("name") },
    email: { ...register("email") },
    message: { ...register("message") },
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-11 flex w-full flex-col self-center p-4 md:w-1/2 md:p-0"
      >
        <Typography component="h3" className="text-center text-primary">
          Send a message
        </Typography>
        <div className="mt-5 flex justify-between">
          <div className="w-[45%]">
            <Input
              register={contactRegister.name}
              errors={errors}
              type="text"
              placeholder="Your name"
              id="name"
              inputClassName="bg-[#f5f5f5]"
            />
          </div>
          <div className="w-[45%]">
            <Input
              register={contactRegister.email}
              errors={errors}
              type="text"
              placeholder="Email"
              id="email"
              inputClassName="bg-[#f5f5f5]"
            />
          </div>
        </div>

        <TextArea
          register={contactRegister.message}
          errors={errors}
          type="text"
          placeholder="Message"
          id="message"
          className="bg-[#f5f5f5]"
        />

        <Button
          variant="secondary"
          type="submit"
          className="mt-5 w-3/12 self-center"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
