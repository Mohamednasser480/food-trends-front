import React from 'react';

import { MdDashboard } from 'react-icons/md';
import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from "./index";
import Users from '../../routes/admin/Users';

const links = [
  {
    text: 'Users',
    icon: <MdDashboard className="mx-3" />,
    to: '/',
  },
  
];

const AdminLayout = (props) => {
  return (
    <DashboardLayout links={links}>
      <Routes>
        <Route path="/" element={<Users />} />
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
