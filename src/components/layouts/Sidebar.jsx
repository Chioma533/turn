import React from 'react'
import { Home, Play, Folder, MessageCircle, User, DollarSign, Plus } from 'lucide-react';


const Sidebar = ({ activeTab, setActiveTab}) => {
    const navItems = [
        { id: 'dashboard', icon: Home, label: 'Dashboard' },
        { id: 'simulation', icon: Play, label: 'Simulation' },
        { id: 'portfolio', icon: Folder, label: 'Portfolio' },
        { id: 'ai-coach', icon: MessageCircle, label: 'AI Coach' },
        { id: 'profile', icon: User, label: 'Profile' },
        { id: 'pricing', icon: DollarSign, label: 'Pricing' },
    ];
  return (
      <aside className="w-64 bg-slate-50 border-r border-slate-200 h-screen p-6 flex flex-col">
          {/* Logo */}
          <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900">TURNVE</h1>
              <p className="text-sm text-slate-600">Make It Real</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
              {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                      <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                  ? 'bg-blue-600 text-white shadow-lg'
                                  : 'text-slate-600 hover:bg-slate-100'
                              }`}
                      >
                          <Icon size={20} />
                          <span className="font-medium">{item.label}</span>
                      </button>
                  );
              })}
          </nav>
      </aside>
  )
}

export default Sidebar