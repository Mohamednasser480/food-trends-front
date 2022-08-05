import React from "react";
import Typography from "../Typography";

export default function Select({ selectOptions, register, label, errors, id }) {
  return (
    <div className="form-control mt-5 w-full">
      <label className="label">
        <Typography component="body1">{label}</Typography>
      </label>
      <select
        defaultValue={"DEFAULT"}
        className="select select-bordered w-full"
        {...register}
      >
        <option value={"DEFAULT"} disabled>
          Pick one
        </option>
        {selectOptions.map((opt, index) => {
          return (
            <option key={index} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
      <Typography component="body2" className="text-red-500">
        {errors[id]?.message}
      </Typography>
    </div>
  );
}
