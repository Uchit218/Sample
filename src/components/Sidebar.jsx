import React, { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  X,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: ShoppingCart, label: 'Orders', badge: 12 },
  { icon: Package, label: 'Products' },
  { icon: Users, label: 'Customers' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`
          fixed lg:relative inset-y-0 left-0 z-30 w-64 bg-[#1E2139] flex flex-col min-h-screen shrink-0
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-white font-semibold text-lg">Dashify</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-white/50 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex-1 py-6 px-3 overflow-y-auto">
          <p className="text-xs text-white/40 uppercase tracking-wider px-3 mb-3">Main Menu</p>
          {navItems.map(({ icon: Icon, label, badge }) => (
            <button
              key={label}
              onClick={() => { setActiveItem(label); onClose?.(); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-left transition-all ${
                activeItem === label
                  ? 'bg-indigo-600 text-white'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium flex-1">{label}</span>
              {badge && (
                <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 leading-none">
                  {badge}
                </span>
              )}
              {activeItem === label && <ChevronRight size={14} />}
            </button>
          ))}
          <p className="text-xs text-white/40 uppercase tracking-wider px-3 mb-3 mt-6">Support</p>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-white/60 hover:bg-white/10 hover:text-white transition-all text-left">
            <HelpCircle size={18} />
            <span className="text-sm font-medium">Help Center</span>
          </button>
        </nav>
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="User"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">Admin User</p>
              <p className="text-white/50 text-xs truncate">admin@dashify.com</p>
            </div>
            <button className="text-white/50 hover:text-white transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
