import React, { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import {
  Search, LayoutDashboard, ShoppingCart, Package, Users, BarChart3,
  Settings, HelpCircle, ChevronRight, Bell, Sun, DollarSign,
  TrendingUp, ArrowUpRight, ArrowDownRight, ExternalLink
} from 'lucide-react';

const revenueData = [
  { month: 'Jan', revenue: 30000, expenses: 20000 },
  { month: 'Feb', revenue: 35000, expenses: 22000 },
  { month: 'Mar', revenue: 32000, expenses: 25000 },
  { month: 'Apr', revenue: 40000, expenses: 28000 },
  { month: 'May', revenue: 45000, expenses: 30000 },
  { month: 'Jun', revenue: 55000, expenses: 32000 },
  { month: 'Jul', revenue: 60000, expenses: 35000 },
  { month: 'Aug', revenue: 58000, expenses: 33000 },
  { month: 'Sep', revenue: 65000, expenses: 38000 },
  { month: 'Oct', revenue: 70000, expenses: 40000 },
  { month: 'Nov', revenue: 75000, expenses: 42000 },
  { month: 'Dec', revenue: 80000, expenses: 45000 },
];

const trafficData = [
  { name: 'Organic', value: 42, color: '#6366f1' },
  { name: 'Referral', value: 28, color: '#22c55e' },
  { name: 'Social', value: 18, color: '#eab308' },
  { name: 'Direct', value: 12, color: '#ef4444' },
];

const recentOrders = [
  { id: '#ORD-7892', customer: 'Emma Johnson', avatar: 'EJ', product: 'MacBook Pro 14"', date: 'Mar 15, 2024', amount: '$2,499', status: 'Delivered' },
  { id: '#ORD-7891', customer: 'Liam Chen', avatar: 'LC', product: 'iPhone 15 Pro', date: 'Mar 14, 2024', amount: '$999', status: 'Processing' },
  { id: '#ORD-7890', customer: 'Sarah Williams', avatar: 'SW', product: 'iPad Air', date: 'Mar 13, 2024', amount: '$749', status: 'Shipped' },
  { id: '#ORD-7889', customer: 'Marcus Brown', avatar: 'MB', product: 'AirPods Pro', date: 'Mar 12, 2024', amount: '$249', status: 'Delivered' },
  { id: '#ORD-7888', customer: 'Olivia Davis', avatar: 'OD', product: 'Apple Watch', date: 'Mar 11, 2024', amount: '$399', status: 'Cancelled' },
  { id: '#ORD-7887', customer: 'James Wilson', avatar: 'JW', product: 'iMac 24"', date: 'Mar 10, 2024', amount: '$1,499', status: 'Delivered' },
];

const topProducts = [
  { name: 'MacBook Pro 14"', units: '3,245 units', revenue: '$3.1M', growth: '+12%', color: 'bg-indigo-100 text-indigo-600' },
  { name: 'iPhone 15 Pro', units: '3,800 units', revenue: '$3.8M', growth: '+8%', color: 'bg-emerald-100 text-emerald-600' },
];

const sidebarNav = [
  { name: 'Dashboard', icon: LayoutDashboard, active: true },
  { name: 'Orders', icon: ShoppingCart, badge: 12 },
  { name: 'Products', icon: Package },
  { name: 'Customers', icon: Users },
  { name: 'Analytics', icon: BarChart3 },
];

const statusColors = {
  Delivered: 'text-emerald-600 bg-emerald-50',
  Processing: 'text-amber-600 bg-amber-50',
  Shipped: 'text-blue-600 bg-blue-50',
  Cancelled: 'text-red-600 bg-red-50',
};

const Dashboard = () => {
  const [activePeriod, setActivePeriod] = useState('1Y');

  return (
    <div className="flex h-screen bg-gray-100 text-sm">
      {/* Sidebar */}
      <aside className="w-[240px] bg-[#0c0a2a] text-white flex flex-col shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg">D</div>
          <span className="text-lg font-semibold tracking-wide">Dashify</span>
        </div>

        {/* Search */}
        <div className="px-4 mb-4">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-white/60">
            <Search size={16} />
            <span className="text-sm">Search...</span>
          </div>
        </div>

        {/* Main Nav */}
        <div className="px-4 flex-1">
          <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3 px-2">Main Menu</p>
          <nav className="space-y-1">
            {sidebarNav.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon size={18} />
                <span className="flex-1">{item.name}</span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mt-6 mb-3 px-2">Support</p>
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white">
              <HelpCircle size={18} />
              <span>Help Center</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium">
              <Settings size={18} />
              <span className="flex-1">Settings</span>
              <ChevronRight size={16} />
            </a>
          </nav>
        </div>

        {/* User */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center font-semibold text-sm">
              AU
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-white/50 truncate">admin@dashify.com</p>
            </div>
            <ExternalLink size={16} className="text-white/40" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-[#0c0a2a] border-b border-white/10 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 w-64 text-white/60">
            <Search size={16} />
            <span className="text-sm">Search...</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white/60 hover:text-white p-2">
              <Sun size={18} />
            </button>
            <button className="relative text-white/60 hover:text-white p-2">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-white/60 hover:text-white p-2">
              <Settings size={18} />
            </button>
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-white/10">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                AU
              </div>
              <div>
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-white/50">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#f1f5f9]">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-500 mt-1">Welcome back, Admin! Here's what's happening today.</p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-5 mb-6">
            {/* Total Revenue */}
            <div className="rounded-xl p-5 bg-gradient-to-br from-purple-600 to-purple-700 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <DollarSign size={20} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Total Revenue</p>
              <p className="text-3xl font-bold mt-2">$178.5K</p>
              <div className="flex items-center gap-1 mt-3 text-xs">
                <ArrowUpRight size={14} className="text-emerald-300" />
                <span className="text-emerald-300 font-medium">+12.5% increase</span>
                <span className="text-white/60 ml-1">vs last month</span>
              </div>
            </div>

            {/* Total Orders */}
            <div className="rounded-xl p-5 bg-gradient-to-br from-blue-500 to-blue-600 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <ShoppingCart size={20} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Total Orders</p>
              <p className="text-3xl font-bold mt-2">8,450</p>
              <div className="flex items-center gap-1 mt-3 text-xs">
                <ArrowUpRight size={14} className="text-emerald-300" />
                <span className="text-emerald-300 font-medium">+8.2% increase</span>
                <span className="text-white/60 ml-1">vs last month</span>
              </div>
            </div>

            {/* Total Customers */}
            <div className="rounded-xl p-5 bg-gradient-to-br from-teal-500 to-teal-600 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Users size={20} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Total Customers</p>
              <p className="text-3xl font-bold mt-2">12,640</p>
              <div className="flex items-center gap-1 mt-3 text-xs">
                <ArrowUpRight size={14} className="text-emerald-300" />
                <span className="text-emerald-300 font-medium">+5.7% increase</span>
                <span className="text-white/60 ml-1">vs last month</span>
              </div>
            </div>

            {/* Total Growth */}
            <div className="rounded-xl p-5 bg-gradient-to-br from-purple-900 to-indigo-900 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Total Growth</p>
              <p className="text-3xl font-bold mt-2">8.5%</p>
              <div className="flex items-center gap-1 mt-3 text-xs">
                <ArrowDownRight size={14} className="text-red-300" />
                <span className="text-red-300 font-medium">-1.2% decrease</span>
                <span className="text-white/60 ml-1">vs last month</span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-5 mb-6">
            {/* Revenue Overview */}
            <div className="col-span-2 bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Revenue Overview</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Monthly revenue and expenses</p>
                </div>
                <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                  {['1W', '1M', '3M', '1Y'].map((period) => (
                    <button
                      key={period}
                      onClick={() => setActivePeriod(period)}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                        activePeriod === period
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="expensesGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
                  <Tooltip
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    formatter={(value) => [`$${(value / 1000).toFixed(0)}K`]}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fill="url(#revenueGrad)" />
                  <Area type="monotone" dataKey="expenses" stroke="#14b8a6" strokeWidth={2} fill="url(#expensesGrad)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-6 mt-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                  Revenue
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                  Expenses
                </div>
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Traffic Sources</h3>
              <p className="text-xs text-gray-500 mt-0.5">Visitor acquisition channels</p>
              <div className="flex justify-center mt-2">
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={trafficData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {trafficData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3 mt-2">
                {trafficData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-5">
            {/* Recent Orders */}
            <div className="col-span-2 bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Recent Orders</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Latest 6 orders</p>
                </div>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                  View All <span>&rarr;</span>
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-gray-400 uppercase tracking-wider border-b border-gray-100">
                      <th className="text-left pb-3 font-semibold">Order ID</th>
                      <th className="text-left pb-3 font-semibold">Customer</th>
                      <th className="text-left pb-3 font-semibold">Product</th>
                      <th className="text-left pb-3 font-semibold">Date</th>
                      <th className="text-left pb-3 font-semibold">Amount</th>
                      <th className="text-left pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-50 last:border-0">
                        <td className="py-3 text-sm font-medium text-indigo-600">{order.id}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white text-xs font-semibold">
                              {order.avatar}
                            </div>
                            <span className="text-sm text-gray-700">{order.customer}</span>
                          </div>
                        </td>
                        <td className="py-3 text-sm text-gray-600">{order.product}</td>
                        <td className="py-3 text-sm text-gray-500">{order.date}</td>
                        <td className="py-3 text-sm font-medium text-gray-900">{order.amount}</td>
                        <td className="py-3">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Top Products</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Best performing this month</p>
                </div>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                  View All <span>&rarr;</span>
                </a>
              </div>
              <div className="space-y-4">
                {topProducts.map((product) => (
                  <div key={product.name} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${product.color}`}>
                      <Package size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.units}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{product.revenue}</p>
                      <p className="text-xs text-emerald-500 font-medium">{product.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
