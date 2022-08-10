import React from 'react';
import { Orders, Products, Reviews, Wishlist, Profile } from '.';
import AddProduct from './Vendor/ActionProductsComponent';
import VendorProfile from './Vendor/VendorProfile';

export default function AccountContent(props) {
  const content = {
    Dashboard: <VendorProfile />,
    Products: <Products />,
    Orders: <Orders />,
    Reviews: <Reviews />,
    'Add product': <AddProduct />,
    wishlist: <Wishlist />,
    'My profile': <Profile />,
    'My orders': <Orders />,
  };

  return (
    <div className="w-10/12 flex-1">{content[props.content] ? content[props.content] : null}</div>
  );
}
