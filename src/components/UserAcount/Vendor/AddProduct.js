import React from "react";
import { Typography, Button } from "../../UI";
import addProductSchema from "../../../services/form-schemes/add-product";
import Form, { DragAndDrop, Input, Select, TextArea } from "../../UI/Form";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/slices/Vendor/VendorSlice";

export default function AddProduct() {
  const dispatch = useDispatch();

  const selectOptions = ["Dairy", "Fruits", "Bakery", "Meat"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(addProductSchema),
  });

  const addProductRegister = {
    productName: { ...register("productName") },
    price: { ...register("price") },
    summary: { ...register("summary") },
    description: { ...register("description") },
    inStock: { ...register("inStock") },
    category: { ...register("category") },
    weight: { ...register("weight") },
    discount: { ...register("discount") },
  };

  const handle = (e) => {
    const data = {
      summary: e.summary,
      productName: e.productName,
      images: [
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      ],
      description: e.description,
      inStock: e.inStock,
      category: e.category,
      price: e.price,
    };
    dispatch(addProduct(data));
  };

  return (
    <>
      <div className="bg-[#f8f9fa] p-10">
        <Typography
          component={"h2"}
          className="mb-10 tracking-tight text-primary"
        >
          Add New Product
        </Typography>
        <Form onSubmit={handleSubmit((e) => handle(e))}>
          <div className="flex flex-col lg:flex-row">
            <div className="mr-9 flex w-full flex-col rounded-xl bg-white p-10 lg:w-2/3">
              <Typography component="h5">Basic</Typography>

              <div className="flex w-2/3 justify-between">
                <div>
                  <Input
                    register={addProductRegister.productName}
                    errors={errors}
                    type="text"
                    placeholder="Type here"
                    label="product name"
                    id="productName"
                  />
                </div>

                <div className="w-1/2">
                  <Input
                    register={addProductRegister.summary}
                    errors={errors}
                    type="text"
                    placeholder="Type here"
                    label="summary"
                    id="summary"
                  />
                </div>
              </div>
              <TextArea
                register={addProductRegister.description}
                label="Full description"
                errors={errors}
                placeholder="Full description"
                id="description"
              />

              <div className="md:grid md:grid-cols-3 md:gap-4">
                <div className="form-control w-full max-w-xs">
                  <Input
                    register={addProductRegister.price}
                    errors={errors}
                    type="number"
                    placeholder="LE"
                    label="regular price"
                    id="price"
                  />
                </div>
                <div className="form-control">
                  <Input
                    register={addProductRegister.weight}
                    errors={errors}
                    type="number"
                    placeholder="Kg"
                    label="Weight"
                    id="weight"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <Input
                    register={addProductRegister.discount}
                    errors={errors}
                    type="number"
                    placeholder="LE"
                    label="discount"
                    id="discount"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <Input
                    register={addProductRegister.inStock}
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
              <DragAndDrop label="Product Images" />
              <div className="form-control mt-5 w-full">
                <Select
                  selectOptions={selectOptions}
                  errors={errors}
                  register={addProductRegister.category}
                  label="category"
                  id="category"
                />
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
