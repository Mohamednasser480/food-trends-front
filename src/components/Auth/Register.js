import React from 'react';
import Form from '../UI/Form/Form';
import { Input } from '../UI/Form';
import { useForm } from 'react-hook-form';
import { Button, Loader, Typography } from '../UI';
import { joiResolver } from '@hookform/resolvers/joi';
import registerSchema from '../../services/form-schemes/customer-register';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, selectStatus } from '../../store/slices/auth';

export default function Register({ setShowRegister, setShowVendorRegister }) {
  const dispatch = useDispatch();
  const userStatus = useSelector(selectStatus);
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

  handleSubmit((newUser) => {
    dispatch(registerUser(newUser));
  });

  return (
    <div className="relative">
      {userStatus === 'loading' ? <Loader /> : null}
      <Form
        onSubmit={handleSubmit((newUserData) => dispatch(registerUser(newUserData)))}
        className="p-10"
      >
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
        <div className="flex flex-col gap-y-4">
          <Input
            type="text"
            register={singUpRegister.customerName}
            errors={errors}
            placeholder="Your full name"
            id="customerName"
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
        </div>

        <Button variant={'secondary'} type="submit" className="mt-5">
          sign up
        </Button>
        <button type="button" className="mt-4 font-medium capitalize hover:underline" onClick={handleVendorLogin}>
          sign up as a vendor instead ?
        </button>
      </Form>
    </div>
  );
}
