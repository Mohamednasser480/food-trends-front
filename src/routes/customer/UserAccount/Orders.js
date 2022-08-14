import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../store/slices/orders";
import { Button, Typography } from "../../../components/UI";
import { selectUserData } from "../../../store/slices/auth";
import {
  fetchProducts,
  productsSelector,
} from "../../../store/slices/products";

import Radio from "../../../components/UI/Form/Radio";
import axios from "axios";
import { cookie } from "../../../services";
const API_URI = process.env.REACT_APP_API_URI;
const ORDERS_API_URI = `${API_URI}/orders`;

const filters = ["all orders", "completed", "pending", "canceled"];

export default function Orders() {
  // user type state to define which part will be rendered
  const { userType } = useSelector(selectUserData);

  // products and filters states for vendor
  const [filterBtn, setFilterBtn] = useState("");
  const [customerOrders, setCustomerOrders] = useState([]);

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
    let url = ORDERS_API_URI;
    // url +=
    //   selected === "lowest"
    //     ? "sortBy=totalPrice&"
    //     : selected === "highest"
    //     ? "sortBy=totalPrice:desc&"
    //     : "";
    if (filterBtn === "pending") url += "?&status=pending&";
    else if (filterBtn === "canceled") url += "?&status=canceled&";
    else if (filterBtn === "completed") url += "?&status=completed&";

    const token = cookie.getCookie("token");
    const fetchData = async () => {
      const response = await axios.get(url, {
        headers: { Authorization: "Bearer " + token },
      });
      const json = response.data;
      setCustomerOrders(json.data);
      console.log(json.data);
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
                  <Button
                    variant="user-account"
                    className="w-fit px-4 hover:bg-primary"
                    key={index}
                    onClick={()=>{
                      handleOrderStatFilter(filter)
                    }}
                  >
                    {filter}
                  </Button>
                );
              })}
            </div>

            {/* <div className="mx-2 my-5 flex items-center lg:my-0">
              <Typography component="subtitle2">Price filters:</Typography>
              <Radio
                name={"price"}
                value="highest"
                checked={selected}
                onChange={handleChange}
              >
                Highest
              </Radio>
              <Radio
                name={"price"}
                checked={selected}
                onChange={handleChange}
                value="lowest"
              >
                Lowest
              </Radio>
            </div> */}
          </div>

          {/* {selected === 'highest' ? <div className="bg-red-400">test</div> : ''} */}

          <div className="mx-5 mb-10 flex items-start">
            <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
              <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
                <p className="w-[200px] ">Order ID</p>
                {/* <p className="w-32">Product</p> */}
                <p className="w-[200px] px-4">Price</p>
                <p className="w-[200px] px-4">Order Status</p>
                <p className="w-[200px] px-4">Order Date</p>
                <p className="w-[200px] px-4">Delivery Date</p>
                {/* <p className="w-[200px] px-4">Payment Method</p> */}
                <p className="w-[200px] px-4"></p>
              </div>

              {customerOrders.map((order, index) => {
                return (
                  <div
                    className="flex w-full items-center border-b p-3 text-center"
                    key={index}
                  >
                    <p className="w-[200px] font-medium">{index + 1}</p>
                    {/* <p className="w-[200px] px-4 break-words">{rev.name}</p> */}
                    {/* <p className="w-[200px] px-4">{""}</p> */}
                    <p className="w-[200px] px-4">{order.totalPrice.toFixed(2)} $</p>
                    <p className="w-[200px] px-4">{order.status}</p>
                    <p className="w-[200px] px-4">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                    <p className="w-[200px] px-4">
                      After 3 Days
                    </p>
                    <p className="w-48">
                      {/* <Button variant="user-account">order details</Button> */}
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
