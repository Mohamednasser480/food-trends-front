import React from 'react';
import { Typography } from '../../UI';

export default function Input({ register, errors, className, label, id, ...options }) {
  // console.log(options);
  return (
    <>
      <label htmlFor={id} className="label">
        <Typography component={'body1'} className="capitalize">
          {label}
        </Typography>
      </label>
      <input
        id={id}
        {...register}
        {...options}
        className={`input input-bordered w-full max-w-xs ${className || ''}`}
      />
      <Typography component="body2" className="text-red-500">
        {errors[id]?.message}
      </Typography>
    </>
  );
}
