import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  AcademicCapIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Home, BookOpen, DollarSign, Target } from 'lucide-react';

const STORAGE_KEY = 'userProfileData';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const location = useLocation();

  // Load profile data from localStorage
  useEffect(() => {
    const loadProfileData = () => {
      const savedData = localStorage.getItem(STORAGE_KEY);
      const savedImage = localStorage.getItem(`${STORAGE_KEY}_image`);
      
      if (savedData) {
        setProfileData(JSON.parse(savedData));
      }
      if (savedImage) {
        setProfileImage(savedImage);
      }
    };

    loadProfileData();
    // Listen for storage changes from other components
    window.addEventListener('storage', loadProfileData);
    return () => window.removeEventListener('storage', loadProfileData);
  }, []);

  const menuItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/learning', icon: AcademicCapIcon, label: 'Learning' },
    { path: '/notifications', icon: BellIcon, label: 'Notifications' },
    { path: '/profile', icon: UserIcon, label: 'Profile' },
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
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-image" />
            ) : (
              <UserCircleIcon className="profile-icon" />
            )}
          </div>
          {!isCollapsed && (
            <div className="profile-info">
              <h3 className="profile-name">{profileData?.fullName || 'User'}</h3>
              <p className="profile-level">{profileData?.investmentExperience || 'Beginner'} Investor</p>
              <p className="profile-investments">Total Investments: ₹{profileData?.totalInvestments?.toLocaleString() || '0'}</p>
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
              to="/goal-planner"
              className={`sidebar-link ${isActive('/goal-planner') ? 'sidebar-link-active' : ''}`}
            >
              <Target className="sidebar-icon" />
              {!isCollapsed && <span>Goal Planner</span>}
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