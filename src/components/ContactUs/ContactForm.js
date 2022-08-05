import React from 'react';
import Form, { Input } from '../UI/Form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import contactUsSchema from '../../services/form-schemes/contact';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(contactUsSchema),
  });

  const productNameRegister = { ...register('productName') };
  return (
    <Form
      onSubmit={handleSubmit((d) => {
        console.log(d);
      })}
    >
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
