import React from 'react';
import { CustomerLayout, VendorLayout } from './';
import { Error404 } from '../../routes';
import { Route } from 'react-router-dom';

const userType = '';

const defaultRoutes = (
  <>
    <Route path="*" element={<Error404 />} />;
  </>
);

const Layout = () => {
  const layouts = {
    customer: <CustomerLayout>{defaultRoutes}</CustomerLayout>,
    vendor: <VendorLayout>{defaultRoutes}</VendorLayout>,
    // delivery: <DeliveryLayout />,
    // admin: <AdminLayout />,
  };
  return (
    <div className="flex min-h-screen flex-col">
      {layouts[userType] ? layouts[userType] : layouts.customer}
    </div>
  );
};

export default Layout;
