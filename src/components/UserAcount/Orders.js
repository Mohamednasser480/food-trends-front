import React, { useEffect, useState } from 'react';
import OrdersComponent from './OrdersComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/slices/orders';
import { Button, Typography } from '../UI';

import { fetchProducts, productsSelector } from '../../store/slices/products';

import Radio from '../UI/Form/Radio';

const userType = 'customer';
const filters = ['All Orders', 'Completed', 'Pending', 'Canceled'];

export default function Orders() {
  // const [ordersData, setOrdersData] = useState([]);

  const [products, setProducts] = useState([]);

  const productsData = useSelector(productsSelector);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('highest');

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = {
    vendor: () => {
      return (
        <div className=" container overflow-x-auto">
          <table className="table-compact table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>State</th>
              </tr>
            </thead>
            {<OrdersComponent />}
          </table>
        </div>
      );
    },
    customer: () => {
      return (
        <>
          <Typography component="h2" className="p-5 text-primary">
            your orders
          </Typography>

          <div className="m-5 flex w-[1200px] flex-col justify-between  lg:flex-row">
            <div>
              {filters.map((filter) => {
                return (
                  <Button variant="user-account" className="w-32 hover:bg-primary">
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

          <div className="mx-5 flex items-start">
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
                  <div className="flex w-full items-center border-b p-2 text-center" key={index}>
                    <p className="w-10 font-medium">{index + 1}</p>
                    <p className="w-32 break-words">{rev.name}</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">test</p>
                    <p className="w-32">
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
      return <div>delivery</div>;
    },
  };

  return orders[userType] ? orders[userType]() : null;
}
