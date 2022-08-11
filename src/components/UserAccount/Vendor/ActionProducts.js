import React, { useState } from "react";
import { Typography, Button, Loader } from "../../UI";
import addProductSchema from "../../../services/form-schemes/add-product";
import Form, { DragAndDrop, Input, Select, TextArea } from "../../UI/Form";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
  vendorStatusSelector,
} from "../../../store/slices/vendor";

export default function AddProduct({
  actionType,
  _id,
  productName,
  price,
  summary,
  description,
  inStock,
  category,
  weight,
  discount,
}) {
  const vendorStatus = useSelector(vendorStatusSelector);
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);

  const selectOptions = [
    "Dairy",
    "Fruits",
    "Bakery",
    "Meat",
    "Veggies",
    "Chicken",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(addProductSchema),
  });

  const addImageHandler = (selectedImage) => {
    setImages(selectedImage);
  };

  const addProductRegister = {
    productName: register("productName", {
      value: productName ? productName : "",
    }),
    price: register("price", {
      value: price ? price : "",
    }),
    summary: register("summary", {
      value: summary ? summary : "",
    }),
    description: register("description", {
      value: description ? description : "",
    }),
    inStock: register("inStock", {
      value: inStock ? inStock : "",
    }),
    category: register("category", {
      value: category ? category : "",
    }),
    weight: register("weight", {
      value: weight ? weight : "",
    }),
    discount: register("discount", {
      value: discount ? discount : "",
    }),
  };

  const handleProduct = (e) => {
    const formData = new FormData();
    formData.append("id", _id);
    formData.append("summary", e.summary);
    formData.append("productName", e.productName);
    formData.append("images", images);
    formData.append("description", e.description);
    formData.append("inStock", e.inStock);
    formData.append("category", e.category);
    formData.append("price", e.price);

    if (actionType === "EDIT") {
      dispatch(updateProduct(formData));
    } else dispatch(addProduct(formData));

    reset();
  };

  return (
    <>
      <div className="bg-[#f8f9fa] p-10">
        {vendorStatus === " Pending" ? <Loader /> : null}
        <Typography
          component={"h2"}
          className="mb-10 tracking-tight text-primary"
        >
          {actionType === "EDIT" ? "Edit the Product" : "Add New Product"}
        </Typography>
        <Form onSubmit={handleSubmit((e) => handleProduct(e))}>
          <div className="flex flex-col lg:flex-row">
            <div className="mr-9 flex w-full flex-col rounded-xl bg-white p-10 lg:w-2/3">
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
              <DragAndDrop label="Product Images" onAddImg={addImageHandler} />
              <div className="container m-4 flex">
                {images && (
                  <img
                    className="h-32 w-32 "
                    src={URL.createObjectURL(images)}
                    alt="..."
                  />
                )}
              </div>
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
          {actionType === "EDIT" ? (
            <Button
              variant="primary"
              type="submit"
              className="mt-20 w-1/2 self-center lg:w-2/12 lg:self-start"
            >
              Update
            </Button>
          ) : (
            <Button
              variant="secondary"
              type="submit"
              className="mt-20 w-1/2 self-center lg:w-2/12 lg:self-start"
            >
              Add
            </Button>
          )}
        </Form>
      </div>
    </>
  );
}
