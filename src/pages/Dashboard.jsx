import React, { useState } from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import SalesChart from '../components/SalesChart';
import TrafficChart from '../components/TrafficChart';
import RecentOrders from '../components/RecentOrders';
import TopProducts from '../components/TopProducts';

const stats = [
  {
    title: 'Total Revenue',
    value: '$178.5K',
    change: '+12.5% increase',
    changeType: 'up',
    icon: DollarSign,
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
  },
  {
    title: 'Total Orders',
    value: '8,450',
    change: '+8.2% increase',
    changeType: 'up',
    icon: ShoppingBag,
    gradient: 'bg-gradient-to-br from-cyan-400 to-blue-600',
  },
  {
    title: 'Total Customers',
    value: '12,640',
    change: '+5.7% increase',
    changeType: 'up',
    icon: Users,
    gradient: 'bg-gradient-to-br from-pink-500 to-rose-600',
  },
  {
    title: 'Total Growth',
    value: '8.5%',
    change: '-1.2% decrease',
    changeType: 'down',
    icon: TrendingUp,
    gradient: 'bg-gradient-to-br from-amber-400 to-orange-500',
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F0F4FD] font-sans overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-500 text-sm mt-0.5">Welcome back, Admin! Here's what's happening today.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 mb-6">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mb-6">
            <SalesChart />
            <TrafficChart />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
            <RecentOrders />
            <TopProducts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
