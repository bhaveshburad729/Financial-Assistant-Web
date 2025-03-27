import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/mutual-funds.css';
import '../styles/animations.css';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

// Using placeholder images instead of local files
const mutualFunds = [
  {
    id: 1,
    title: 'Equity Growth Fund',
    description: 'Invests primarily in stocks with high growth potential. Suitable for long-term wealth creation.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60',
    returns: '12.5%',
    risk: 'High',
    minInvestment: '₹5,000',
    lockIn: '3 years'
  },
  {
    id: 2,
    title: 'Debt Income Fund',
    description: 'Focuses on fixed-income securities. Provides stable returns with lower risk.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
    returns: '7.2%',
    risk: 'Low',
    minInvestment: '₹1,000',
    lockIn: '1 year'
  },
  {
    id: 3,
    title: 'Balanced Fund',
    description: 'Balanced portfolio of equity and debt instruments. Moderate risk with good returns.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    returns: '9.8%',
    risk: 'Medium',
    minInvestment: '₹2,000',
    lockIn: '2 years'
  },
  {
    id: 4,
    title: 'Liquid Fund',
    description: 'Invests in short-term debt instruments. High liquidity with low risk.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60',
    returns: '5.5%',
    risk: 'Low',
    minInvestment: '₹500',
    lockIn: 'None'
  }
];

const MutualFunds = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState({
    introduction: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60",
    howItWorks: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    typesOfFunds: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    benefits: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60"
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="mutual-funds-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const handleImageUpload = (section) => {
    // Implement image upload logic
    // This is a placeholder for actual image upload functionality
    alert(`Uploading image for ${section}`);
  };

  return (
    <div className="mutual-funds-container">
      <div className="mutual-funds-header">
        <h1 className="mutual-funds-title">Mutual Funds</h1>
        <p className="mutual-funds-subtitle">
          Discover a wide range of mutual funds tailored to your investment goals and risk appetite.
          Start your investment journey with our carefully curated selection.
        </p>
      </div>

      <div className="mutual-funds-grid">
        {mutualFunds.map((fund) => (
          <div key={fund.id} className="mutual-fund-card">
            <img 
              src={fund.image} 
              alt={fund.title}
              className="mutual-fund-image"
            />
            <div className="mutual-fund-content">
              <h2 className="mutual-fund-title">{fund.title}</h2>
              <p className="mutual-fund-description">{fund.description}</p>
              
              <div className="mutual-fund-stats">
                <div className="stat-item">
                  <div className="stat-value">{fund.returns}</div>
                  <div className="stat-label">Annual Returns</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{fund.risk}</div>
                  <div className="stat-label">Risk Level</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{fund.minInvestment}</div>
                  <div className="stat-label">Min Investment</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{fund.lockIn}</div>
                  <div className="stat-label">Lock-in Period</div>
                </div>
              </div>

              <button className="mutual-fund-button ripple">
                Invest Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Introduction Card */}
      <div className="card">
        <div className="card-image-container">
          <img 
            src={images.introduction} 
            alt="Mutual Funds Introduction" 
            className="card-image"
          />
          <button 
            className="upload-button"
            onClick={() => handleImageUpload('introduction')}
          >
            <ArrowUpTrayIcon className="upload-icon" />
            Replace Image
          </button>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">What Are Mutual Funds?</h2>
          </div>
          <div className="card-body">
            <p>
              Mutual funds are investment vehicles that pool money from multiple 
              investors to purchase a diversified portfolio of securities such as 
              stocks, bonds, or other assets. Managed by professional fund managers, 
              they aim to generate returns aligned with the fund's investment objectives.
            </p>
          </div>
        </div>
      </div>

      {/* How Mutual Funds Work Card */}
      <div className="card reverse">
        <div className="card-image-container">
          <img 
            src={images.howItWorks} 
            alt="How Mutual Funds Work" 
            className="card-image"
          />
          <button 
            className="upload-button"
            onClick={() => handleImageUpload('howItWorks')}
          >
            <ArrowUpTrayIcon className="upload-icon" />
            Replace Image
          </button>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">How Mutual Funds Work</h2>
          </div>
          <div className="card-body">
            <ol className="ordered-list">
              <li>
                <strong>Pooling of Funds</strong>: Investors contribute money, 
                which is collectively invested in a diversified portfolio.
              </li>
              <li>
                <strong>Professional Management</strong>: Experienced fund managers 
                make investment decisions on behalf of investors.
              </li>
              <li>
                <strong>Net Asset Value (NAV)</strong>: The value of one unit of 
                the mutual fund, calculated daily based on the total value of the 
                fund's assets minus liabilities.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Types of Mutual Funds Card */}
      <div className="card">
        <div className="card-image-container">
          <img 
            src={images.typesOfFunds} 
            alt="Types of Mutual Funds" 
            className="card-image"
          />
          <button 
            className="upload-button"
            onClick={() => handleImageUpload('typesOfFunds')}
          >
            <ArrowUpTrayIcon className="upload-icon" />
            Replace Image
          </button>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Types of Mutual Funds</h2>
          </div>
          <div className="card-body">
            <ul className="unordered-list">
              <li>
                <strong>Equity Mutual Funds</strong>: Invest primarily in stocks, 
                aiming for capital appreciation.
              </li>
              <li>
                <strong>Debt Mutual Funds</strong>: Focus on fixed-income securities 
                like bonds, seeking regular income with lower risk.
              </li>
              <li>
                <strong>Hybrid Mutual Funds</strong>: Combine investments in both 
                equities and debts to balance risk and return.
              </li>
              <li>
                <strong>Gold Mutual Funds</strong>: Invest in gold-related instruments, 
                such as Gold ETFs, allowing exposure to gold without physical ownership.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Card */}
      <div className="card reverse">
        <div className="card-image-container">
          <img 
            src={images.benefits} 
            alt="Benefits of Mutual Funds" 
            className="card-image"
          />
          <button 
            className="upload-button"
            onClick={() => handleImageUpload('benefits')}
          >
            <ArrowUpTrayIcon className="upload-icon" />
            Replace Image
          </button>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Benefits of Investing in Mutual Funds</h2>
          </div>
          <div className="card-body">
            <ul className="unordered-list">
              <li>
                <strong>Diversification</strong>: Reduces risk by spreading 
                investments across various assets.
              </li>
              <li>
                <strong>Professional Management</strong>: Access to expert fund 
                managers who analyze markets and make informed decisions.
              </li>
              <li>
                <strong>Liquidity</strong>: Easy to buy and sell fund units, 
                providing flexibility to investors.
              </li>
              <li>
                <strong>Accessibility</strong>: Allows investments with relatively 
                small amounts, making it suitable for a wide range of investors.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Resources for Mutual Funds</h2>
            <p className="card-description">
              Explore these resources to learn more about mutual funds in India
            </p>
          </div>
          <div className="card-body">
            <ul className="unordered-list">
              <li>
                <a 
                  href="https://groww.in/best-mutual-funds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Best Equity Mutual Funds to Invest in India 2025 - Groww
                </a>
              </li>
              <li>
                <a 
                  href="https://www.moneycontrol.com/mutual-funds/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Best Equity Mutual Funds - Moneycontrol
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds; 