import React from 'react';
import Form, { Input } from '../UI/Form';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log();
  const productNameRegister = { ...register('productName') };
  return (
    <Form
      onSubmit={handleSubmit((d) => {
        console.log(d);
      })}
    >
      <input type="text" {...register('name')} />
      <Input
        register={productNameRegister}
        errors={errors}
        type="text"
        placeholder="Type here"
        label="product name"
        id="productName"
      />

      <input type="submit" />
    </Form>
  );
}
