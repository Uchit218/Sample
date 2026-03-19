import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Organic', value: 42, color: '#6366F1' },
  { name: 'Referral', value: 28, color: '#10B981' },
  { name: 'Social', value: 18, color: '#F59E0B' },
  { name: 'Direct', value: 12, color: '#EF4444' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-lg shadow-lg p-3">
        <p className="text-xs font-medium text-gray-700">
          {payload[0].name}: <span className="font-semibold">{payload[0].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const TrafficChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-4">
        <h3 className="text-gray-800 font-semibold text-base">Traffic Sources</h3>
        <p className="text-gray-400 text-xs mt-0.5">Visitor acquisition channels</p>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-xs text-gray-600">{item.name}</span>
            </div>
            <span className="text-xs font-semibold text-gray-800">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficChart;
