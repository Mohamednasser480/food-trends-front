import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/slices/orders';
import { Button, Typography } from '../UI';
import { selectUserData } from '../../store/slices/auth';
import { fetchProducts, productsSelector } from '../../store/slices/products';

import Radio from '../UI/Form/Radio';
import axios from 'axios';
import { cookie } from '../../services';

const filters = ['all orders', 'completed', 'pending', 'canceled'];

export default function Orders() {
  // user type state to define which part will be rendered
  const { userType } = useSelector(selectUserData);

  // products and filters states for vendor
  const [filterBtn, setFilterBtn] = useState('');
  const [vendorOrders, setVendorOrders] = useState([]);
  const [customerOrders, setCustomerOrders] = useState([]);
  const [deliveryOrders, setDeliveryOrders] = useState([]);
  const dispatch = useDispatch();

  // console.log(vendorOrders);

  //--------- Vendor Filters -----------------//
  // radio button value change to set the filtered orders as such
  const [selected, setSelected] = useState(null);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  // order status filter onchange function
  const handleOrderStatFilter = (filter) => setFilterBtn(filter);

  // fetching VENDOR orders by products sorted based on price and status
  useEffect(() => {
    let url = 'https://food-trends-api.herokuapp.com/api/v1/vendor/orders?';
    url +=
      selected === 'lowest'
        ? 'sortBy=totalPrice&'
        : selected === 'highest'
        ? 'sortBy=totalPrice:desc&'
        : '';
    if (filterBtn === 'pending') url += 'status=pending&';
    else if (filterBtn === 'canceled') url += 'status=canceled&';
    else if (filterBtn === 'completed') url += 'status=completed&';

    const token = cookie.getCookie('token');
    const fetchData = async () => {
      const response = await axios.get(url, {
        headers: { Authorization: 'Bearer ' + token },
      });

      const json = response.data;
      setVendorOrders(json.data);
    };

    fetchData();
  }, [selected, filterBtn]);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);
  // useEffect(() => {
  //   dispatch(fetchOrders());
  // }, [dispatch]);

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
                  <Button
                    variant="user-account"
                    className="w-32 capitalize hover:bg-primary"
                    key={index}
                    onClick={(e) => handleOrderStatFilter(e.target.value)}
                    value={filter}
                  >
                    {filter}
                  </Button>
                );
              })}
            </div>

            <div className="mx-2 my-5 flex items-center lg:my-0">
              <Typography component="subtitle2">Price filters:</Typography>
              <Radio name="price" value="highest" checked={selected} onChange={handleChange}>
                Highest
              </Radio>
              <Radio name="price" checked={selected} onChange={handleChange} value="lowest">
                Lowest
              </Radio>
            </div>
          </div>

          <div className="mx-5 mb-10 flex items-start">
            <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
              <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
                <p className="w-10">Order ID</p>
                <p className="w-48">Customer</p>
                <p className="w-48">Order Status</p>
                <p className="w-32">Order Date</p>
                <p className="w-32">Delivery Date</p>
                <p className="w-32">Total Price</p>
                <p className="w-32">Payment Method</p>
                <p className="w-32"></p>
              </div>

              {vendorOrders.map((order, index) => {
                return (
                  <div className="flex w-full items-center border-b p-3 text-center" key={index}>
                    <p className="w-10 font-medium">{index + 1}</p>
                    <p className="w- break-words">test name 3shan nasser mesh tmam</p>
                    {/* <p className="w-32 break-words">{order.customer.name}</p> */}
                    {order.status === 'pending' ? (
                      <p className="w-48 text-lg font-medium capitalize text-yellow-400 ">
                        {order.status}
                      </p>
                    ) : order.status === 'completed' ? (
                      <p className="w-48 text-lg font-medium capitalize text-green-400">
                        {order.status}
                      </p>
                    ) : (
                      <p className="w-48 text-lg font-medium capitalize text-red-400">
                        {order.status}
                      </p>
                    )}
                    <p className="w-2/12">{order.createdAt.slice(0, 10)}</p>
                    <p className="w-2/12">Not assigned</p>
                    <p className="w-2/12">{order.totalPrice.toFixed(2)} LE</p>
                    <p className="w-2/12">Credit Card</p>
                    <p className="w-2/12">
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

              {customerOrders.map((rev, index) => {
                return (
                  <div className="flex w-full items-center border-b p-3 text-center" key={index}>
                    <p className="w-10 font-medium">{index + 1}</p>
                    {/* <p className="w-32 break-words">{rev.name}</p> */}
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
  };

  return orders[userType] ? orders[userType]() : null;
}
