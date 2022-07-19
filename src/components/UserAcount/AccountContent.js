import React from 'react';
import { AddProduct, Orders, Products, Reviews } from './';

export default function AccountContent(props) {
  const content = {
    Products: <Products />,
    Orders: <Orders />,
    Reviews: <Reviews />,
    'Add product': <AddProduct />,
  };

  return <div className="flex-1">{content[props.content] ? content[props.content] : null}</div>;
}
