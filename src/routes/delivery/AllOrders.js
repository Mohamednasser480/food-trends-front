import { useEffect } from 'react';
import { Button, Loader, Typography } from '../../components/UI';
import { DashboardPage } from '../../components/UI';
import { useDispatch, useSelector } from 'react-redux';
import {
  allOrdersCountSelector,
  allOrdersSelector,
  assignOrders,
  getAllOrders,
  statusSelector,
} from '../../store/slices/delivery';

const AllOrders = () => {
  const data = useSelector(allOrdersSelector);
  const count = useSelector(allOrdersCountSelector);
  const status = useSelector(statusSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [count]);

  const handleAssignOrder = async (id) => {
    dispatch(assignOrders(id));
  };

  return (
    <DashboardPage title="All Orders" className="flex flex-col justify-center">
      {status === 'Pending' ? <Loader /> : null}

      <div className="mb-10 flex w-full min-w-[800px] flex-col items-start px-10">
        <div className="flex w-full items-center bg-primary p-2 text-center font-medium text-white [&>*]:w-2/12 [&>*]:text-lg [&>*]:uppercase">
          <p className="!w-16">Order ID</p>
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
              <Typography component="subtitle2" className="!w-16 px-1">
                {order._id.substring(order._id.length - 6)}
              </Typography>
              <Typography component="subtitle2">{order.customer.name}</Typography>
              <Typography component="subtitle2">{order.customer.mobile}</Typography>
              <Typography component="subtitle2">{order.customer.address.governorate}</Typography>
              <Typography component="subtitle2">{order.customer.address.city}</Typography>
              <Typography component="subtitle2">{order.createdAt.substring(0, 10)}</Typography>
              <Typography component="subtitle2">{order.totalPrice.toFixed(2)}</Typography>
              <div>
                <Button
                  variant="secondary"
                  className="tracking-tight"
                  onClick={() => handleAssignOrder(order._id)}
                >
                  Assign
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
};

export default AllOrders;
