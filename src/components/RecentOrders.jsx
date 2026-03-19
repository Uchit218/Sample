import React from 'react';

const orders = [
  { id: '#ORD-7892', customer: 'Emma Johnson', avatar: 'https://i.pravatar.cc/32?img=1', product: 'MacBook Pro 14"', date: 'Mar 15, 2024', amount: '$2,499', status: 'Delivered' },
  { id: '#ORD-7891', customer: 'Liam Chen', avatar: 'https://i.pravatar.cc/32?img=2', product: 'iPhone 15 Pro', date: 'Mar 14, 2024', amount: '$999', status: 'Processing' },
  { id: '#ORD-7890', customer: 'Sophia Davis', avatar: 'https://i.pravatar.cc/32?img=5', product: 'AirPods Pro', date: 'Mar 14, 2024', amount: '$249', status: 'Shipped' },
  { id: '#ORD-7889', customer: 'Noah Williams', avatar: 'https://i.pravatar.cc/32?img=8', product: 'iPad Air', date: 'Mar 13, 2024', amount: '$749', status: 'Delivered' },
  { id: '#ORD-7888', customer: 'Olivia Brown', avatar: 'https://i.pravatar.cc/32?img=9', product: 'Apple Watch S9', date: 'Mar 12, 2024', amount: '$399', status: 'Cancelled' },
  { id: '#ORD-7887', customer: 'James Taylor', avatar: 'https://i.pravatar.cc/32?img=12', product: 'Samsung TV 65"', date: 'Mar 11, 2024', amount: '$1,299', status: 'Processing' },
];

const statusConfig = {
  Delivered: 'bg-emerald-50 text-emerald-700',
  Processing: 'bg-blue-50 text-blue-700',
  Shipped: 'bg-amber-50 text-amber-700',
  Cancelled: 'bg-red-50 text-red-700',
};

const RecentOrders = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 col-span-2">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <div>
          <h3 className="text-gray-800 font-semibold text-base">Recent Orders</h3>
          <p className="text-gray-400 text-xs mt-0.5">Latest 6 orders</p>
        </div>
        <button className="text-xs text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
          View All &rarr;
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-50">
              <th className="text-left text-xs text-gray-400 font-medium px-6 py-3">Order ID</th>
              <th className="text-left text-xs text-gray-400 font-medium px-6 py-3">Customer</th>
              <th className="text-left text-xs text-gray-400 font-medium px-6 py-3">Product</th>
              <th className="text-left text-xs text-gray-400 font-medium px-6 py-3">Date</th>
              <th className="text-left text-xs text-gray-400 font-medium px-6 py-3">Amount</th>
              <th className="text-left text-xs text-gray-400 font-medium px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order.id} className={`hover:bg-gray-50/50 transition-colors ${i !== orders.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <td className="px-6 py-3.5">
                  <span className="text-xs font-medium text-gray-700">{order.id}</span>
                </td>
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-2">
                    <img src={order.avatar} alt={order.customer} className="w-7 h-7 rounded-full" />
                    <span className="text-xs font-medium text-gray-700">{order.customer}</span>
                  </div>
                </td>
                <td className="px-6 py-3.5">
                  <span className="text-xs text-gray-600">{order.product}</span>
                </td>
                <td className="px-6 py-3.5">
                  <span className="text-xs text-gray-500">{order.date}</span>
                </td>
                <td className="px-6 py-3.5">
                  <span className="text-xs font-semibold text-gray-800">{order.amount}</span>
                </td>
                <td className="px-6 py-3.5">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusConfig[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
