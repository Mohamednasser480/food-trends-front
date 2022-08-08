import React from 'react';
import { Typography } from '../../UI';

export default function Input({ register, errors, className, label, id, ...options }) {
  return (
    <div className={`${className || ''}`}>
      {label ? (
        <label htmlFor={id} className="label">
          <Typography component={'body1'} className="capitalize">
            {label}
          </Typography>
        </label>
      ) : null}

      <input id={id} {...register} {...options} className={`input input-bordered w-full`} />
      <Typography component="body2" className="h-4 text-red-500">
        {errors[id]?.message}
      </Typography>
    </div>
  );
}
