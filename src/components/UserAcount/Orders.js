import React, { useEffect, useState } from "react";
import OrdersComponent from "./OrdersComponent";
import { useDispatch } from "react-redux";
import { fetchOrders } from "../../store/slices/orders";

const userType = "vendor";

export default function Orders() {
  // const [ordersData, setOrdersData] = useState([]);

  const dispatch = useDispatch();

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
      // return userData.map((user) => <div key={user.id}>{user.id}</div>);
    },
    delivery: () => {
      return <div>delivery</div>;
    },
  };

  return orders[userType] ? orders[userType]() : null;
}
