import React from 'react';
import { 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  LockClosedIcon 
} from '@heroicons/react/24/outline';

const GoldBonds = () => {
  const features = [
    {
      icon: <CheckCircleIcon className="feature-icon text-green-500" />,
      title: "Interest Earnings",
      description: "Provide a fixed annual interest on the initial investment, credited semi-annually."
    },
    {
      icon: <ShieldCheckIcon className="feature-icon text-blue-500" />,
      title: "Tax Benefits",
      description: "Capital gains tax exemption if held until maturity (8 years)."
    },
    {
      icon: <LockClosedIcon className="feature-icon text-yellow-500" />,
      title: "Safety",
      description: "Eliminates risks associated with physical gold storage."
    }
  ];

  const comparisonData = [
    {
      aspect: "Liquidity",
      sgb: "Fixed tenure, tradable in secondary markets",
      goldEtf: "Higher liquidity"
    },
    {
      aspect: "Returns",
      sgb: "Fixed interest plus gold price appreciation",
      goldEtf: "Based solely on gold price movements"
    }
  ];

  const resources = [
    {
      name: "RBI – Sovereign Gold Bond FAQs",
      link: "https://www.rbi.org.in"
    },
    {
      name: "SBI – Gold Bond Scheme",
      link: "https://www.sbi.co.in"
    },
    {
      name: "ICICI Bank – Gold Bond Info",
      link: "https://www.icicibank.com"
    }
  ];

  return (
    <div className="gold-bonds-container">
      {/* Introduction Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Sovereign Gold Bonds (SGBs)</h2>
          </div>
          <div className="card-body">
            <p>
              Sovereign Gold Bonds are government-backed securities denominated in grams of gold. 
              Issued by the Reserve Bank of India (RBI), they offer an alternative to owning physical gold.
            </p>
          </div>
        </div>
      </div>

      {/* Features Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Key Features of SGBs</h2>
          </div>
          <div className="card-body">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  {feature.icon}
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">SGBs vs. Gold ETFs</h2>
          </div>
          <div className="card-body">
            <div className="table-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>Sovereign Gold Bonds</th>
                    <th>Gold ETFs</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((comparison, index) => (
                    <tr key={index}>
                      <td>{comparison.aspect}</td>
                      <td>{comparison.sgb}</td>
                      <td>{comparison.goldEtf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Card */}
      <div className="card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">Helpful Resources</h2>
          </div>
          <div className="card-body">
            <ul className="resources-list">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="resource-link"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldBonds; 