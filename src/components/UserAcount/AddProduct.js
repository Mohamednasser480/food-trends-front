import React from 'react';
import { Button } from '../UI';
import Typography from '../UI/Typography';

export default function AddProduct() {
  return (
    <>
      <div className="bg-[#f8f9fa] p-10">
        <Typography component={'h2'} className="mb-10 tracking-tight text-primary">
          Add New Product
        </Typography>

        <form action="" className="pb-10">
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
                />
              </div>

              <div>
                <label htmlFor="" className="label">
                  <Typography component={'body1'} className="capitalize">
                    summery
                  </Typography>
                </label>

                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="max-w-lg">
                <label htmlFor="" className="label">
                  <Typography component={'body1'} className="capitalize">
                    Full description
                  </Typography>
                </label>

                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-lg w-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <Typography component="body1">Regular price</Typography>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <Typography component="body1">Price after discount</Typography>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <Typography component="body1">Tax rate</Typography>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-xl bg-white p-10 md:mt-0">
              <Typography component="h5">Media</Typography>
              <div className=""></div>
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
