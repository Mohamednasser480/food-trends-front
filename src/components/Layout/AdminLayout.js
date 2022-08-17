import React from 'react';

import { FiUsers } from 'react-icons/fi';
import { GiGrapes } from 'react-icons/gi';
import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from "./index";
import Users from '../../routes/admin/Users';
import Products from '../../routes/admin/Products';

const links = [
  {
    text: 'Users',
    icon: <FiUsers className="ml-3" />,
    to: '/',
  },
  {
    text: 'Products',
    icon: <GiGrapes className="ml-3" />,
    to: '/products',
  },
  
];

const AdminLayout = (props) => {
  return (
    <DashboardLayout links={links}>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductEdit />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:id" element={<ReviewDetail />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/orders" element={<Orders />} /> */}
        {props.children}
      </Routes>
    </DashboardLayout>
  );
};

export default AdminLayout;
