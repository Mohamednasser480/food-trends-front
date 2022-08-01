import React from 'react';
import { Typography, Button } from '../../UI';
import { addProductSchema } from '../../../services/form-schemes';
import Form, { Input } from '../../UI/Form';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(addProductSchema),
  });

  return (
    <>
      <div className="bg-[#f8f9fa] p-10">
        <Typography component={'h2'} className="mb-10 tracking-tight text-primary">
          Add New Product
        </Typography>

        <Form schema={addProductSchema} onSubmit={handleSubmit((d) => console.log(d))}>
          <div className="flex flex-col lg:flex-row">
            <div className="mr-9 flex w-full flex-col rounded-xl bg-white p-10 lg:w-2/3">
              <Typography component="h5">Basic</Typography>

              <div className="flex w-1/2 justify-between">
                <div>
                  <Input
                    {...register('productName')}
                    errors={errors}
                    type="text"
                    placeholder="Type here"
                    label="product name"
                    id="productName"
                  />
                </div>

                <div className="w-1/2">
                  <Input
                    {...register('summary')}
                    errors={errors}
                    type="text"
                    placeholder="Type here"
                    label="summary"
                    id="summary"
                  />
                </div>
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-4">
                <div class="form-control w-full max-w-xs">
                  <Input
                    {...register('price')}
                    errors={errors}
                    type="number"
                    placeholder="LE"
                    label="regular price"
                    id="price"
                  />
                </div>
                <div class="form-control">
                  <Input
                    {...register('weight')}
                    errors={errors}
                    type="number"
                    placeholder="Kg"
                    label="Weight"
                    id="weight"
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <Input
                    {...register('discount')}
                    errors={errors}
                    type="number"
                    placeholder="LE"
                    label="discount"
                    id="discount"
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <Input
                    {...register('inStock')}
                    errors={errors}
                    type="number"
                    placeholder="items"
                    label="stock"
                    id="inStock"
                  />
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
          <Button
            variant="secondary"
            type="submit"
            className="mt-20 w-1/2 self-center lg:w-2/12 lg:self-start"
          >
            Add
          </Button>
        </Form>
      </div>
    </>
  );
}
