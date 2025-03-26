import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  UserCircleIcon,
  CalculatorIcon,
  DocumentIcon,
  BellIcon,
  PrinterIcon,
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { name: 'Profile', path: '/profile', icon: UserCircleIcon },
    { name: 'Tax Calculator', path: '/tax-calculator', icon: CalculatorIcon },
    { name: 'Document Compressor', path: '/document-compressor', icon: DocumentIcon },
    { name: 'Notifications', path: '/notifications', icon: BellIcon },
    { name: 'Printable Reports', path: '/reports', icon: PrinterIcon },
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-profile">
          <div className="profile-image">
            <UserCircleIcon className="profile-icon" />
          </div>
          {!isCollapsed && (
            <div className="profile-info">
              <h3 className="profile-name">John Doe</h3>
              <p className="profile-level">Intermediate</p>
              <p className="profile-investments">₹5,00,000</p>
            </div>
          )}
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name} className="sidebar-item">
                <Link
                  to={item.path}
                  className={`sidebar-link ${isActive(item.path) ? 'sidebar-link-active' : ''}`}
                >
                  <Icon className="sidebar-icon" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button 
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRightIcon className="toggle-icon" />
          ) : (
            <ChevronLeftIcon className="toggle-icon" />
          )}
        </button>
        <button 
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <ArrowLeftOnRectangleIcon className="logout-icon" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 