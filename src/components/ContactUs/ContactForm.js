import React from 'react';
import Form, { Input, TextArea } from '../UI/Form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import contactUsSchema from '../../services/form-schemes/contact';
import { Button, Typography } from '../UI';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(contactUsSchema),
  });

  const handleCheck = (e) => {
    e.preventDefault();
    console.log('clicked');
  };
  const contactRegister = {
    name: { ...register('name') },
    email: { ...register('email') },
    message: { ...register('message') },
  };

  return (
    <Form
      onSubmit={handleSubmit((e) => console.log(e))}
      className="mt-11 flex w-1/2 flex-col self-center"
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
            className=" bg-[#f5f5f5]"
          />
        </div>
        <div className="w-[45%]">
          <Input
            register={contactRegister.email}
            errors={errors}
            type="text"
            placeholder="Email"
            id="email"
            className="bg-[#f5f5f5]"
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

      <Button variant="secondary" type="submit" className="mt-5 w-3/12 self-center">
        Submit
      </Button>
    </Form>
  );
}
