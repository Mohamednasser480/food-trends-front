import { useState, useEffect } from 'react';
import { Button, Loader, Typography } from '../../components/UI';
import { DashboardPage } from '../../components/UI';
import { cookie } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import {
  allOrdersCountSelector,
  allOrdersSelector,
  assignedOrdersCountSelector,
  assignOrders,
  completedOrdersCountSelector,
  getAllOrders,
  getAssignedOrders,
  getCompletedOrders,
  statusSelector,
} from '../../store/slices/delivery';

const AllOrders = () => {
  const data = useSelector(allOrdersSelector);
  const count = useSelector(allOrdersCountSelector);
  const assignedOrdersCount = useSelector(assignedOrdersCountSelector);
  const completedOrdersCount = useSelector(completedOrdersCountSelector);
  const status = useSelector(statusSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAssignedOrders());
    dispatch(getCompletedOrders());
  }, [assignedOrdersCount]);

  const handleAssignOrder = async (id) => {
    dispatch(assignOrders(id));
  };

  return (
    <DashboardPage title="All Orders" className="flex flex-col justify-center">
      {status === 'Pending' ? <Loader /> : null}
      <Typography component="h6" className=" self-end">
        Your assigned orders:{' '}
        {assignedOrdersCount > 0 ? (
          <span className="mt-5 font-medium text-green-400">{assignedOrdersCount}</span>
        ) : (
          <span className="mt-5 font-medium text-red-400">{assignedOrdersCount}</span>
        )}
      </Typography>
      <Typography component="h6" className="self-end">
        delivered: <span className="font-medium text-green-400">{completedOrdersCount}</span>
      </Typography>
      <Typography component="h6" className="mb-5 self-end">
        All Orders: <span className="font-medium text-yellow-400">{count}</span>
      </Typography>
      <div className="mb-10 flex w-full flex-col items-start px-10">
        <div className="flex w-full items-center bg-primary p-2 text-center font-medium text-white">
          <p className="w-1/12 text-lg uppercase">Order ID</p>
          <p className="w-2/12 text-lg uppercase">Customer Name</p>
          <p className="w-2/12 text-lg uppercase">Contact</p>
          <p className="w-2/12 text-lg uppercase">Governorate</p>
          <p className="w-2/12 text-lg uppercase">City</p>
          <p className="w-2/12 text-lg uppercase">Order Date</p>
          <p className="w-2/12 text-lg uppercase">Total Price (EGP)</p>
          <p className=""></p>
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
              <Typography component="subtitle2" className="w-2/12">
                {order.totalPrice.toFixed(2)}
              </Typography>
              <Typography component="subtitle2" className="">
                <Button
                  variant="secondary"
                  className="tracking-tight"
                  onClick={() => handleAssignOrder(order._id)}
                >
                  Assign
                </Button>
              </Typography>
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
};

export default AllOrders;
