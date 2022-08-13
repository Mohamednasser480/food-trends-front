import axios from 'axios';
import { useEffect, useState } from 'react';
import { DashboardPage, Typography } from '../../components/UI';
import { cookie } from '../../services';

const LiveOrders = () => {
  const [assignedOrders, setAssignedOrders] = useState([]);

  const token = cookie.getCookie('token');
  useEffect(() => {
    const url = process.env.REACT_APP_API_URI + '/delivery/me?status=assigned';
    try {
      const fetchData = async () => {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(res.data);
        setAssignedOrders(res.data);
      };

      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <DashboardPage title="live orders" className="flex justify-center">
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

        {assignedOrders.map((order, index) => {
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
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
};

export default LiveOrders;
