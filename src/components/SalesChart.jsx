import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 32000, expenses: 18000 },
  { month: 'Feb', revenue: 41000, expenses: 22000 },
  { month: 'Mar', revenue: 38000, expenses: 20000 },
  { month: 'Apr', revenue: 52000, expenses: 27000 },
  { month: 'May', revenue: 48000, expenses: 25000 },
  { month: 'Jun', revenue: 61000, expenses: 30000 },
  { month: 'Jul', revenue: 55000, expenses: 28000 },
  { month: 'Aug', revenue: 72000, expenses: 35000 },
  { month: 'Sep', revenue: 68000, expenses: 32000 },
  { month: 'Oct', revenue: 79000, expenses: 38000 },
  { month: 'Nov', revenue: 85000, expenses: 40000 },
  { month: 'Dec', revenue: 96000, expenses: 45000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-lg shadow-lg p-3">
        <p className="text-xs font-semibold text-gray-600 mb-2">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">${entry.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const SalesChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-gray-800 font-semibold text-base">Revenue Overview</h3>
          <p className="text-gray-400 text-xs mt-0.5">Monthly revenue and expenses</p>
        </div>
        <div className="flex items-center gap-2">
          {['1W', '1M', '3M', '1Y'].map((period, i) => (
            <button
              key={period}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                i === 3
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '16px' }} iconType="circle" iconSize={8} />
          <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#6366F1" strokeWidth={2} fill="url(#colorRevenue)" dot={false} activeDot={{ r: 4 }} />
          <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#10B981" strokeWidth={2} fill="url(#colorExpenses)" dot={false} activeDot={{ r: 4 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
