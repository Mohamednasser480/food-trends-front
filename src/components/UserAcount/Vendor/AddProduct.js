import React, { useState } from "react";
import { Typography, Button } from "../../UI";
import addProductSchema from "../../../services/form-schemes/add-product";
import Form, { DragAndDrop, Input, Select, TextArea } from "../../UI/Form";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

export default function AddProduct() {
  // const [productName, setProductName] = useState("");
  // const [summary, setSummary] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState(0);
  // const [weight, setWeight] = useState(0);
  // const [discount, setDiscount] = useState(0);
  // const [inStock, setInStock] = useState(0);

  // const onProductName = (e) => setProductName(e.target.value);
  // const onSummary = (e) => setSummary(e.target.value);
  // const onDescription = (e) => setDescription(e.target.value);
  // const onPrice = (e) => setPrice(e.target.value);
  // const onWeight = (e) => setWeight(e.target.value);
  // const onDiscount = (e) => setDiscount(e.target.value);
  // const onInStock = (e) => setInStock(e.target.value);

  const selectOptions = ["Dairy", "Fruits", "Bakery", "Meat"];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(addProductSchema),
  });

  const handleSheck = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

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

  return (
    <>
      <div className="bg-[#f8f9fa] p-10">
        <Typography
          component={"h2"}
          className="mb-10 tracking-tight text-primary"
        >
          Add New Product
        </Typography>

        <Form onSubmit={handleSubmit((d) => console.log(d))}>
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
