import React from 'react';
import { DashboardLayout } from './index';
import { Route, Routes } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import AllOrders from '../../routes/delivery/AllOrders';
import History from '../../routes/delivery/History';
import LiveOrders from '../../routes/delivery/LiveOrders';
import { FaHistory, FaUser } from 'react-icons/fa';
import { GrDeliver } from 'react-icons/gr';
import DeliveryProfile from '../../routes/delivery/Profile';

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
  {
    text: 'account details',
    icon: <FaUser className="" size={20} />,
    to: '/details',
  },
];

const DeliveryLayout = (props) => {
  return (
    <DashboardLayout links={links}>
      <Routes>
        <Route path="/" element={<AllOrders />} />
        <Route path="/live-orders" element={<LiveOrders />} />
        <Route path="/history" element={<History />} />
        <Route path="/details" element={<DeliveryProfile />} />

        {props.children}
      </Routes>
    </DashboardLayout>
  );
};

export default DeliveryLayout;
