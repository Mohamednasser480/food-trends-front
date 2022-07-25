import React from 'react';
import { Button } from '../UI';
import Typography from '../UI/Typography';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import * as Joi from 'joi';

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

  console.log(errors);

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
                    // ref={register}
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
                    <Typography component="body1">In Stock?</Typography>
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
              <div className="h-1/2 w-full">Image here</div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <Typography component="body1">Category</Typography>
                </label>
                <select class="select select-bordered">
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
          {/* <button type="submit">submit</button> */}
          <Button variant="secondary" type="submit" className="my-10">
            Add
          </Button>
        </form>
      </div>
    </>
  );
}
