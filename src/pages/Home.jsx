import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const cards = [
    {
      title: 'Investment Basics',
      description: 'Learn the fundamentals of investing and financial planning.',
      icon: '📚',
      path: '/learning/basics',
      color: 'bg-blue-500',
    },
    {
      title: 'Funding Options',
      description: 'Explore various investment opportunities and funding sources.',
      icon: '💰',
      path: '/funding/options',
      color: 'bg-green-500',
    },
    {
      title: 'Government Schemes',
      description: 'Discover government-backed investment and savings schemes.',
      icon: '🏛️',
      path: '/schemes/investment',
      color: 'bg-purple-500',
    },
    {
      title: 'Market Analytics',
      description: 'Stay updated with market trends and performance metrics.',
      icon: '📊',
      path: '/analytics/trends',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to FinAssist
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your AI-powered financial companion for smart investing
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.path}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center text-2xl mb-4`}>
              {card.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {card.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Why Choose FinAssist?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              AI-Powered Guidance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get personalized financial advice powered by advanced AI technology.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Comprehensive Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access a wide range of educational resources and tutorials.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Real-time Updates
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay informed with the latest market trends and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 