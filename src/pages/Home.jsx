import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  AcademicCapIcon, 
  ShieldCheckIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const [showTip, setShowTip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: 'AI-Powered Insights',
      description: 'Get personalized financial recommendations based on your goals and risk profile.',
      icon: SparklesIcon,
      color: 'bg-[#3B82F6]',
      hoverColor: 'hover:bg-[#2563EB]',
    },
    {
      title: 'Smart Investment Tracking',
      description: 'Monitor your portfolio performance with real-time analytics and insights.',
      icon: ChartBarIcon,
      color: 'bg-[#10B981]',
      hoverColor: 'hover:bg-[#059669]',
    },
    {
      title: 'Financial Education',
      description: 'Learn about investing, saving, and financial planning through interactive content.',
      icon: AcademicCapIcon,
      color: 'bg-[#8B5CF6]',
      hoverColor: 'hover:bg-[#7C3AED]',
    },
    {
      title: 'Secure Platform',
      description: 'Your financial data is protected with bank-level security measures.',
      icon: ShieldCheckIcon,
      color: 'bg-[#F59E0B]',
      hoverColor: 'hover:bg-[#D97706]',
    },
  ];

  const stats = [
    { label: 'Active Users', value: '10K+', color: 'text-[#3B82F6]' },
    { label: 'Investment Options', value: '50+', color: 'text-[#10B981]' },
    { label: 'Success Rate', value: '95%', color: 'text-[#8B5CF6]' },
    { label: 'Customer Satisfaction', value: '98%', color: 'text-[#F59E0B]' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Your AI-Powered Financial Assistant
          </h1>
          <p className="hero-description">
            Get personalized financial advice, learn investment strategies, and explore government schemes
            all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/learning" className="btn-primary">
              Start Learning
            </Link>
            <Link to="/funding" className="btn-secondary">
              Explore Funding
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose FinAssist?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <ChartBarIcon className="feature-icon" />
            <h3 className="feature-title">Smart Analysis</h3>
            <p className="feature-description">
              Get AI-powered insights and recommendations based on your financial goals and risk profile.
            </p>
          </div>
          <div className="feature-card">
            <BookOpenIcon className="feature-icon" />
            <h3 className="feature-title">Learning Resources</h3>
            <p className="feature-description">
              Access comprehensive educational content to build your financial knowledge and confidence.
            </p>
          </div>
          <div className="feature-card">
            <CurrencyDollarIcon className="feature-icon" />
            <h3 className="feature-title">Investment Options</h3>
            <p className="feature-description">
              Explore various investment opportunities including mutual funds, SIPs, stocks, and more.
            </p>
          </div>
          <div className="feature-card">
            <ClipboardDocumentListIcon className="feature-icon" />
            <h3 className="feature-title">Government Schemes</h3>
            <p className="feature-description">
              Discover tax-saving and investment schemes offered by the government.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Tip Section */}
      <section className="daily-tip">
        <div className="daily-tip-content">
          <h2 className="section-title">Daily Financial Tip</h2>
          <div className="tip-card">
            <p className="tip-text">
              Start investing early and consistently. Even small amounts invested regularly can grow
              significantly over time due to the power of compound interest.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-[#1F2937]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[2rem] font-semibold mb-4">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already making smarter financial decisions with our AI-powered platform.
          </p>
          <Link
            to="/signup"
            className="group inline-block px-8 py-3 bg-white text-[#3B82F6] rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            Get Started Now
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Chatbot Button */}
      <button 
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#3B82F6] text-white rounded-full shadow-lg hover:bg-[#2563EB] transition-all duration-200 flex items-center justify-center animate-pulse"
        aria-label="Open chat"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Home; 