import { useState, useEffect } from 'react';
import { Button, Typography } from '../../UI';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData, selectUserToken } from '../../../store/slices/auth';
import axios from 'axios';
// import { cookie } from '..';

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // const token = cookie.getCookie('token')
  const token = useSelector(selectUserToken);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setAllOrders(json);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   let url = 'https://jsonplaceholder.typicode.com/users';
  //  url +=
  //    selected === 'lowest'
  //      ? 'sortBy=totalPrice&'
  //      : selected === 'highest'
  //      ? 'sortBy=totalPrice:desc&'
  //      : '';
  //  if (filterBtn === 'pending') url += 'status=pending&';
  //  else if (filterBtn === 'canceled') url += 'status=canceled&';
  //  else if (filterBtn === 'completed') url += 'status=completed&';

  // const token = cookie.getCookie('token');
  // const fetchData = async () => {
  //   const response = await axios.get(url);
  //   {
  //   headers: { Authorization: 'Bearer ' + token },
  // });

  // const json = response.data;
  // setAllOrders(json.data);
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <>
        <Typography component="h2" className="p-5 text-primary">
          your orders
        </Typography>

        <div className="m-5 flex flex-col justify-between xl:w-[1200px] xl:flex-row">
          <div>
            {/* {filters.map((filter, index) => {
                return (
                  <Button variant="user-account" className="w-32 hover:bg-primary" key={index}>
                    {filter}
                  </Button>
                );
              })} */}
          </div>
          {/* 
          <div className="mx-2 my-5 flex items-center lg:my-0">
            <Typography component="subtitle2">Price filters:</Typography>
            <Radio name={'price'} value="highest" checked={selected} onChange={handleChange}>
              Highest
            </Radio>
            <Radio name={'price'} checked={selected} onChange={handleChange} value="lowest">
              Lowest
            </Radio>
          </div> */}
        </div>

        <div className="mx-5 mb-10 flex items-start">
          <div className="w-full self-center rounded-xl border shadow-lg lg:w-[1200px]">
            <div className="flex items-center bg-[#f7f7f7] p-2 text-center font-medium text-black">
              <p className="w-10">Order ID</p>
              <p className="w-32">Customer</p>
              <p className="w-32">Governate</p>
              <p className="w-32">City</p>
              <p className="w-32">Order Date</p>
              <p className="w-32">Total Price</p>

              <p className="w-32"></p>
            </div>

            {allOrders.map((rev, index) => {
              return (
                <div className="flex w-full items-center border-b p-3 text-center" key={index}>
                  <p className="w-10 font-medium">{index + 1}</p>
                  {/* <p className="w-32 break-words">{rev.name}</p> */}
                  <p className="w-32">test</p>
                  <p className="w-32">test</p>
                  <p className="w-32">Not assigned</p>
                  <p className="w-32">test</p>
                  <p className="w-32">test</p>
                  <p className="w-32">
                    <Button variant="secondary" className="tracking-tight">
                      Assign
                    </Button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export default AllOrders;
