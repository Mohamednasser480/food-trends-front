import React, { useEffect, useState } from 'react';

import Typography from '../UI/Typography';

const userType = 'vendor';

export default function Reviews() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setUserData(json);
    };

    fetchData();
  }, []);

  const reviews = {
    vendor: () => {
      return (
        <div className="overflow-x-auto">
          <Typography component={'h3'} className="tracking-tight text-primary">
            Your Reviews
          </Typography>
          <table className="table-compact table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Rate</th>
                <th>Comment</th>
                <th>Date</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.address.street}</td>
                  <td>{user.username}</td>
                  <td>{user.company.name}</td>
                  <td>12/16/2020</td>
                  <td>Blue</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>company</th>
                <th>location</th>
                <th>Last Login</th>
                <th>Favorite Color</th>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    },
    customer: () => {
      // return userData.map((user) => <div key={user.id}>{user.id}</div>);
    },
    delivery: () => {
      return <div>delivery</div>;
    },
  };

  return reviews[userType] ? reviews[userType]() : null;
}
