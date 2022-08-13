import React, { useEffect, useState } from "react";
import { Button, Page, Typography } from "../../components/UI";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelector } from "../../store/slices/products";
import { BsCartPlus } from "react-icons/bs";

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const productsData = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    };

    fetchData();
  }, []);
  return (
    <div className="flex w-full">
      <div className="border">
        <div className="flex bg-primary p-2 text-center font-medium text-white">
          <p className="w-10"></p>
          <p className="w-32 break-words">Product</p>
          <p className="w-48">Comment</p>
          <p className="w-32">Customer</p>
          <p className="mr-5 w-32">Date</p>
          <p className="w-32">Actions</p>
        </div>

        {products.map((rev, index) => {
          return (
            <div
              className="flex w-full items-center border-b p-2 text-center"
              key={index}
            >
              <p className="w-10 font-medium">{index + 1}</p>
              <p className="w-32 break-words">{rev.title}</p>
              <p className="w-48">test</p>
              <p className="w-32">test</p>
              <p className="mr-5 w-32">test</p>
              <p className="w-48">
                <Button
                  variant="primary"
                  className="flex !h-10 w-10 items-center justify-center !p-0"
                >
                  <BsCartPlus className="h-5 w-5" />
                </Button>
              </p>
            </div>
          );
        })}
      </div>

      {/*<div className="w-full rounded-xl border shadow-lg md:w-1/4">*/}
      {/*  <Typography component="h5" className="p-5">*/}
      {/*    you may also like*/}
      {/*  </Typography>*/}
      {/*  {productsData.map((rev, index) => {*/}
      {/*    return (*/}
      {/*      <div*/}
      {/*        className="flex w-full items-center border-b p-3 text-center"*/}
      {/*        key={index}*/}
      {/*      >*/}
      {/*        <p className="h-24 w-24">*/}
      {/*          <img src={rev.images[0]} alt="" className="h-24 w-24" />*/}
      {/*        </p>*/}
      {/*        <p className="w-32 break-words">{rev.productName}</p>*/}
      {/*        /!* <p className="mx-5 w-96">test</p>*/}
      {/*        <p className="w-32">test</p>*/}
      {/*        <p className="mr-5 w-32">test</p> *!/*/}
      {/*        <p className="w-32">*/}
      {/*          <Button variant="user-account">add to cart</Button>*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}
    </div>
  );
};

export default Wishlist;
