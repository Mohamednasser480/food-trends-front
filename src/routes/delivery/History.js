import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardPage, Loader, Typography } from '../../components/UI';
import {
  completedOrdersSelector,
  getCompletedOrders,
  statusSelector,
} from '../../store/slices/delivery';

const History = () => {
  const data = useSelector(completedOrdersSelector);
  const status = useSelector(statusSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompletedOrders());
  }, []);

  return (
    <DashboardPage title="History" className="flex justify-center">
      {status === 'Pending' ? <Loader /> : null}

      <div className="mx-5 mb-10 flex w-full flex-col items-start">
        <div className="flex w-full items-center bg-primary p-2 text-center font-medium text-white [&>*]:w-2/12 [&>*]:text-lg [&>*]:uppercase">
          <p className="">Order ID</p>
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
              className={`[&>*]:text-md flex w-full items-center border-b  py-1 text-center [&>*]:w-2/12 ${
                order.customer === null ? 'bg-red-200' : ''
              }`}
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
                    {order?.customer?.address?.governorate}
                  </Typography>
                  <Typography component="subtitle2">{order?.customer?.address?.city}</Typography>
                </>
              )}

              <Typography component="subtitle2">{order.createdAt.substring(0, 10)}</Typography>
              <Typography component="subtitle2">{order.totalPrice.toFixed(2)}</Typography>
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
};

export default History;
