import { AiOutlineStar } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { Button, Typography } from '../../UI';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, productsSelector } from '../../../store/slices/products';

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  const productsData = useSelector(productsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(productsData);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    };

    fetchData();
  }, []);
  return (
    <>
      <Typography component="h2" className="p-5 text-primary">
        your wishlist
      </Typography>
      <div className="mx-5 flex items-start justify-evenly gap-x-5">
        {/* <AiOutlineStar
        size={25}
        cursor={'pointer'}
        className={'transition-all hover:text-green-800'}
      /> */}

        <div className="w-full self-center rounded-xl border shadow-lg md:w-[1200px]">
          <div className="flex bg-[#f7f7f7] p-2 text-center font-medium text-black">
            <p className="w-10"></p>
            <p className="w-32 break-words">Title</p>
            <p className="mx-5 w-96">Comment</p>
            <p className="w-32">Customer</p>
            <p className="mr-5 w-32">Date</p>
            <p className="w-32">Rate</p>
          </div>

          {products.map((rev, index) => {
            return (
              <div className="flex w-full items-center border-b p-2 text-center" key={index}>
                <p className="w-10 font-medium">{index + 1}</p>
                <p className="w-32 break-words">{rev.title}</p>
                <p className="mx-5 w-96">test</p>
                <p className="w-32">test</p>
                <p className="mr-5 w-32">test</p>
                <p className="w-32">
                  <Button variant="user-account">add to cart</Button>
                </p>
              </div>
            );
          })}
        </div>

        <div className="w-full rounded-xl border shadow-lg md:w-1/4">
          <Typography component="h5" className="p-5">
            you may also like
          </Typography>
          {productsData.map((rev, index) => {
            return (
              <div className="flex w-full items-center border-b p-3 text-center" key={index}>
                <p className="h-24 w-24">
                  <img src={rev.images[0]} alt="" className="h-24 w-24" />
                </p>
                <p className="w-32 break-words">{rev.productName}</p>
                {/* <p className="mx-5 w-96">test</p>
              <p className="w-32">test</p>
              <p className="mr-5 w-32">test</p> */}
                <p className="w-32">
                  <Button variant="user-account">add to cart</Button>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
