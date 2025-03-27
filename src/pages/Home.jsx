import React from 'react';
import { MessageCircle, ChartBar, Shield, BookOpen, Calculator, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Home = () => {
  const cardData = [
    {
      title: 'Mutual Funds',
      description: 'Explore diverse investment opportunities with our comprehensive mutual funds guide.',
      image: '/images/mutual-funds.jpg',
      link: '/mutual-funds'
    },
    {
      title: 'Systematic Investment Plan (SIP)',
      description: 'Learn how SIPs can help you build wealth systematically and consistently.',
      image: '/images/sip.jpg',
      link: '/sips'
    },
    {
      title: 'Stock Market Insights',
      description: 'Get expert analysis and strategies for navigating the stock market.',
      image: '/images/stocks.jpg',
      link: '/stocks'
    }
  ];

  const featuresData = [
    {
      icon: <ChartBar className="feature-icon" />,
      title: 'Smart Analysis',
      description: 'Get AI-powered insights and recommendations based on your financial goals and risk profile.'
    },
    {
      icon: <Shield className="feature-icon" />,
      title: 'Secure Platform',
      description: 'Your financial data is protected with bank-level security measures and encryption.'
    },
    {
      icon: <BookOpen className="feature-icon" />,
      title: 'Learning Resources',
      description: 'Access comprehensive educational content to build your financial knowledge and confidence.'
    },
    {
      icon: <Calculator className="feature-icon" />,
      title: 'Financial Tools',
      description: 'Use our suite of calculators and tools to plan your investments and track your progress.'
    },
    {
      icon: <Bell className="feature-icon" />,
      title: 'Smart Notifications',
      description: 'Stay updated with personalized alerts about market trends and investment opportunities.'
    }
  ];

  // Data for pie chart
  const pieData = [
    { name: 'Stocks', value: 35 },
    { name: 'Mutual Funds', value: 25 },
    { name: 'SIP', value: 20 },
    { name: 'Gold Bonds', value: 15 },
    { name: 'Others', value: 5 }
  ];

  // Data for bar chart
  const barData = [
    { month: 'Jan', returns: 4.2 },
    { month: 'Feb', returns: 3.8 },
    { month: 'Mar', returns: 5.1 },
    { month: 'Apr', returns: 4.9 },
    { month: 'May', returns: 5.5 },
    { month: 'Jun', returns: 4.7 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444'];

  return (
    <div className="home">
      <main className="container">
        <section className="hero">
          <h1 className="hero-title">Welcome to FinancePro</h1>
          <p className="hero-description">
            Your comprehensive platform for financial learning, investment strategies, and personal finance management.
          </p>
        </section>

        <div className="features">
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className={`feature-card ${index % 2 === 0 ? '' : 'reverse'}`}
            >
              <div className="card-image-container">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="card-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x400?text=' + card.title.replace(/\s+/g, '+');
                  }}
                />
              </div>
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-description">{card.description}</p>
                <Link to={card.link} className="btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="features-section">
          <h2 className="section-title">Why Choose FinancePro?</h2>
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-item-title">{feature.title}</h3>
                <p className="feature-item-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* New Charts Section */}
        <section className="charts-section">
          <h2 className="section-title">Investment Analytics</h2>
          <div className="charts-grid">
            <div className="chart-card">
              <h3 className="chart-title">Portfolio Distribution</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="chart-card">
              <h3 className="chart-title">Monthly Returns</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="returns" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2024 FinancePro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home; 