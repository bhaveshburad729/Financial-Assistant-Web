import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  AcademicCapIcon,
  CalculatorIcon,
  DocumentIcon,
  BellIcon,
  PrinterIcon,
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/learning', icon: AcademicCapIcon, label: 'Learning' },
    { path: '/tax-calculator', icon: CalculatorIcon, label: 'Tax Calculator' },
    { path: '/document-compressor', icon: DocumentIcon, label: 'Document Compressor' },
    { path: '/notifications', icon: BellIcon, label: 'Notifications' },
    { path: '/reports', icon: PrinterIcon, label: 'Printable Reports' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

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
              <p className="profile-level">Intermediate Investor</p>
              <p className="profile-investments">Total Investments: ₹5,00,000</p>
            </div>
          )}
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.path} className="sidebar-item">
              <Link
                to={item.path}
                className={`sidebar-link ${isActive(item.path) ? 'sidebar-link-active' : ''}`}
              >
                <item.icon className="sidebar-icon" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
          <li className="sidebar-item">
            <Link
              to="/contact"
              className={`sidebar-link ${isActive('/contact') ? 'sidebar-link-active' : ''}`}
            >
              <ChatBubbleLeftIcon className="sidebar-icon" />
              <span>Contact Us</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/tax-calculator"
              className={`sidebar-link ${isActive('/tax-calculator') ? 'sidebar-link-active' : ''}`}
            >
              <CalculatorIcon className="sidebar-icon" />
              <span>Tax Calculator</span>
            </Link>
          </li>
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