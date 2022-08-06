import React, { useState } from 'react';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Form';
import { useForm } from 'react-hook-form';
import { Button, Typography } from '../UI';
import { joiResolver } from '@hookform/resolvers/joi';
import registerSchema from '../../services/form-schemes/customer-register';
import { useDispatch } from 'react-redux';
// import { registerUser } from "../../store/slices/auth";

export default function Register({ setShowRegister, setShowVendorRegister }) {
  const dispatch = useDispatch();
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
    customerName: { ...register('customerName') },
    email: { ...register('email') },
    password: { ...register('password') },
  };

  const handleCheck = (e) => {
    e.preventDefault();
    console.log('test');
  };

  handleSubmit((user) => {
    console.log('submitted');
    // dispatch(registerUser({ email: user.email, password: user.password }));
  });

  return (
    <Form onSubmit={handleSubmit((d) => console.log(d))} className="p-10">
      <Typography component="h1" className="text-center text-primary">
        Sign up
      </Typography>
      <Typography component="body2" className="my-5 text-center">
        Already have an account?
        <button type="button" className="mx-1 text-black" onClick={() => setShowRegister(false)}>
          Sign in
        </button>
        instead
      </Typography>
      <div className="flex flex-col">
        <Input
          type="text"
          register={singUpRegister.customerName}
          errors={errors}
          placeholder="Your full name"
          id="customerName"
        />
        <Input
          type="text"
          register={singUpRegister.email}
          errors={errors}
          placeholder="Your email"
          id="email"
        />
        {/**set inpput type email */}
        <Input
          type="password"
          register={singUpRegister.password}
          errors={errors}
          placeholder="Password"
          id="password"
        />
      </div>

      <Button variant={'secondary'} type="submit" className="mt-5">
        sign up
      </Button>
      <button type="button" className="mt-5" onClick={handleVendorLogin}>
        sign up as a vendor instead?
      </button>
    </Form>
  );
}
