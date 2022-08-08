import React, { useEffect, useState } from 'react';
import OrdersComponent from './OrdersComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/slices/orders';
import { Button, Typography } from '../UI';
import { selectUserData } from '../../store/slices/auth';
import { fetchProducts, productsSelector } from '../../store/slices/products';

import Radio from '../UI/Form/Radio';

const filters = ['All Orders', 'Completed', 'Pending', 'Canceled'];

export default function Orders() {
  // const [ordersData, setOrdersData] = useState([]);

  const [products, setProducts] = useState([]);
  const { userType } = useSelector(selectUserData);

  const productsData = useSelector(productsSelector);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // console.log(productsData);

  useEffect(() => {
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const url = 'http://localhost3000/api/v1/orders';
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     const res = await axios.get(
  //       'http://localhost3000/api/v1/orders?status=pending&sortBy=totalPrice:desc'
  //     );
  //     setProducts(res.data);
  //   };

  //   fetchOrders();
  // }, []);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = {
    vendor: () => {
      return (
        <>
          <Typography component="h2" className="p-5 text-primary">
            your orders
          </Typography>

          <div className="m-5 flex flex-col justify-between xl:w-[1200px] xl:flex-row">
            <div>
              {filters.map((filter, index) => {
                return (
                  <Button variant="user-account" className="w-32 hover:bg-primary" key={index}>
                    {filter}
                  </Button>
                );
              })}
            </div>

            <div className="mx-2 my-5 flex items-center lg:my-0">
              <Typography component="subtitle2">Price filters:</Typography>
              <Radio name={'price'} value="highest" checked={selected} onChange={handleChange}>
                Highest
              </Radio>
              <Radio name={'price'} checked={selected} onChange={handleChange} value="lowest">
                Lowest
              </Radio>
            </div>
          </div>

          {/* {selected === 'highest' ? <div className="bg-red-400">test</div> : ''} */}

          <div className="mx-5 mb-10 flex items-start">
            <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
              <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
                <p className="w-10">Order ID</p>
                <p className="w-32">Customer</p>
                <p className="w-32">Order Status</p>
                <p className="w-32">Order Date</p>
                <p className="w-32">Delivery Date</p>
                <p className="w-32">Total Price</p>
                <p className="w-32">Payment Method</p>
                <p className="w-32"></p>
              </div>

              {products.map((rev, index) => {
                return (
                  <div className="flex w-full items-center border-b p-3 text-center" key={index}>
                    <p className="w-10 font-medium">{index + 1}</p>
                    <p className="w-32 break-words">{rev.name}</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">Not assigned</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">
                      <Button variant="user-account" className="tracking-tight">
                        order details
                      </Button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    },
    customer: () => {
      return (
        <>
          <Typography component="h2" className="p-5 text-primary">
            your orders
          </Typography>

          <div className="m-5 flex flex-col justify-between xl:w-[1200px] xl:flex-row">
            <div>
              {filters.map((filter, index) => {
                return (
                  <Button variant="user-account" className="w-32 hover:bg-primary" key={index}>
                    {filter}
                  </Button>
                );
              })}
            </div>

            <div className="mx-2 my-5 flex items-center lg:my-0">
              <Typography component="subtitle2">Price filters:</Typography>
              <Radio name={'price'} value="highest" checked={selected} onChange={handleChange}>
                Highest
              </Radio>
              <Radio name={'price'} checked={selected} onChange={handleChange} value="lowest">
                Lowest
              </Radio>
            </div>
          </div>

          {/* {selected === 'highest' ? <div className="bg-red-400">test</div> : ''} */}

          <div className="mx-5 mb-10 flex items-start">
            <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
              <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
                <p className="w-10">Order ID</p>
                <p className="w-32">Product</p>
                <p className="w-32">Price</p>
                <p className="w-32">Order Status</p>
                <p className="w-32">Order Date</p>
                <p className="w-32">Delivery Date</p>
                <p className="w-32">Payment Method</p>
                <p className="w-32"></p>
              </div>

              {products.map((rev, index) => {
                return (
                  <div className="flex w-full items-center border-b p-3 text-center" key={index}>
                    <p className="w-10 font-medium">{index + 1}</p>
                    <p className="w-32 break-words">{rev.name}</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-48">
                      <Button variant="user-account">order details</Button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    },
    delivery: () => {
      return (
        <>
          <Typography component="h2" className="p-5 text-primary">
            your orders
          </Typography>

          <div className="m-5 flex flex-col justify-between xl:w-[1200px] xl:flex-row">
            <div>
              {filters.map((filter, index) => {
                return (
                  <Button variant="user-account" className="w-32 hover:bg-primary" key={index}>
                    {filter}
                  </Button>
                );
              })}
            </div>

            <div className="mx-2 my-5 flex items-center lg:my-0">
              <Typography component="subtitle2">Price filters:</Typography>
              <Radio name={'price'} value="highest" checked={selected} onChange={handleChange}>
                Highest
              </Radio>
              <Radio name={'price'} checked={selected} onChange={handleChange} value="lowest">
                Lowest
              </Radio>
            </div>
          </div>

          {/* {selected === 'highest' ? <div className="bg-red-400">test</div> : ''} */}

          <div className="mx-5 mb-10 flex items-start">
            <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
              <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
                <p className="w-10">Order ID</p>
                <p className="w-32">Customer</p>
                <p className="w-32">Order Status</p>
                <p className="w-32">Order Date</p>
                <p className="w-32">Delivery Date</p>
                <p className="w-32">Total Price</p>
                <p className="w-32">Payment Method</p>
                <p className="w-32"></p>
              </div>

              {products.map((rev, index) => {
                return (
                  <div className="flex w-full items-center border-b p-3 text-center" key={index}>
                    <p className="w-10 font-medium">{index + 1}</p>
                    <p className="w-32 break-words">{rev.name}</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">Not assigned</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">
                      <Button variant="user-account" className="tracking-tight">
                        order details
                      </Button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    },
  };

  return orders[userType] ? orders[userType]() : null;
}
