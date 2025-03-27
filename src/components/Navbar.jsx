import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon, 
  SunIcon, 
  MoonIcon,
  ChevronDownIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  ChartPieIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  AcademicCapIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import '../styles/auth.css';
import '../styles/animations.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFundingOpen, setIsFundingOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleFundingDropdown = () => {
    setIsFundingOpen(!isFundingOpen);
  };

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Learning', href: '/learning', icon: AcademicCapIcon }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo hover-card">
            FinAssist
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
          <div className="navbar-links">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                to={item.href} 
                className={`navbar-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                <item.icon className="navbar-icon" />
                {item.name}
              </Link>
            ))}
            
            {/* Funding Dropdown */}
            <div className="dropdown-container">
              <button 
                className="dropdown-button ripple"
                onClick={toggleFundingDropdown}
              >
                Funding & Schemes
                <ChevronDownIcon 
                  className={`dropdown-icon ${isFundingOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isFundingOpen && (
                <div className="dropdown-menu">
                  <Link 
                    to="/mutual-funds" 
                    className="dropdown-item hover-card"
                    onClick={() => setIsFundingOpen(false)}
                  >
                    <ChartBarIcon className="dropdown-item-icon" />
                    Mutual Funds
                  </Link>
                  <Link 
                    to="/sips" 
                    className="dropdown-item hover-card"
                    onClick={() => setIsFundingOpen(false)}
                  >
                    <CurrencyDollarIcon className="dropdown-item-icon" />
                    SIPs
                  </Link>
                  <Link 
                    to="/gold-bonds" 
                    className="dropdown-item hover-card"
                    onClick={() => setIsFundingOpen(false)}
                  >
                    <BanknotesIcon className="dropdown-item-icon" />
                    Gold Bonds
                  </Link>
                  <Link 
                    to="/stocks" 
                    className="dropdown-item"
                    onClick={() => setIsFundingOpen(false)}
                  >
                    <ChartPieIcon className="dropdown-item-icon" />
                    Stocks
                  </Link>
                  <Link 
                    to="/government-schemes" 
                    className="dropdown-item"
                    onClick={() => setIsFundingOpen(false)}
                  >
                    <BuildingLibraryIcon className="dropdown-item-icon" />
                    Government Schemes
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="navbar-actions">
            <button 
              className="navbar-theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <SunIcon className="navbar-icon" />
              ) : (
                <MoonIcon className="navbar-icon" />
              )}
            </button>
            <Link to="/login" className="auth-button login">
              Login
            </Link>
            <Link to="/signup" className="auth-button signup">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="navbar-mobile">
          <button 
            className="navbar-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="navbar-icon" />
            ) : (
              <Bars3Icon className="navbar-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="navbar-mobile-link"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="navbar-icon" />
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              <ChatBubbleLeftIcon className="navbar-icon" />
              Contact Us
            </Link>
            
            {/* Mobile Funding Dropdown */}
            <div className="navbar-mobile-dropdown">
              <button 
                className="navbar-mobile-dropdown-button"
                onClick={toggleFundingDropdown}
              >
                Funding & Schemes
                <ChevronDownIcon className={`dropdown-icon ${isFundingOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isFundingOpen && (
                <div className="navbar-mobile-dropdown-menu">
                  <Link 
                    to="/mutual-funds" 
                    className="navbar-mobile-dropdown-item"
                    onClick={() => {
                      setIsFundingOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Mutual Funds
                  </Link>
                  <Link 
                    to="/sips" 
                    className="navbar-mobile-dropdown-item"
                    onClick={() => {
                      setIsFundingOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    SIPs
                  </Link>
                  <Link 
                    to="/gold-bonds" 
                    className="navbar-mobile-dropdown-item"
                    onClick={() => {
                      setIsFundingOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Gold Bonds
                  </Link>
                  <Link 
                    to="/stocks" 
                    className="navbar-mobile-dropdown-item"
                    onClick={() => {
                      setIsFundingOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Stocks
                  </Link>
                  <Link 
                    to="/government-schemes" 
                    className="navbar-mobile-dropdown-item"
                    onClick={() => {
                      setIsFundingOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Government Schemes
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 