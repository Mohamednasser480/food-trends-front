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
        <div className="flex w-full items-center bg-primary p-2 text-center font-medium text-white [&>*]:w-2/12 [&>*]:text-lg [&>*]:uppercase">
          <p className="!w-14">Order ID</p>
          <p>Customer Name</p>
          <p>Contact</p>
          <p>Governorate</p>
          <p>City</p>
          <p>Order Date</p>
          <p>Total Price (EGP)</p>
        </div>

        {data.map((order, index) => {
          return (
            <div
              className="[&>*]:text-md flex w-full items-center border-b py-1 text-center [&>*]:w-2/12"
              key={index}
            >
              <Typography component="subtitle2" className="font-medium">
                {order._id.substring(order._id.length - 6)}
              </Typography>
              {order.customer === null ? (
                <>
                  <Typography component="subtitle2">Deleted User</Typography>
                  <Typography component="subtitle2">Deleted User</Typography>
                  <Typography component="subtitle2">Deleted User</Typography>
                  <Typography component="subtitle2">Deleted User</Typography>
                </>
              ) : (
                <>
                  <Typography component="subtitle2">{order.customer.name}</Typography>
                  <Typography component="subtitle2">{order.customer.mobile}</Typography>
                  <Typography component="subtitle2">
                    {order.customer.address.governorate}
                  </Typography>
                  <Typography component="subtitle2">{order.customer.address.city}</Typography>
                </>
              )}

              <Typography component="subtitle2">{order.createdAt.substring(0, 10)}</Typography>
              <Typography component="subtitle2" className="text-green-500">
                {order.status}
              </Typography>
              <Typography component="subtitle2">{order.totalPrice.toFixed(2)}</Typography>
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
};

export default History;
