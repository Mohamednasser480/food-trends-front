import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DashboardPage, Typography } from '../../components/UI';
import { cookie } from '../../services';
import {
  completedOrdersCountSelector,
  completedOrdersSelector,
  getCompletedOrders,
} from '../../store/slices/delivery';

const History = () => {
  const data = useSelector(completedOrdersSelector);

  const dispatch = useDispatch();
  const token = cookie.getCookie('token');

  useEffect(() => {
    dispatch(getCompletedOrders());
  }, []);

  return (
    <DashboardPage title="History" className="flex justify-center">
      <div className="mx-5 mb-10 flex w-full flex-col items-start">
        <div className="flex w-full items-center bg-primary p-2 text-center font-medium text-white">
          <p className="w-1/12 text-lg uppercase">Order ID</p>
          <p className="w-2/12 text-lg uppercase">Customer Name</p>
          <p className="w-2/12 text-lg uppercase">Contact</p>
          <p className="w-2/12 text-lg uppercase">Governorate</p>
          <p className="w-2/12 text-lg uppercase">City</p>
          <p className="w-2/12 text-lg uppercase">Order Date</p>
          <p className="w-2/12 text-lg uppercase">Total Price (EGP)</p>
        </div>

        {data.map((order, index) => {
          return (
            <div className="flex w-full items-center border-b p-3 text-center" key={index}>
              <Typography component="subtitle2" className="w-1/12 font-medium">
                {order._id.substring(order._id.length - 6)}
              </Typography>
              <Typography component="subtitle2" className="w-2/12 break-words">
                {order.customer.name}
              </Typography>
              <Typography component="subtitle2" className="w-2/12 break-words">
                {order.customer.mobile}
              </Typography>
              <Typography component="subtitle2" className="w-2/12">
                {order.customer.address.governorate}
              </Typography>
              <Typography component="subtitle2" className="w-2/12">
                {order.customer.address.city}
              </Typography>
              <Typography component="subtitle2" className="w-2/12">
                {order.createdAt.substring(0, 10)}
              </Typography>
              <Typography component="subtitle2" className="w-2/12 text-green-500">
                {order.status}
              </Typography>
              <Typography component="subtitle2" className="w-2/12">
                {order.totalPrice.toFixed(2)}
              </Typography>
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
};

export default History;
