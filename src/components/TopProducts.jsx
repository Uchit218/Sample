import React from 'react';

const products = [
  { name: 'MacBook Pro 14"', sales: 1240, revenue: '$3.1M', change: 12, img: '💻' },
  { name: 'iPhone 15 Pro', sales: 3820, revenue: '$3.8M', change: 8, img: '📱' },
  { name: 'AirPods Pro', sales: 5670, revenue: '$1.4M', change: -3, img: '🎧' },
  { name: 'iPad Air', sales: 980, revenue: '$0.7M', change: 5, img: '📟' },
  { name: 'Apple Watch S9', sales: 1450, revenue: '$0.6M', change: 15, img: '⌚' },
];

const TopProducts = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <div>
          <h3 className="text-gray-800 font-semibold text-base">Top Products</h3>
          <p className="text-gray-400 text-xs mt-0.5">Best performing this month</p>
        </div>
        <button className="text-xs text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
          View All &rarr;
        </button>
      </div>
      <div className="px-6 py-3 divide-y divide-gray-50">
        {products.map((product) => (
          <div key={product.name} className="flex items-center gap-3 py-3">
            <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-lg shrink-0">
              {product.img}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-800 truncate">{product.name}</p>
              <p className="text-xs text-gray-400">{product.sales.toLocaleString()} units</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-semibold text-gray-800">{product.revenue}</p>
              <p className={`text-xs font-medium ${product.change >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {product.change >= 0 ? '+' : ''}{product.change}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
