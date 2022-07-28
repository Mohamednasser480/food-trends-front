import React from 'react';
import { Button } from '../UI';
import Typography from '../UI/Typography';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios';
import * as Joi from 'joi';

const schema = Joi.object({
  productName: Joi.string()
    .regex(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Product name must be letters only',
      'string.empty': `Product name is required`,
      'any.required': `Product name is required`,
    }),
  summary: Joi.string().required().messages({
    'string.empty': `Summary cannot be an empty field`,
    'any.required': `Summary is required`,
  }),
  description: Joi.string().messages({
    'string.empty': `Summary cannot be an empty field`,
  }),
  price: Joi.number().required().min(2).messages({
    'number.base': `Please provide a price`,
    'any.required': `Price is required`,
  }),
  category: Joi.string().messages({
    'string.empty': `Summary cannot be an empty field`,
  }),
  discount: Joi.number().messages({
    'string.empty': `Summary cannot be an empty field`,
  }),
  inStock: Joi.number().required().min(2).messages({
    'number.base': `Please provide how much is your stock`,
    'any.required': `Stock is required`,
  }),
  weight: Joi.number().required().min(2).messages({
    'number.base': `Please provide your shipment weight`,
    'any.required': `Stock is required`,
  }),
});

const addProduct = async (UserToken, data) => {
  try {
    console.log(data);
    let product = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/products',
      headers: { Authorization: 'Bearer ' + UserToken },
      data: { name: 'user13' },
    });
    console.log(product.data);
  } catch (e) {
    console.log(e);
  }
};

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  return (
    <>
      <div className="bg-[#f8f9fa] p-10">
        <Typography component={'h2'} className="mb-10 tracking-tight text-primary">
          Add New Product
        </Typography>

        <form
          action=""
          className="flex flex-col pb-10"
          onSubmit={handleSubmit((d) =>
            addProduct(
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmUyOGJiNWUwMTQ4YzllODkzNGRkODMiLCJpYXQiOjE2NTkwMTQwNjl9.SY8LT0LDdpN_pp7EYwiwLC0PF8rPB6GRJLaNcEO_QOo',
              d
            )
          )}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="mr-9 flex w-full flex-col rounded-xl bg-white p-10 lg:w-2/3">
              <Typography component="h5">Basic</Typography>
              <div>
                <div className="flex w-1/2 justify-between">
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
                  <div className="w-1/2">
                    <label htmlFor="" className="label">
                      <Typography component={'body1'} className="capitalize">
                        Summary
                      </Typography>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                      {...register('summary')}
                    />
                    <Typography component="body2" className="text-red-500">
                      {errors.summary?.message}
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="max-w-lg">
                <div class="form-control">
                  <label class="label">
                    <Typography component={'body1'} className="capitalize">
                      Full description
                    </Typography>
                  </label>
                  <textarea
                    class="textarea textarea-bordered h-24"
                    placeholder="Full description"
                    {...register('description')}
                  />
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-4">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <Typography component="body1">Regular price</Typography>
                  </label>
                  <input
                    type="number"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    {...register('price')}
                  />
                  <Typography component="body2" className="text-red-500">
                    {errors.regularPrice?.message}
                  </Typography>
                </div>
                <div class="form-control">
                  <label class="label">
                    <Typography component="body1">Weight</Typography>
                  </label>
                  <input
                    type="number"
                    placeholder="Kg"
                    class="input input-bordered w-full max-w-xs"
                    {...register('weight')}
                  />
                  <Typography component="body2" className="text-red-500">
                    {errors.weight?.message}
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
                    {...register('discount')}
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
            <div className="mt-10 w-full rounded-xl bg-white p-10 lg:mt-0 lg:w-1/4">
              <Typography component="h5">Media</Typography>
              <div className="flex w-full flex-col">
                <div class="mt-10 flex items-center justify-center font-sans">
                  <label
                    for="dropzone-file"
                    class="mx-auto flex w-full max-w-lg cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-slate-50 p-6 text-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
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
                  <option>Dairy</option>
                  <option>Fruits</option>
                  <option>Bakery</option>
                  <option>Meat</option>
                </select>
              </div>
            </div>
          </div>
          {/* <div className="my-10 w-full rounded-xl bg-white p-10 lg:w-2/3">
            <Typography component="h5">Shipping</Typography>
            <div className="flex flex-col justify-between md:flex-row">
              <div class="form-control md:w-[30%]">
                <label class="label">
                  <Typography component="body1">Width</Typography>
                </label>
                <input
                  type="number"
                  placeholder="cm"
                  class="input input-bordered w-full max-w-xs"
                  {...register('width')}
                />
                <Typography component="body2" className="text-red-500">
                  {errors.width?.message}
                </Typography>
              </div>
              <div class="form-control md:w-[30%]">
                <label class="label">
                  <Typography component="body1">Height</Typography>
                </label>
                <input
                  type="number"
                  placeholder="cm"
                  class="input input-bordered w-full max-w-xs"
                  {...register('height')}
                />
                <Typography component="body2" className="text-red-500">
                  {errors.height?.message}
                </Typography>
              </div>
            </div>
          </div> */}

          <Button
            variant="secondary"
            type="submit"
            className="mt-20 w-1/2 self-center lg:w-2/12 lg:self-start"
          >
            Add
          </Button>
        </form>
      </div>
    </>
  );
}
