import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navItems = [
    { name: 'Learning', path: '/learning' },
    { name: 'Funding', path: '/funding' },
    { name: 'Government Schemes', path: '/schemes' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                FinAssist
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* Login button */}
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Login
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="sm:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isSidebarOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 