import React from "react";
import Typography from "../Typography";

export default function TextArea({
  register,
  errors,
  id,
  placeholder,
  label,
  ...options
}) {
  return (
    <div className="form-control">
      <label className="label">
        <Typography component={"body1"} className="capitalize">
          {label}
        </Typography>
      </label>
      <textarea
        {...register}
        {...options}
        className="textarea textarea-bordered h-24"
        placeholder={placeholder}
      />
      <Typography component="body2" className="text-red-500">
        {errors[id]?.message}
      </Typography>
    </div>
  );
}
