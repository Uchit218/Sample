import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart2,
  Settings,
  HelpCircle,
  Search,
  Sun,
  Bell,
  Cog,
  LogOut,
  DollarSign,
  ShoppingBag,
  UserCheck,
  TrendingUp,
  TrendingDown,
  ChevronRight,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 35000, expenses: 15000 },
  { month: 'Feb', revenue: 45000, expenses: 20000 },
  { month: 'Mar', revenue: 40000, expenses: 18000 },
  { month: 'Apr', revenue: 55000, expenses: 22000 },
  { month: 'May', revenue: 50000, expenses: 25000 },
  { month: 'Jun', revenue: 65000, expenses: 28000 },
  { month: 'Jul', revenue: 72000, expenses: 30000 },
  { month: 'Aug', revenue: 68000, expenses: 32000 },
  { month: 'Sep', revenue: 80000, expenses: 35000 },
  { month: 'Oct', revenue: 85000, expenses: 38000 },
  { month: 'Nov', revenue: 90000, expenses: 40000 },
  { month: 'Dec', revenue: 100000, expenses: 45000 },
];

const trafficData = [
  { name: 'Organic', value: 42, color: '#4f83f0' },
  { name: 'Referral', value: 28, color: '#7c3aed' },
  { name: 'Social', value: 18, color: '#f97316' },
  { name: 'Direct', value: 12, color: '#ef4444' },
];

const recentOrders = [
  { id: '#ORD-7892', customer: 'Emma Johnson', product: 'MacBook Pro 14"', date: 'Mar 15, 2024', amount: '$2,499', status: 'Delivered', avatar: 'EJ', avatarColor: '#f59e0b' },
  { id: '#ORD-7891', customer: 'Liam Chen', product: 'iPhone 15 Pro', date: 'Mar 14, 2024', amount: '$999', status: 'Processing', avatar: 'LC', avatarColor: '#3b82f6' },
  { id: '#ORD-7890', customer: 'Sophia Williams', product: 'iPad Air', date: 'Mar 13, 2024', amount: '$749', status: 'Delivered', avatar: 'SW', avatarColor: '#10b981' },
  { id: '#ORD-7889', customer: 'Noah Martinez', product: 'Apple Watch Series 9', date: 'Mar 12, 2024', amount: '$399', status: 'Processing', avatar: 'NM', avatarColor: '#8b5cf6' },
  { id: '#ORD-7888', customer: 'Olivia Brown', product: 'AirPods Pro', date: 'Mar 11, 2024', amount: '$249', status: 'Delivered', avatar: 'OB', avatarColor: '#ec4899' },
  { id: '#ORD-7887', customer: 'James Davis', product: 'Magic Keyboard', date: 'Mar 10, 2024', amount: '$99', status: 'Delivered', avatar: 'JD', avatarColor: '#14b8a6' },
];

const topProducts = [
  { name: 'MacBook Pro 14"', units: '13,848 units', revenue: '$3.1M', growth: '+12%', positive: true, color: '#4f83f0' },
  { name: 'iPhone 15 Pro', units: '3,820 units', revenue: '$3.8M', growth: '+8%', positive: true, color: '#6b7280' },
];

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: ShoppingCart, label: 'Orders', active: false, badge: 12 },
  { icon: Package, label: 'Products', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: BarChart2, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: true },
];

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState('1Y');

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[200px] bg-[#1a1f37] flex flex-col text-white flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            D
          </div>
          <span className="text-white font-semibold text-lg">Dashify</span>
        </div>

        {/* Main Menu */}
        <div className="px-4 mt-2">
          <p className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-3 px-2">Main Menu</p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                  item.active
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon size={16} />
                <span className="text-sm flex-1">{item.label}</span>
                {item.badge && (
                  <span className="bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                )}
                {item.active && <ChevronRight size={14} />}
              </div>
            ))}
          </nav>
        </div>

        {/* Support */}
        <div className="px-4 mt-6">
          <p className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase mb-3 px-2">Support</p>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <HelpCircle size={16} />
            <span className="text-sm">Help Center</span>
          </div>
        </div>

        {/* Bottom - User */}
        <div className="mt-auto px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              AU
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium truncate">Admin User</p>
              <p className="text-gray-500 text-[10px] truncate">admin@dashify.com</p>
            </div>
            <LogOut size={14} className="text-gray-500 flex-shrink-0 cursor-pointer hover:text-white" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4 flex-shrink-0">
          <div className="flex-1">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
              <Search size={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm text-gray-600 outline-none w-full placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700">
              <Sun size={18} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700">
              <Cog size={18} />
            </button>
            <div className="flex items-center gap-2 ml-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                AU
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Admin User</p>
                <p className="text-[10px] text-gray-400">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-sm text-gray-500">Welcome back, Admin! Here's what's happening today.</p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {/* Total Revenue */}
            <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-xl p-4 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-purple-200 text-[10px] font-semibold uppercase tracking-wider">Total Revenue</p>
                  <p className="text-2xl font-bold mt-1">$178.5K</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp size={11} className="text-green-300" />
                    <span className="text-[11px] text-green-300 font-medium">+12.5% increase</span>
                    <span className="text-[10px] text-purple-200 ml-1">vs last month</span>
                  </div>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                  <DollarSign size={18} className="text-white" />
                </div>
              </div>
            </div>

            {/* Total Orders */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-blue-200 text-[10px] font-semibold uppercase tracking-wider">Total Orders</p>
                  <p className="text-2xl font-bold mt-1">8,450</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp size={11} className="text-green-300" />
                    <span className="text-[11px] text-green-300 font-medium">+8.2% increase</span>
                    <span className="text-[10px] text-blue-200 ml-1">vs last month</span>
                  </div>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                  <ShoppingBag size={18} className="text-white" />
                </div>
              </div>
            </div>

            {/* Total Customers */}
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-4 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-pink-200 text-[10px] font-semibold uppercase tracking-wider">Total Customers</p>
                  <p className="text-2xl font-bold mt-1">12,640</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp size={11} className="text-green-300" />
                    <span className="text-[11px] text-green-300 font-medium">+5.7% increase</span>
                    <span className="text-[10px] text-pink-200 ml-1">vs last month</span>
                  </div>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                  <UserCheck size={18} className="text-white" />
                </div>
              </div>
            </div>

            {/* Total Growth */}
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl p-4 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-orange-100 text-[10px] font-semibold uppercase tracking-wider">Total Growth</p>
                  <p className="text-2xl font-bold mt-1">8.5%</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingDown size={11} className="text-red-200" />
                    <span className="text-[11px] text-red-200 font-medium">-1.2% decrease</span>
                    <span className="text-[10px] text-orange-100 ml-1">vs last month</span>
                  </div>
                </div>
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                  <TrendingUp size={18} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Revenue Overview */}
            <div className="col-span-2 bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-sm font-bold text-gray-800">Revenue Overview</h2>
                  <p className="text-xs text-gray-400">Monthly revenue and expenses</p>
                </div>
                <div className="flex gap-1">
                  {['1W', '1M', '3M', '1Y'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors ${
                        activeFilter === f
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={revenueData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <YAxis
                    tick={{ fontSize: 10, fill: '#9ca3af' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${v / 1000}k`}
                  />
                  <Tooltip
                    formatter={(value) => [`$${(value / 1000).toFixed(0)}k`, undefined]}
                    contentStyle={{ fontSize: 11, borderRadius: 8, border: '1px solid #e5e7eb' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#6366f1"
                    strokeWidth={2.5}
                    dot={false}
                    name="Revenue"
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#10b981"
                    strokeWidth={2.5}
                    dot={false}
                    name="Expenses"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex gap-4 mt-2 justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-0.5 bg-indigo-500 rounded"></div>
                  <span className="text-xs text-gray-500">Revenue</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-0.5 bg-emerald-500 rounded"></div>
                  <span className="text-xs text-gray-500">Expenses</span>
                </div>
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="mb-3">
                <h2 className="text-sm font-bold text-gray-800">Traffic Sources</h2>
                <p className="text-xs text-gray-400">Visitor acquisition channels</p>
              </div>
              <ResponsiveContainer width="100%" height={170}>
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={78}
                    dataKey="value"
                    stroke="none"
                    paddingAngle={2}
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-1">
                {trafficData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-xs text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Recent Orders */}
            <div className="col-span-2 bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-bold text-gray-800">Recent Orders</h2>
                  <p className="text-xs text-gray-400">Latest 6 orders</p>
                </div>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View All &rarr;
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    {['Order ID', 'Customer', 'Product', 'Date', 'Amount', 'Status'].map((h) => (
                      <th key={h} className="text-left text-[10px] font-semibold text-gray-400 uppercase pb-2 pr-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="py-2.5 pr-3 text-xs font-medium text-gray-700">{order.id}</td>
                      <td className="py-2.5 pr-3">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                            style={{ backgroundColor: order.avatarColor }}
                          >
                            {order.avatar}
                          </div>
                          <span className="text-xs text-blue-600 font-medium">{order.customer}</span>
                        </div>
                      </td>
                      <td className="py-2.5 pr-3 text-xs text-gray-600">{order.product}</td>
                      <td className="py-2.5 pr-3 text-xs text-gray-500">{order.date}</td>
                      <td className="py-2.5 pr-3 text-xs font-medium text-gray-700">{order.amount}</td>
                      <td className="py-2.5">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-yellow-100 text-yellow-600'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-bold text-gray-800">Top Products</h2>
                  <p className="text-xs text-gray-400">Best performing this month</p>
                </div>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  View All &rarr;
                </button>
              </div>
              <div className="space-y-4">
                {topProducts.map((product, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: product.color + '20' }}
                    >
                      <Package size={18} style={{ color: product.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 truncate">{product.name}</p>
                      <p className="text-[10px] text-gray-400">{product.units}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-bold text-gray-800">{product.revenue}</p>
                      <p className={`text-[10px] font-medium ${
                        product.positive ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {product.growth}
                      </p>
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
}
