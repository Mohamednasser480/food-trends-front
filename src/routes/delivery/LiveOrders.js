import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DashboardPage, Loader, Typography } from '../../components/UI';
import {
  assignedOrdersCountSelector,
  assignedOrdersSelector,
  completedOrdersCountSelector,
  deassignOrder,
  getAssignedOrders,
  setOrderComplete,
  statusSelector,
} from '../../store/slices/delivery';

const LiveOrders = () => {
  const data = useSelector(assignedOrdersSelector);
  const count = useSelector(assignedOrdersCountSelector);
  const completedCount = useSelector(completedOrdersCountSelector);
  const status = useSelector(statusSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssignedOrders());
  }, [count, completedCount]);

  const handleSetComplete = (id) => {
    dispatch(setOrderComplete(id));
  };
  const handleDeassign = (id) => {
    dispatch(deassignOrder(id));
  };

  return (
    <DashboardPage title="your orders" className="flex justify-center">
      {status === 'Pending' ? <Loader /> : null}

      <div className="mx-5 mb-10 flex w-full flex-col items-start">
        <div className="flex w-full items-center bg-primary p-2 text-center font-medium text-white [&>*]:w-2/12 [&>*]:text-lg [&>*]:uppercase">
          <p className="w-14">Order ID</p>
          <p>Customer Name</p>
          <p>Contact</p>
          <p>Governorate</p>
          <p>City</p>
          <p>Order Date</p>
          <p>Total Price (EGP)</p>
          <p></p>
        </div>

        {data.map((order, index) => {
          return (
            <div
              className="[&>*]:text-md flex w-full items-center border-b py-1 text-center [&>*]:w-2/12"
              key={index}
            >
              <Typography component="subtitle2" className="w-1/12 font-medium">
                {order._id.substring(order._id.length - 6)}
              </Typography>
              {order.customer === null ? (
                <>
                  <Typography component="subtitle2">Deleted User</Typography>
                  <Typography component="subtitle2">-</Typography>
                  <Typography component="subtitle2">-</Typography>
                  <Typography component="subtitle2">-</Typography>
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

              <Typography component="subtitle2">{order.totalPrice.toFixed(2)}</Typography>
              <div>
                <button
                  className="rounded-lg bg-red-500 p-1 uppercase text-white"
                  onClick={() => handleDeassign(order._id)}
                >
                  remove
                </button>
                <button
                  className="rounded-lg bg-green-500 p-1 uppercase text-white"
                  onClick={() => handleSetComplete(order._id)}
                >
                  complete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
};

export default LiveOrders;
