import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, change, changeType, icon: Icon, gradient }) => {
  const isPositive = changeType === 'up';
  return (
    <div className={`rounded-xl p-5 text-white ${gradient} shadow-lg`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
          <Icon size={20} className="text-white" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span className="text-xs font-medium">{change}</span>
        <span className="text-white/60 text-xs ml-1">vs last month</span>
      </div>
    </div>
  );
};

export default StatsCard;
