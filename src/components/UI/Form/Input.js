import React from "react";
import { Typography } from "../../UI";

export default function Input({
  register,
  errors,
  className,
  label,
  id,
  ...options
}) {
  return (
    <>
      <label htmlFor={id} className="label">
        <Typography component={"body1"} className="capitalize">
          {label}
        </Typography>
      </label>
      <input
        id={id}
        {...register}
        {...options}
        className={`input input-bordered w-full ${className || ""}`}
      />
      <Typography component="body2" className="h-4 text-red-500">
        {errors[id]?.message}
      </Typography>
    </>
  );
}
