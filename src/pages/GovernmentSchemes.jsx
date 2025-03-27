import React, { useState } from 'react';
import { 
  InformationCircleIcon, 
  ArrowTrendingUpIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  WalletIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ScaleIcon,
  ChartBarIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const GovernmentSchemes = () => {
  const [expandedScheme, setExpandedScheme] = useState(null);

  const governmentSchemes = [
    {
      title: "Sovereign Gold Bonds (SGB)",
      description: "A sophisticated digital alternative to physical gold investment, backed by the Government of India.",
      icon: <WalletIcon className="scheme-icon text-yellow-500" />,
      keyFeatures: [
        "Attractive interest rate of 2.50% per annum, paid semi-annually",
        "Flexible 8-year tenure with early exit option after 5 years",
        "Investment range: 1-4 kg per individual annually",
        "Tax-efficient: Capital gains tax exemption at maturity"
      ],
      benefits: [
        "Combines gold price appreciation with guaranteed interest income",
        "Eliminates physical gold storage risks and associated costs",
        "Fully dematerialized and tradable on stock exchanges"
      ],
      riskLevel: "Low",
      suitableFor: ["Conservative investors", "Gold enthusiasts", "Tax-conscious individuals"]
    },
    {
      title: "Public Provident Fund (PPF)",
      description: "A long-term, government-backed savings scheme offering robust financial security.",
      icon: <ShieldCheckIcon className="scheme-icon text-green-500" />,
      keyFeatures: [
        "Competitive interest rate of 7.1% per annum (as of April 2024)",
        "Extended 15-year tenure, extendable in 5-year blocks",
        "Flexible investment: ₹500 to ₹1.5 lakh per year",
        "Comprehensive tax benefits: Exempt-Exempt-Exempt (EEE) status"
      ],
      benefits: [
        "Guaranteed returns with sovereign safety",
        "Ideal for long-term wealth accumulation and retirement planning",
        "Offers complete tax efficiency across investment, interest, and maturity"
      ],
      riskLevel: "Very Low",
      suitableFor: ["Conservative investors", "Long-term savers", "Tax planners"]
    }
  ];

  const renderSchemeDetails = (scheme, index) => (
    <div className="scheme-details">
      <div className="scheme-header">
        {scheme.icon}
        <div>
          <h3 className="scheme-title">{scheme.title}</h3>
          <p className="scheme-description">{scheme.description}</p>
        </div>
      </div>

      <div className="scheme-grid">
        <div>
          <h4 className="scheme-section-title">Key Features</h4>
          <ul className="scheme-list">
            {scheme.keyFeatures.map((feature, featureIndex) => (
              <li key={featureIndex} className="scheme-list-item">
                <InformationCircleIcon className="scheme-list-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="scheme-section-title">Benefits</h4>
          <ul className="scheme-list">
            {scheme.benefits.map((benefit, benefitIndex) => (
              <li key={benefitIndex} className="scheme-list-item">
                <ArrowTrendingUpIcon className="scheme-list-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="scheme-info-grid">
        <div>
          <h4 className="scheme-section-title">Risk Profile</h4>
          <p className={`scheme-risk-level ${scheme.riskLevel.toLowerCase().replace(' ', '-')}`}>
            {scheme.riskLevel}
          </p>
        </div>
        <div>
          <h4 className="scheme-section-title">Suitable For</h4>
          <ul className="scheme-tags">
            {scheme.suitableFor.map((type, typeIndex) => (
              <li key={typeIndex} className="scheme-tag">
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="government-schemes-container">
      {/* Introduction Card */}
      <div className="card introduction-card">
        <div className="card-content">
          <h1 className="card-title">Government Investment Schemes</h1>
          <p className="card-description">
            Discover secure and tax-efficient investment options backed by the Government of India.
            These schemes offer guaranteed returns and various tax benefits to help you achieve your financial goals.
          </p>
        </div>
      </div>

      {/* Tax Benefits Card */}
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Tax Benefits Overview</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <DocumentCheckIcon className="benefit-icon" />
              <h3>Section 80C Deduction</h3>
              <p>Up to ₹1.5 lakh tax deduction on investments</p>
            </div>
            <div className="benefit-item">
              <ArrowTrendingUpIcon className="benefit-icon" />
              <h3>Tax-Free Interest</h3>
              <p>Interest earned is completely tax-free</p>
            </div>
            <div className="benefit-item">
              <ScaleIcon className="benefit-icon" />
              <h3>Exempt-Exempt-Exempt</h3>
              <p>Investment, interest, and maturity all tax-free</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Limits Card */}
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Investment Limits</h2>
          <div className="limits-grid">
            <div className="limit-item">
              <CurrencyDollarIcon className="limit-icon" />
              <h3>PPF</h3>
              <p>Minimum: ₹500/year</p>
              <p>Maximum: ₹1.5 lakh/year</p>
            </div>
            <div className="limit-item">
              <CurrencyDollarIcon className="limit-icon" />
              <h3>NPS</h3>
              <p>Minimum: ₹1,000/year</p>
              <p>Maximum: No limit</p>
            </div>
            <div className="limit-item">
              <CurrencyDollarIcon className="limit-icon" />
              <h3>SSY</h3>
              <p>Minimum: ₹250/year</p>
              <p>Maximum: ₹1.5 lakh/year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria Card */}
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Eligibility Criteria</h2>
          <div className="eligibility-grid">
            <div className="eligibility-item">
              <UserGroupIcon className="eligibility-icon" />
              <h3>PPF</h3>
              <ul>
                <li>Indian residents only</li>
                <li>One account per person</li>
                <li>Minors can open account</li>
              </ul>
            </div>
            <div className="eligibility-item">
              <UserGroupIcon className="eligibility-icon" />
              <h3>NPS</h3>
              <ul>
                <li>18-70 years age</li>
                <li>Indian citizens</li>
                <li>NRIs can invest</li>
              </ul>
            </div>
            <div className="eligibility-item">
              <UserGroupIcon className="eligibility-icon" />
              <h3>SSY</h3>
              <ul>
                <li>Girl child below 10 years</li>
                <li>One account per girl child</li>
                <li>Maximum two accounts per family</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Lock-in Periods Card */}
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Lock-in Periods</h2>
          <div className="lock-in-grid">
            <div className="lock-in-item">
              <ClockIcon className="lock-in-icon" />
              <h3>PPF</h3>
              <p>15 years</p>
              <p className="lock-in-note">Partial withdrawal after 6 years</p>
            </div>
            <div className="lock-in-item">
              <ClockIcon className="lock-in-icon" />
              <h3>NPS</h3>
              <p>Until retirement</p>
              <p className="lock-in-note">60% withdrawal at retirement</p>
            </div>
            <div className="lock-in-item">
              <ClockIcon className="lock-in-icon" />
              <h3>SSY</h3>
              <p>21 years</p>
              <p className="lock-in-note">Partial withdrawal for education after 18 years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Comparison Card */}
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Risk Comparison</h2>
          <div className="risk-grid">
            <div className="risk-item very-low">
              <ShieldCheckIcon className="risk-icon" />
              <h3>PPF</h3>
              <p>Government-backed</p>
              <p>Fixed interest rate</p>
              <p>No market risk</p>
            </div>
            <div className="risk-item low">
              <ShieldCheckIcon className="risk-icon" />
              <h3>SSY</h3>
              <p>Government-backed</p>
              <p>Fixed interest rate</p>
              <p>No market risk</p>
            </div>
            <div className="risk-item medium">
              <ChartBarIcon className="risk-icon" />
              <h3>NPS</h3>
              <p>Market-linked</p>
              <p>Professional management</p>
              <p>Moderate risk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes Card */}
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Important Notes</h2>
          <div className="notes-grid">
            <div className="note-item">
              <ExclamationCircleIcon className="note-icon" />
              <h3>Documentation</h3>
              <ul>
                <li>Valid ID proof</li>
                <li>Address proof</li>
                <li>PAN card</li>
                <li>Bank account details</li>
              </ul>
            </div>
            <div className="note-item">
              <ExclamationCircleIcon className="note-icon" />
              <h3>Nomination</h3>
              <ul>
                <li>Mandatory for all schemes</li>
                <li>Can be changed anytime</li>
                <li>Multiple nominees allowed</li>
              </ul>
            </div>
            <div className="note-item">
              <ExclamationCircleIcon className="note-icon" />
              <h3>Premature Closure</h3>
              <ul>
                <li>Generally not allowed</li>
                <li>Special cases only</li>
                <li>Penalty may apply</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Government Schemes Section */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Flagship Investment Schemes</h2>
          </div>
          <div className="card-body">
            <div className="schemes-list">
              {governmentSchemes.map((scheme, index) => (
                <div 
                  key={index} 
                  className="scheme-card"
                  onClick={() => setExpandedScheme(expandedScheme === index ? null : index)}
                >
                  <div className="scheme-card-header">
                    <h3 className="scheme-card-title">{scheme.title}</h3>
                    <ClockIcon className={`scheme-card-icon ${expandedScheme === index ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedScheme === index && renderSchemeDetails(scheme, index)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Investment Guidance Section */}
      <div className="card guidance-card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Strategic Investment Guidance</h2>
          </div>
          <div className="card-body">
            <div className="guidance-grid">
              <div>
                <h4 className="guidance-title">Key Considerations</h4>
                <ul className="guidance-list">
                  <li className="guidance-item">
                    <ArrowTrendingUpIcon className="guidance-icon" />
                    <span>Align investments with long-term financial objectives</span>
                  </li>
                  <li className="guidance-item">
                    <ShieldCheckIcon className="guidance-icon" />
                    <span>Understand your personal risk tolerance</span>
                  </li>
                  <li className="guidance-item">
                    <WalletIcon className="guidance-icon" />
                    <span>Diversify across different investment instruments</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="guidance-title">Professional Advice</h4>
                <p className="guidance-quote">
                  "Personalized financial planning is not an expense, but an investment in your future. Consult a certified financial advisor to craft a strategy that aligns with your unique financial landscape."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes; 