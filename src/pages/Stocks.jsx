import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const Stocks = () => {
  const [activeSection, setActiveSection] = useState(null);

  const stockTypes = [
    {
      title: "Large-Cap Stocks",
      description: "Shares of well-established companies with a large market capitalization (typically over ₹20,000 crore). These companies are industry leaders with stable performance, lower volatility, and often pay consistent dividends.",
      characteristics: [
        "Market leaders in their respective industries",
        "Stable and consistent financial performance",
        "Lower risk compared to mid and small-cap stocks",
        "Often provide regular dividend income",
        "Examples: TCS, Reliance, HDFC Bank"
      ],
      color: "blue"
    },
    {
      title: "Mid-Cap Stocks",
      description: "Shares of medium-sized companies with market capitalization between ₹5,000 crore and ₹20,000 crore. These stocks offer a balance between growth potential and stability.",
      characteristics: [
        "Strong growth potential",
        "More volatile than large-cap stocks",
        "Potential for higher returns",
        "Developing businesses with expansion opportunities",
        "Examples: Persistent Systems, City Union Bank"
      ],
      color: "green"
    },
    {
      title: "Small-Cap Stocks",
      description: "Shares of smaller companies with market capitalization below ₹5,000 crore. These stocks offer high growth potential but come with increased risk and volatility.",
      characteristics: [
        "Highest growth potential",
        "Significant price fluctuations",
        "Less established companies",
        "Higher risk of business failure",
        "Potential for significant returns",
        "Examples: Smaller niche market companies"
      ],
      color: "yellow"
    }
  ];

  const investmentStrategies = [
    {
      title: "Value Investing",
      description: "Identifying undervalued stocks trading below their intrinsic value. Investors look for stocks with strong fundamentals but temporarily low market prices.",
      key_points: [
        "Focus on company's financial health",
        "Look for stocks trading below their intrinsic value",
        "Long-term investment approach",
        "Popularized by Warren Buffett"
      ]
    },
    {
      title: "Growth Investing",
      description: "Investing in companies with strong potential for future growth, even if current valuations seem high. Focuses on companies with innovative products or expanding markets.",
      key_points: [
        "Emphasis on future potential",
        "Higher price-to-earnings ratios",
        "Targeting emerging industries",
        "More suitable for risk-tolerant investors"
      ]
    },
    {
      title: "Dividend Investing",
      description: "Selecting stocks that provide regular dividend income. Ideal for investors seeking steady income stream alongside potential capital appreciation.",
      key_points: [
        "Steady income generation",
        "Typically large-cap, stable companies",
        "Lower volatility",
        "Attractive for conservative investors"
      ]
    }
  ];

  const benefitsAndRisks = [
    {
      title: "Potential for High Returns",
      description: "Stocks can offer substantial returns over the long term, outperforming many other investment options. Historical data shows stock markets typically provide 12-15% annual returns.",
      type: "benefit"
    },
    {
      title: "Market Volatility",
      description: "Stock prices can fluctuate significantly in the short term due to various factors like economic conditions, company performance, global events, and market sentiment.",
      type: "risk"
    },
    {
      title: "Dividend Income",
      description: "Some companies distribute a portion of earnings to shareholders as dividends, providing an additional income stream beyond capital appreciation.",
      type: "benefit"
    },
    {
      title: "Portfolio Diversification",
      description: "Stocks allow investors to spread risk across different sectors, company sizes, and investment strategies, reducing overall portfolio risk.",
      type: "benefit"
    }
  ];

  const resources = [
    {
      name: "National Stock Exchange of India",
      link: "https://www.nseindia.com",
      description: "Official website for NSE, providing real-time market data and resources"
    },
    {
      name: "Bombay Stock Exchange",
      link: "https://www.bseindia.com",
      description: "India's oldest stock exchange with comprehensive market information"
    },
    {
      name: "SEBI (Securities and Exchange Board of India)",
      link: "https://www.sebi.gov.in",
      description: "Regulatory body overseeing stock market operations and investor protection"
    }
  ];

  return (
    <div className="stocks-container">
      {/* Introduction Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Understanding Stocks: Your Gateway to Wealth Creation</h2>
          </div>
          <div className="card-body">
            <p>
              Stocks represent ownership shares in a company. When you invest in stocks, you're purchasing a small piece of a business, becoming a partial owner with potential for financial growth through capital appreciation and dividend income.
            </p>
          </div>
        </div>
      </div>

      {/* Types of Stocks Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Types of Stocks: Navigating Market Capitalization</h2>
          </div>
          <div className="card-body">
            <div className="stock-types-grid">
              {stockTypes.map((stock, index) => (
                <div 
                  key={index} 
                  className={`stock-type-card ${stock.color}`}
                  onClick={() => setActiveSection(activeSection === index ? null : index)}
                >
                  <h3 className="stock-type-title">{stock.title}</h3>
                  <p className="stock-type-description">{stock.description}</p>
                  {activeSection === index && (
                    <div className="stock-type-details">
                      <h4>Key Characteristics:</h4>
                      <ul className="stock-type-list">
                        {stock.characteristics.map((char, charIndex) => (
                          <li key={charIndex}>{char}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Investment Strategies Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Investment Strategies: Approaches to Stock Investing</h2>
          </div>
          <div className="card-body">
            <div className="strategies-grid">
              {investmentStrategies.map((strategy, index) => (
                <div key={index} className="strategy-card">
                  <h3 className="strategy-title">{strategy.title}</h3>
                  <p className="strategy-description">{strategy.description}</p>
                  <h4>Key Points:</h4>
                  <ul className="strategy-list">
                    {strategy.key_points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits and Risks Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Benefits and Risks of Stock Investing</h2>
          </div>
          <div className="card-body">
            <div className="benefits-risks-grid">
              {benefitsAndRisks.map((item, index) => (
                <div 
                  key={index} 
                  className={`benefit-risk-card ${item.type}`}
                >
                  <h3 className="benefit-risk-title">{item.title}</h3>
                  <p className="benefit-risk-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resources Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Essential Stock Market Resources</h2>
          </div>
          <div className="card-body">
            <div className="resources-list">
              {resources.map((resource, index) => (
                <div key={index} className="resource-item">
                  <span className="resource-icon"></span>
                  <div className="resource-content">
                    <a 
                      href={resource.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="resource-link"
                    >
                      {resource.name}
                    </a>
                    <p className="resource-description">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocks; 