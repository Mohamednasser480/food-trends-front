import { useEffect, useState } from 'react';
import { Button, DashboardPage } from '../../components/UI';

const History = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setAllOrders(json);
    };

    fetchData();
  }, []);
  return (
    <DashboardPage title="History" className="flex justify-center">
      <div className="mx-5 mb-10 flex w-full flex-col items-start">
        <div className="flex w-full items-center bg-primary p-2 text-center font-medium text-white">
          <p className="w-1/12 text-lg uppercase">Order ID</p>
          <p className="w-2/12 text-lg uppercase">Customer</p>
          <p className="w-2/12 text-lg uppercase">Governate</p>
          <p className="w-2/12 text-lg uppercase">City</p>
          <p className="w-2/12 text-lg uppercase">Order Date</p>
          <p className="w-2/12 text-lg uppercase">Total Price</p>
        </div>

        {allOrders.map((rev, index) => {
          return (
            <div className="flex w-full items-center border-b p-3 text-center" key={index}>
              <p className="w-1/12 font-medium">{index + 1}</p>
              <p className="w-2/12 break-words">{rev.name}</p>
              <p className="w-2/12">test</p>
              <p className="w-2/12">test</p>
              <p className="w-2/12">Not assigned</p>
              <p className="w-2/12">test</p>
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
};

export default History;
