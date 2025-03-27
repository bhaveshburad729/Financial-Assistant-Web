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
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            FinAssist
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/learning" 
              className={`navbar-link ${location.pathname === '/learning' ? 'active' : ''}`}
            >
              Learning
            </Link>
            
            {/* Funding Dropdown */}
            <div className="dropdown-container">
              <button 
                className="dropdown-button"
                onClick={toggleFundingDropdown}
              >
                Funding
                <svg 
                  className={`dropdown-icon ${isFundingOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
              
              {isFundingOpen && (
                <div className="dropdown-menu">
                  <Link 
                    to="/mutual-funds" 
                    className="dropdown-item"
                    onClick={() => setIsFundingOpen(false)}
                  >
                    <ChartBarIcon className="dropdown-item-icon" />
                    Mutual Funds
                  </Link>
                  <Link 
                    to="/sips" 
                    className="dropdown-item"
                    onClick={() => setIsFundingOpen(false)}
                  >
                    <CurrencyDollarIcon className="dropdown-item-icon" />
                    SIPs
                  </Link>
                  <Link 
                    to="/gold-bonds" 
                    className="dropdown-item"
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
            <Link to="/government-schemes" className="navbar-link">Government Schemes</Link>
            <Link to="/contact" className="navbar-link">
              <ChatBubbleLeftIcon className="navbar-icon" />
              Contact Us
            </Link>
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
          <Link 
            to="/" 
            className="navbar-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/learning" 
            className="navbar-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Learning
          </Link>
          
          {/* Mobile Funding Dropdown */}
          <div className="navbar-mobile-dropdown">
            <button 
              className="navbar-mobile-dropdown-button"
              onClick={toggleFundingDropdown}
            >
              Funding
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
          
          <Link 
            to="/contact" 
            className="navbar-mobile-link"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          
          <div className="navbar-mobile-actions">
            <Link 
              to="/login" 
              className="auth-button login"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="auth-button signup"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 