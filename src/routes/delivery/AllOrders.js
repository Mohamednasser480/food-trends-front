import { useState, useEffect } from 'react';
import { Button, Typography } from '../../components/UI';
import { DashboardPage } from '../../components/UI';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData, selectUserToken } from '../../store/slices/auth';
import axios from 'axios';
import { cookie } from '../../services';
// import { cookie } from '..';

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);

  // const { token } = useSelector(selectUserData);
  // const token =
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY1MDVhNmZlMDNiNDM0NDlhZmFlNGIiLCJpYXQiOjE2NjAzMTkzNzksImV4cCI6MTY2MDU3ODU3OX0.QASPSk5qGZm3lSJqloAzlIOKqfkFdiEGiFalHwcuXus';
  // console.log(token);

  const token = cookie.getCookie('token');
  useEffect(() => {
    const url = process.env.REACT_APP_API_URI + '/delivery';
    try {
      const fetchData = async () => {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllOrders(res.data.data);
        setOrderCount(res.data.count);
      };

      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(allOrders);

  return (
    <DashboardPage title="All Orders" className="flex flex-col justify-center">
      <Typography component="h6" className=" self-end">
        Your assigned orders: <span className="mt-5 font-medium text-red-400">0</span>
      </Typography>
      <Typography component="h6" className="self-end">
        delivered: <span className="font-medium text-green-400">10</span>
      </Typography>
      <Typography component="h6" className="mb-5 self-end">
        All Orders: <span className="font-medium text-yellow-400">{orderCount}</span>
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

        {allOrders.map((order, index) => {
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
                Not assigned
              </Typography>
              <Typography component="subtitle2" className="w-2/12">
                {order.totalPrice.toFixed(2)}
              </Typography>
              <Typography component="subtitle2" className="">
                <Button variant="secondary" className="tracking-tight">
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
