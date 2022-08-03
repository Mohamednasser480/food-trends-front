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
    <>
      <Typography component="h1" className="text-center text-primary">
        Login
      </Typography>
      <Typography component="body2" className="mt-5 text-center">
        Don't have an account yet?{' '}
        <button className="text-black" onClick={() => setShowRegister(true)}>
          Sign up
        </button>{' '}
        for free
      </Typography>

      <Form onSubmit={handleSubmit((d) => console.log(d))}>
        <div>
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
          <Typography component="body2" className="mt-10 !text-black">
            Forgot password?
          </Typography>
        </div>

        <Button variant={'secondary'} type="submit" className="mt-10">
          Login
        </Button>
      </Form>
    </>
  );
}
