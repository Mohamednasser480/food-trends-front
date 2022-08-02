import React from 'react';
import { Orders, Products, Reviews, Wishlist, Profile } from './';
import AddProduct from './Vendor/AddProduct';

export default function AccountContent(props) {
  const content = {
    Products: <Products />,
    Orders: <Orders />,
    Reviews: <Reviews />,
    'Add product': <AddProduct />,
    wishlist: <Wishlist />,
    Profile: <Profile />,
  };

  return (
    <div className="w-10/12 flex-1">{content[props.content] ? content[props.content] : null}</div>
  );
}
