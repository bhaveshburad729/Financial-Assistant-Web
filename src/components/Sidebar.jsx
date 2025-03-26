import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const menuItems = [
    {
      id: 'learning',
      title: 'Learning',
      icon: BookOpenIcon,
      subItems: [
        { name: 'Investment Basics', path: '/learning/basics' },
        { name: 'Stock Market', path: '/learning/stocks' },
        { name: 'Mutual Funds', path: '/learning/mutual-funds' },
        { name: 'Cryptocurrency', path: '/learning/crypto' },
      ]
    },
    {
      id: 'funding',
      title: 'Funding',
      icon: CurrencyDollarIcon,
      subItems: [
        { name: 'Investment Options', path: '/funding/options' },
        { name: 'Portfolio Management', path: '/funding/portfolio' },
        { name: 'Risk Assessment', path: '/funding/risk' },
      ]
    },
    {
      id: 'schemes',
      title: 'Government Schemes',
      icon: BuildingOfficeIcon,
      subItems: [
        { name: 'Tax Benefits', path: '/schemes/tax' },
        { name: 'Investment Schemes', path: '/schemes/investment' },
        { name: 'Insurance Schemes', path: '/schemes/insurance' },
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: ChartBarIcon,
      subItems: [
        { name: 'Market Trends', path: '/analytics/trends' },
        { name: 'Performance Metrics', path: '/analytics/metrics' },
        { name: 'Reports', path: '/analytics/reports' },
      ]
    },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg h-screen fixed left-0 top-16 overflow-y-auto">
      <div className="p-4">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-2">
            <button
              onClick={() => toggleMenu(item.id)}
              className="w-full flex items-center justify-between p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center">
                <item.icon className="h-5 w-5 mr-2" />
                <span>{item.title}</span>
              </div>
              {expandedMenus[item.id] ? (
                <ChevronDownIcon className="h-5 w-5" />
              ) : (
                <ChevronRightIcon className="h-5 w-5" />
              )}
            </button>
            {expandedMenus[item.id] && (
              <div className="ml-4 mt-2 space-y-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    className="block p-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; 