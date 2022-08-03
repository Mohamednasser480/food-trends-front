import React, { useState } from 'react';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Form';
import { useForm } from 'react-hook-form';
import { Button, Typography } from '../UI';
import { joiResolver } from '@hookform/resolvers/joi';
import loginSchema from '../../services/form-schemes/login';

export default function Login({ setShowRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
  });

  const loginRegister = {
    email: { ...register('email') },
    password: { ...register('password') },
  };

  return (
    <Form onSubmit={handleSubmit((d) => console.log(d))} className="p-10">
      <Typography component="h1" className="text-center text-primary">
        Sign in
      </Typography>
      <Typography component="body2" className="mt-5 text-center">
        Don't have an account yet?
        <button type="button" className="mx-1 text-black" onClick={() => setShowRegister(true)}>
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

        <button type="button" className="mt-10 self-end font-medium text-black hover:text-primary">
          Forgot password?
        </button>
        <Typography component="body2"></Typography>
      </div>

      <Button variant={'secondary'} type="submit" className="mt-10">
        Login
      </Button>
    </Form>
  );
}
