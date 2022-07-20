import React from 'react';
import Typography from '../UI/Typography';

export default function AddProduct() {
  return (
    <>
      <Typography component={'h3'} className="mb-5 tracking-tight text-primary">
        Add New Product
      </Typography>
      <div className="container my-10">
        <Typography component={'body1'} className="capitalize">
          Product Name
        </Typography>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-success w-full max-w-xs"
        />
        <Typography component={'body1'} className="capitalize">
          summery
        </Typography>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-success w-full max-w-xs"
        />
        <div className="max-w-lg">
          <Typography component={'body1'} className="capitalize">
            Full description
          </Typography>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success input-lg w-full"
          />
        </div>
        <div className="flex max-w-lg">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Enter amount</span>
            </label>
            <label class="input-group">
              <span>Price</span>
              <input type="text" placeholder="10" class="input input-bordered" />
              <span>USD</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Enter amount</span>
            </label>
            <label class="input-group">
              <span>Price</span>
              <input type="text" placeholder="10" class="input input-bordered" />
              <span>USD</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Enter amount</span>
            </label>
            <label class="input-group">
              <span>Price</span>
              <input type="text" placeholder="10" class="input input-bordered" />
              <span>USD</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
