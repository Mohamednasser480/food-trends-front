import React from 'react';
import { Button } from '../UI';
import Typography from '../UI/Typography';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import * as Joi from 'joi';

import { ReactComponent as IconMenu } from '../../assets/uploadImage.svg';

const schema = Joi.object({
  productName: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Product name must be letters only',
      'string.empty': `Product name cannot be an empty field`,
      'any.required': `Product name is required`,
    }),
  summary: Joi.string().required().messages({
    'string.empty': `Summary cannot be an empty field`,
    'any.required': `Summary is required`,
  }),
  regularPrice: Joi.number().required().min(2).messages({
    'number.base': `Please provide a price`,
    'any.required': `Price is required`,
  }),
  inStock: Joi.number().required().min(2).messages({
    'number.base': `Please provide how much is your stock`,
    'any.required': `Summary is required`,
  }),
});

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  // console.log(errors);

  return (
    <>
      <div className="bg-[#f8f9fa] p-10">
        <Typography component={'h2'} className="mb-10 tracking-tight text-primary">
          Add New Product
        </Typography>

        <form action="" className="pb-10" onSubmit={handleSubmit((d) => console.log(d))}>
          <div className="flex flex-col md:flex-row">
            <div className="mr-9 w-full rounded-xl bg-white p-10 md:w-2/3">
              <Typography component="h5">Basic</Typography>
              <div>
                <label htmlFor="" className="label">
                  <Typography component={'body1'} className="capitalize">
                    Product Name
                  </Typography>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                  {...register('productName')}
                />
                <Typography component="body2" className="text-red-500">
                  {errors.productName?.message}
                </Typography>
              </div>

              <div>
                <label htmlFor="" className="label">
                  <Typography component={'body1'} className="capitalize">
                    Summary
                  </Typography>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  {...register('summary')}
                />
                <Typography component="body2" className="text-red-500">
                  {errors.summary?.message}
                </Typography>
              </div>

              <div className="max-w-lg">
                <div class="form-control">
                  <label class="label">
                    <Typography component={'body1'} className="capitalize">
                      Full description
                    </Typography>
                  </label>
                  <textarea
                    name="description"
                    class="textarea textarea-bordered h-24"
                    placeholder="Full description"
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <Typography component="body1">Regular price</Typography>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    {...register('regularPrice')}
                  />
                  <Typography component="body2" className="text-red-500">
                    {errors.regularPrice?.message}
                  </Typography>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <Typography component="body1">Discount price</Typography>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <Typography component="body1">Stock</Typography>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    {...register('inStock')}
                  />
                  <Typography component="body2" className="text-red-500">
                    {errors.inStock?.message}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-10 w-1/4 rounded-xl bg-white p-10 md:mt-0">
              <Typography component="h5">Media</Typography>
              <div className="flex w-full flex-col">
                {/* <IconMenu className="h-24 w-24 self-center" /> */}

                <div class="mt-10 flex items-center justify-center font-sans">
                  <label
                    for="dropzone-file"
                    class="mx-auto flex w-full max-w-lg cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-slate-50 p-6 text-center"
                  >
                    <svg
                      // xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>

                    <h2 class="mt-4 text-xl font-medium tracking-wide text-gray-700">
                      Product Images
                    </h2>

                    <p class="mt-2 tracking-wide text-gray-500">
                      Upload or darg & drop your file SVG, PNG, JPG or GIF.
                    </p>

                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
              <div class="form-control mt-5 w-full">
                <label class="label">
                  <Typography component="body1">Category</Typography>
                </label>
                <select class="select select-bordered w-full">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>
                    <Typography component="subtitle2">Dairy</Typography>
                  </option>
                  <option>
                    <Typography component="subtitle2" className="flex-1">
                      Fruits
                    </Typography>
                  </option>
                  <option>
                    <Typography component="subtitle2" className="flex-1">
                      Bakery
                    </Typography>
                  </option>
                  <option>
                    <Typography component="subtitle2" className="flex-1">
                      Meat
                    </Typography>
                  </option>
                  <option>
                    <Typography component="subtitle2" className="flex-1">
                      Dairy
                    </Typography>
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="my-10 w-2/3 rounded-xl bg-white p-10">
            <Typography component="h5">Shipping</Typography>
          </div>

          <Button variant="secondary" type="submit" className="my-10">
            Add
          </Button>
        </form>
      </div>
    </>
  );
}
