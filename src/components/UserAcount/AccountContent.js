import React from 'react';
import { AddProduct, Orders, Products, Reviews, AcountNav } from './';

export default function AccountContent(props) {
  const content = {
    Products: <Products />,
    Orders: <Orders />,
    Reviews: <Reviews />,
    'Add product': <AddProduct />,
  };

  return <div>{content[props.content] ? content[props.content] : null}</div>;
}
