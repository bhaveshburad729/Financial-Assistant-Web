import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon, 
  SunIcon, 
  MoonIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
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
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/learning" className="navbar-link">Learning</Link>
            <div className="navbar-dropdown">
              <button 
                className="navbar-dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Funding
                <ChevronDownIcon className="navbar-dropdown-icon" />
              </button>
              {isDropdownOpen && (
                <div className="navbar-dropdown-menu">
                  <Link to="/funding/mutual-funds" className="navbar-dropdown-item">
                    Mutual Funds
                  </Link>
                  <Link to="/funding/sips" className="navbar-dropdown-item">
                    SIPs
                  </Link>
                  <Link to="/funding/stocks" className="navbar-dropdown-item">
                    Stocks
                  </Link>
                  <Link to="/funding/gold-bonds" className="navbar-dropdown-item">
                    Gold Bonds
                  </Link>
                </div>
              )}
            </div>
            <Link to="/schemes" className="navbar-link">Government Schemes</Link>
            <Link to="/contact" className="navbar-link">Contact Us</Link>
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
            <Link to="/login" className="btn-primary">
              Login
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
          <Link to="/" className="navbar-mobile-link">Home</Link>
          <Link to="/learning" className="navbar-mobile-link">Learning</Link>
          <div className="navbar-mobile-dropdown">
            <button 
              className="navbar-mobile-dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Funding
              <ChevronDownIcon className="navbar-dropdown-icon" />
            </button>
            {isDropdownOpen && (
              <div className="navbar-mobile-dropdown-menu">
                <Link to="/funding/mutual-funds" className="navbar-mobile-dropdown-item">
                  Mutual Funds
                </Link>
                <Link to="/funding/sips" className="navbar-mobile-dropdown-item">
                  SIPs
                </Link>
                <Link to="/funding/stocks" className="navbar-mobile-dropdown-item">
                  Stocks
                </Link>
                <Link to="/funding/gold-bonds" className="navbar-mobile-dropdown-item">
                  Gold Bonds
                </Link>
              </div>
            )}
          </div>
          <Link to="/schemes" className="navbar-mobile-link">Government Schemes</Link>
          <Link to="/contact" className="navbar-mobile-link">Contact Us</Link>
          <div className="navbar-mobile-actions">
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
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 