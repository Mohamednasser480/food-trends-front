import React, { useState } from "react";
import addProductSchema from "../../services/form-schemes/add-product";
import Form, {
  DragAndDrop,
  Input,
  Select,
  TextArea,
} from "../../components/UI/Form";
import { useForm } from "react-hook-form";
import { Typography, Button, Loader, DashboardPage } from "../../components/UI";
import { joiResolver } from "@hookform/resolvers/joi";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
  vendorStatusSelector,
} from "../../store/slices/vendor";
import { v4 } from "uuid";

const AddProduct = ({
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
}) => {
  const vendorStatus = useSelector(vendorStatusSelector);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const isImagesValid = images.length <= 4 && images.length >= 1;

  const selectOptions = [
    "dairy",
    "fruits",
    "bakery",
    "meat",
    "veggies",
    "chicken",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(addProductSchema),
  });

  const addImageHandler = (newImages) => {
    const images = [];
    for (let index = 0; index < newImages.length; index++) {
      const newImage = newImages[index];
      images.push({
        id: v4(),
        imgPrev: URL.createObjectURL(newImage),
        imgFile: newImage,
      });
    }
    setImages((prevImages) => [...prevImages, ...images]);
  };

  const imgRemoveHandler = (imgId) => {
    setImages((prevImgs) => {
      const removedImgIndex = prevImgs.findIndex(
        (prevImg) => prevImg.id === imgId
      );
      const updatedImages = [...prevImgs];
      updatedImages.splice(removedImgIndex, 1);
      return updatedImages;
    });
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
    if (isImagesValid) {
      const imgsFiles = images.map((image) => image.imgFile);
      const formData = new FormData();
      formData.append("productName", e.productName);
      formData.append("summary", e.summary);
      formData.append("description", e.description);
      formData.append("images", imgsFiles);
      formData.append("category", e.category);
      formData.append("price", e.price);
      formData.append("inStock", e.inStock);
      formData.append("discount", e.discount);
      formData.append("weight", e.weight);

    if (actionType === "EDIT") {
      dispatch(updateProduct({ _id, formData }));
    } else dispatch(addProduct(formData));

      reset();
    }
  };

  return (
    <DashboardPage
      title={actionType === "EDIT" ? "Edit the Product" : "Add New Product"}
      className="bg-base-200 shadow-none"
    >
      {vendorStatus === " Pending" ? <Loader /> : null}
      <Form
        className="flex flex-col gap-y-5"
        onSubmit={handleSubmit((data) => handleProduct(data))}
      >
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <div className="order-2 flex w-full flex-1 flex-col gap-y-5 rounded-xl bg-white p-5 xl:order-1">
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex-1">
                <Input
                  register={addProductRegister.productName}
                  errors={errors}
                  type="text"
                  placeholder="Type here"
                  label="product name"
                  id="productName"
                />
              </div>
              <div className="flex-1">
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
            <div className="flex flex-wrap gap-4">
              <div className="form-control flex-1">
                <Input
                  register={addProductRegister.price}
                  errors={errors}
                  type="number"
                  placeholder="LE"
                  label="regular price"
                  id="price"
                />
              </div>
              <div className="form-control flex-1">
                <Input
                  register={addProductRegister.weight}
                  errors={errors}
                  type="number"
                  placeholder="Kg"
                  label="Weight"
                  id="weight"
                />
              </div>
              <div className="form-control flex-1">
                <Input
                  register={addProductRegister.discount}
                  errors={errors}
                  type="number"
                  placeholder="LE"
                  label="discount"
                  id="discount"
                />
              </div>
              <div className="form-control flex-1">
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
          <div className="order-1 flex w-full flex-col gap-y-5 rounded-xl bg-white p-5 lg:w-1/3 xl:order-2">
            <Typography component="h5">Media</Typography>
            <DragAndDrop
              label="Product Images"
              onAddImg={addImageHandler}
              onImgRemove={imgRemoveHandler}
              images={images}
            />
            {!isImagesValid && (
              <Typography component="body1" className="text-center text-error">
                Please upload a valid number of image(s) (min: 1 and max: 4)
              </Typography>
            )}
            <Select
              selectOptions={selectOptions}
              errors={errors}
              register={addProductRegister.category}
              label="category"
              id="category"
            />
          </div>
        </div>
        {actionType === "EDIT" ? (
          <Button
            variant="primary"
            type="submit"
            className="w-1/2 self-center lg:w-2/12 lg:self-start"
          >
            Update
          </Button>
        ) : (
          <Button
            variant="secondary"
            type="submit"
            className="w-1/2 self-center lg:w-2/12 lg:self-start"
          >
            Add
          </Button>
        )}
      </Form>
    </DashboardPage>
  );
};

export default AddProduct;
