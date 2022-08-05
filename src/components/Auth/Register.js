import React, { useState } from 'react';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Form';
import { useForm } from 'react-hook-form';
import { Button, Typography } from '../UI';
import { joiResolver } from '@hookform/resolvers/joi';
import registerSchema from '../../services/form-schemes/register';
import { useDispatch } from 'react-redux';
// import { registerUser } from "../../store/slices/auth";

export default function Register({ setShowRegister }) {
  const dispatch = useDispatch();
  const [vendorRegister, setVendorRegister] = useState(false);
  const handleVendorLogin = () => {
    setVendorRegister(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
  });

  const loginRegister = {
    name: { ...register('name') },
    email: { ...register('email') },
    password: { ...register('password') },
    storeName: { ...register('storeName') },
  };

  return (
    <Form
      onSubmit={handleSubmit((user) => {
        console.log('submitted');
        // dispatch(registerUser({ email: user.email, password: user.password }));
      })}
      className="p-10"
    >
      <Typography component="h1" className="text-center text-primary">
        Sign up
      </Typography>
      <Typography component="body2" className="mt-5 text-center">
        Already have an account?
        <button type="button" className="mx-1 text-black" onClick={() => setShowRegister(false)}>
          Sign in
        </button>
        instead
      </Typography>
      <div className="flex flex-col">
        <Input
          type="text"
          register={loginRegister.name}
          errors={errors}
          placeholder="Your full name"
          id="name"
        />
        <Input
          type="text"
          register={loginRegister.email}
          errors={errors}
          placeholder="Your email"
          id="email"
        />
        {/**set inpput type email */}
        <Input
          type="password"
          register={loginRegister.password}
          errors={errors}
          placeholder="Password"
          id="password"
        />
        {vendorRegister ? (
          <Input
            type="text"
            register={loginRegister.storeName}
            errors={errors}
            placeholder="Your store name"
            id="storeName"
          />
        ) : (
          ''
        )}
      </div>

      <Button variant={'secondary'} type="submit" className="mt-10">
        sign up
      </Button>
      <button type="button" onClick={handleVendorLogin}>
        sign up as a vendor instead?
      </button>
    </Form>
  );
}
