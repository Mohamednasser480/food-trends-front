import React from 'react';
import { DashboardLayout } from './index';
import { Route, Routes } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import AllOrders from '../../routes/delivery/AllOrders';
import History from '../../routes/delivery/History';
import LiveOrders from '../../routes/delivery/LiveOrders';
import { FaHistory } from 'react-icons/fa';
import { GrDeliver } from 'react-icons/gr';

const links = [
  {
    text: 'dashboard',
    icon: <MdDashboard className="" size={20} />,
    to: '/',
  },
  {
    text: 'live orders',
    icon: <GrDeliver className="" size={20} />,
    to: '/live-orders',
  },
  {
    text: 'history',
    icon: <FaHistory className="" size={20} />,
    to: '/history',
  },
];

const DeliveryLayout = (props) => {
  return (
    <DashboardLayout links={links}>
      <Routes>
        <Route path="/" element={<AllOrders />} />
        <Route path="/live-orders" element={<LiveOrders />} />
        <Route path="/history" element={<History />} />
        {props.children}
      </Routes>
    </DashboardLayout>
  );
};

export default DeliveryLayout;
