import React, { useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const MutualFunds = () => {
  const [images, setImages] = useState({
    introduction: "/api/placeholder/600/400",
    howItWorks: "/api/placeholder/600/400",
    typesOfFunds: "/api/placeholder/600/400",
    benefits: "/api/placeholder/600/400"
  });

  const handleImageUpload = (section) => {
    // Implement image upload logic
    // This is a placeholder for actual image upload functionality
    alert(`Uploading image for ${section}`);
  };

  return (
    <div className="mutual-funds-container">
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