import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/mutual-funds.css';
import '../styles/animations.css';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const sipPlans = [
  {
    id: 1,
    title: 'Growth SIP',
    description: 'Regular investments in equity funds for long-term wealth creation. Ideal for aggressive investors.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60',
    minAmount: '₹500',
    frequency: 'Monthly',
    returns: '12-15%',
    risk: 'High',
    lockIn: '3 years'
  },
  {
    id: 2,
    title: 'Balanced SIP',
    description: 'Balanced approach with mix of equity and debt funds. Suitable for moderate risk takers.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60',
    minAmount: '₹1,000',
    frequency: 'Monthly',
    returns: '8-10%',
    risk: 'Medium',
    lockIn: '2 years'
  },
  {
    id: 3,
    title: 'Conservative SIP',
    description: 'Focus on debt funds and fixed income securities. Perfect for risk-averse investors.',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop&q=60',
    minAmount: '₹2,000',
    frequency: 'Monthly',
    returns: '6-8%',
    risk: 'Low',
    lockIn: '1 year'
  },
  {
    id: 4,
    title: 'Flexi SIP',
    description: 'Flexible investment amount based on market conditions. For experienced investors.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60',
    minAmount: '₹1,000',
    frequency: 'Monthly',
    returns: '10-12%',
    risk: 'Medium-High',
    lockIn: '2 years'
  }
];

const SIPs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState({
    introduction: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&auto=format&fit=crop&q=60",
    howItWorks: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&auto=format&fit=crop&q=60",
    benefits: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
    calculator: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=60"
  });

  useEffect(() => {
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
    alert(`Uploading image for ${section}`);
  };

  return (
    <div className="mutual-funds-container">
      <div className="mutual-funds-header">
        <h1 className="mutual-funds-title">Systematic Investment Plans (SIPs)</h1>
        <p className="mutual-funds-subtitle">
          Start your investment journey with SIPs. Invest regularly and build wealth over time with our carefully designed SIP plans.
        </p>
      </div>

      <div className="mutual-funds-grid">
        {sipPlans.map((plan) => (
          <div key={plan.id} className="mutual-fund-card">
            <img 
              src={plan.image} 
              alt={plan.title}
              className="mutual-fund-image"
            />
            <div className="mutual-fund-content">
              <h2 className="mutual-fund-title">{plan.title}</h2>
              <p className="mutual-fund-description">{plan.description}</p>
              
              <div className="mutual-fund-stats">
                <div className="stat-item">
                  <div className="stat-value">{plan.minAmount}</div>
                  <div className="stat-label">Min Amount</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{plan.frequency}</div>
                  <div className="stat-label">Frequency</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{plan.returns}</div>
                  <div className="stat-label">Expected Returns</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{plan.risk}</div>
                  <div className="stat-label">Risk Level</div>
                </div>
              </div>

              <button className="mutual-fund-button ripple">
                Start SIP
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
            <h2 className="card-title">What is a Systematic Investment Plan (SIP)?</h2>
          </div>
          <div className="card-body">
            <p>
              A Systematic Investment Plan (SIP) is an investment strategy that allows you to invest a fixed amount regularly in mutual funds. 
              This approach helps in building wealth over time through the power of compounding and rupee cost averaging.
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
                <strong>Regular Investment</strong>: Invest a fixed amount at regular intervals (monthly, quarterly, etc.)
              </li>
              <li>
                <strong>Rupee Cost Averaging</strong>: Buy more units when prices are low and fewer when prices are high
              </li>
              <li>
                <strong>Power of Compounding</strong>: Earnings are reinvested to generate additional earnings over time
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Benefits Card */}
      <div className="card">
        <div className="card-image-container">
          <img 
            src={images.benefits} 
            alt="Benefits of SIPs" 
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
            <h2 className="card-title">Benefits of SIPs</h2>
          </div>
          <div className="card-body">
            <ul className="unordered-list">
              <li>
                <strong>Disciplined Investing</strong>: Regular investments help build financial discipline
              </li>
              <li>
                <strong>Market Timing</strong>: No need to worry about market timing
              </li>
              <li>
                <strong>Flexibility</strong>: Start with small amounts and increase gradually
              </li>
              <li>
                <strong>Long-term Wealth Creation</strong>: Harness the power of compounding
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SIP Calculator Card */}
      <div className="card reverse">
        <div className="card-image-container">
          <img 
            src={images.calculator} 
            alt="SIP Calculator" 
            className="card-image"
          />
          <button 
            className="upload-button"
            onClick={() => handleImageUpload('calculator')}
          >
            <ArrowUpTrayIcon className="upload-icon" />
            Replace Image
          </button>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">SIP Calculator</h2>
          </div>
          <div className="card-body">
            <p>
              Use our SIP calculator to estimate your potential returns and plan your investments better.
              Calculate how your regular investments can grow over time.
            </p>
            <button className="mutual-fund-button ripple">
              Try SIP Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPs; 