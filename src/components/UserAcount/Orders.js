import React from 'react';

const userType = 'vendor';

export default function Orders() {
  const orders = {
    vendor: () => {
      return <div>vendor</div>;
    },
    customer: () => {
      return <div>customer</div>;
    },
    delivery: () => {
      return <div>delivery</div>;
    },
  };

  return orders[userType] ? orders[userType]() : null;
}
