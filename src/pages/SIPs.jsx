import React, { useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const SIPs = () => {
  const [images, setImages] = useState({
    introduction: "/api/placeholder/600/400",
    howItWorks: "/api/placeholder/600/400",
    advantages: "/api/placeholder/600/400"
  });

  const handleImageUpload = (section) => {
    // Implement image upload logic
    // This is a placeholder for actual image upload functionality
    alert(`Uploading image for ${section}`);
  };

  return (
    <div className="sips-container">
      {/* Introduction Card */}
      <div className="card">
        <div className="card-image-container">
          <img 
            src={images.introduction} 
            alt="SIP Introduction" 
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
            <h2 className="card-title">What Is a SIP?</h2>
          </div>
          <div className="card-body">
            <p>
              A Systematic Investment Plan (SIP) is a disciplined investment approach 
              where an individual invests a fixed amount regularly (e.g., monthly) 
              into a mutual fund scheme. This method promotes regular savings and 
              investment habits.
            </p>
          </div>
        </div>
      </div>

      {/* How SIPs Work Card */}
      <div className="card reverse">
        <div className="card-image-container">
          <img 
            src={images.howItWorks} 
            alt="How SIPs Work" 
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
            <h2 className="card-title">How SIPs Work</h2>
          </div>
          <div className="card-body">
            <ol className="ordered-list">
              <li>
                <strong>Regular Investments</strong>: Invest a predetermined amount 
                at regular intervals, regardless of market conditions.
              </li>
              <li>
                <strong>Unit Allocation</strong>: The invested amount buys units of 
                the chosen mutual fund based on the prevailing Net Asset Value (NAV).
              </li>
              <li>
                <strong>Compounding</strong>: Earnings are reinvested, leading to 
                potential exponential growth over time.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Advantages of SIPs Card */}
      <div className="card">
        <div className="card-image-container">
          <img 
            src={images.advantages} 
            alt="Advantages of SIPs" 
            className="card-image"
          />
          <button 
            className="upload-button"
            onClick={() => handleImageUpload('advantages')}
          >
            <ArrowUpTrayIcon className="upload-icon" />
            Replace Image
          </button>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Advantages of SIPs</h2>
          </div>
          <div className="card-body">
            <ul className="unordered-list">
              <li>
                <strong>Rupee Cost Averaging</strong>: Investing regularly averages 
                out the purchase cost, mitigating the impact of market volatility.
              </li>
              <li>
                <strong>Compounding Benefits</strong>: Early and regular investments 
                can lead to significant wealth accumulation due to compound interest.
              </li>
              <li>
                <strong>Flexibility</strong>: Investors can start with amounts as 
                low as ₹500, making it accessible to many.
              </li>
              <li>
                <strong>Convenience</strong>: Automated deductions from bank accounts 
                make the investment process hassle-free.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Resources Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Resources for SIPs</h2>
            <p className="card-description">
              Explore these resources to learn more about Systematic Investment Plans
            </p>
          </div>
          <div className="card-body">
            <ul className="unordered-list">
              <li>
                <a 
                  href="https://www.etmoney.com/mutual-funds/best-sip-funds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  Best SIP Funds - Top SIP Mutual Funds to Invest in 2025 - ET Money
                </a>
              </li>
              <li>
                <a 
                  href="https://www.icicidirect.com/mutual-funds/sip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  SIP Systematic Investment Plan - Mutual Fund - ICICI Direct
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPs; 