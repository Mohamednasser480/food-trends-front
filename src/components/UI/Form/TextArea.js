import React from 'react';
import Typography from '../Typography';

export default function TextArea({ errors, id, placeholder, label, ...options }) {
  return (
    <div class="form-control">
      <label class="label">
        <Typography component={'body1'} className="capitalize">
          {label}
        </Typography>
      </label>
      <textarea {...options} class="textarea textarea-bordered h-24" placeholder={placeholder} />
      <Typography component="body2" className="text-red-500">
        {errors[id]?.message}
      </Typography>
    </div>
  );
}
