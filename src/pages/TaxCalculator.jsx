import React, { useState } from 'react';
import { 
  CalculatorIcon, 
  BanknotesIcon, 
  StarIcon, 
  WalletIcon, 
  ChartPieIcon, 
  CurrencyDollarIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const TaxCalculator = () => {
  // Themes
  const themes = {
    default: {
      bgClass: 'tax-calculator-default',
      cardClass: 'tax-calculator-card-default',
      buttonClass: 'tax-calculator-button-default',
      iconColor: 'tax-calculator-icon-default'
    },
    professional: {
      bgClass: 'tax-calculator-professional',
      cardClass: 'tax-calculator-card-professional',
      buttonClass: 'tax-calculator-button-professional',
      iconColor: 'tax-calculator-icon-professional'
    },
    startup: {
      bgClass: 'tax-calculator-startup',
      cardClass: 'tax-calculator-card-startup',
      buttonClass: 'tax-calculator-button-startup',
      iconColor: 'tax-calculator-icon-startup'
    }
  };

  // State Management
  const [theme, setTheme] = useState('default');
  const [income, setIncome] = useState('');
  const [age, setAge] = useState('');
  const [deductions, setDeductions] = useState({
    section80C: '',
    section80D: '',
    homeInterest: '',
    otherDeductions: ''
  });
  const [taxResults, setTaxResults] = useState(null);

  // Tax Calculation Logic
  const calculateTax = () => {
    const totalIncome = parseFloat(income) || 0;
    const ageGroup = age;

    if (totalIncome <= 0 || !ageGroup) {
      alert('Please enter valid income and age group');
      return;
    }

    const totalDeductions = 
      parseFloat(deductions.section80C || 0) +
      parseFloat(deductions.section80D || 0) +
      parseFloat(deductions.homeInterest || 0) +
      parseFloat(deductions.otherDeductions || 0);

    const taxableIncome = Math.max(totalIncome - totalDeductions, 0);

    let taxAmount = 0;
    if (taxableIncome <= 300000) {
      taxAmount = 0;
    } else if (taxableIncome <= 600000) {
      taxAmount = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 900000) {
      taxAmount = 15000 + (taxableIncome - 600000) * 0.10;
    } else if (taxableIncome <= 1200000) {
      taxAmount = 45000 + (taxableIncome - 900000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      taxAmount = 90000 + (taxableIncome - 1200000) * 0.20;
    } else {
      taxAmount = 150000 + (taxableIncome - 1500000) * 0.30;
    }

    const finalTax = taxAmount * 1.04;

    setTaxResults({
      totalIncome,
      totalDeductions,
      taxableIncome,
      taxAmount: Math.round(taxAmount),
      finalTax: Math.round(finalTax),
      effectiveTaxRate: ((finalTax / totalIncome) * 100).toFixed(2)
    });
  };

  // Theme Selection Component
  const ThemeSelector = () => (
    <div className="theme-selector">
      {Object.keys(themes).map((themeKey) => (
        <button
          key={themeKey}
          onClick={() => setTheme(themeKey)}
          className={`theme-button ${theme === themeKey ? 'theme-button-active' : ''} ${themes[themeKey].buttonClass}`}
        >
          {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)} Theme
        </button>
      ))}
    </div>
  );

  // Current theme
  const currentTheme = themes[theme];

  return (
    <div className={`tax-calculator-container ${currentTheme.bgClass}`}>
      <div className={`tax-calculator-card ${currentTheme.cardClass}`}>
        {/* Theme Selector */}
        <ThemeSelector />

        {/* Header */}
        <div className="tax-calculator-header">
          <CalculatorIcon className={`tax-calculator-icon ${currentTheme.iconColor}`} />
          <h1 className="tax-calculator-title">
            Smart Tax Calculator
          </h1>
        </div>

        {/* Input Grid with Icons */}
        <div className="tax-calculator-input-grid">
          {/* Income Input */}
          <div className="input-group">
            <label className="input-label">
              <WalletIcon className={`input-icon ${currentTheme.iconColor}`} />
              <span>Total Annual Income (₹)</span>
            </label>
            <input 
              type="number" 
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="tax-input"
              placeholder="Enter total income"
            />
          </div>

          {/* Age Group */}
          <div className="input-group">
            <label className="input-label">
              <StarIcon className={`input-icon ${currentTheme.iconColor}`} />
              <span>Age Group</span>
            </label>
            <select 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="tax-input"
            >
              <option value="">Select Age Group</option>
              <option value="general">General (Below 60)</option>
              <option value="senior">Senior Citizen (60-80)</option>
              <option value="superSenior">Super Senior (Above 80)</option>
            </select>
          </div>
        </div>

        {/* Deductions Section */}
        <div className="tax-calculator-deductions">
          <div className="input-group">
            <label className="input-label">
              <BanknotesIcon className={`input-icon ${currentTheme.iconColor}`} />
              <span>Section 80C Deductions</span>
            </label>
            <input 
              type="number" 
              value={deductions.section80C}
              onChange={(e) => setDeductions(prev => ({...prev, section80C: e.target.value}))}
              className="tax-input"
              placeholder="PF, ELSS, etc."
            />
          </div>
          <div className="input-group">
            <label className="input-label">
              <CurrencyDollarIcon className={`input-icon ${currentTheme.iconColor}`} />
              <span>Section 80D Health Insurance</span>
            </label>
            <input 
              type="number" 
              value={deductions.section80D}
              onChange={(e) => setDeductions(prev => ({...prev, section80D: e.target.value}))}
              className="tax-input"
              placeholder="Medical insurance premium"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <div className="tax-calculator-button-container">
          <button 
            onClick={calculateTax}
            className={`calculate-button ${currentTheme.buttonClass}`}
          >
            Calculate My Tax
          </button>
        </div>

        {/* Results Display */}
        {taxResults && (
          <div className="tax-results">
            <h2 className="tax-results-title">
              <ChartPieIcon className={`tax-results-icon ${currentTheme.iconColor}`} />
              Tax Breakdown
            </h2>
            <div className="tax-results-grid">
              <div className="tax-result-item">
                <span>Total Income:</span>
                <span className="tax-result-value">₹{taxResults.totalIncome.toLocaleString()}</span>
              </div>
              <div className="tax-result-item">
                <span>Total Deductions:</span>
                <span className="tax-result-value">₹{taxResults.totalDeductions.toLocaleString()}</span>
              </div>
              <div className="tax-result-item">
                <span>Taxable Income:</span>
                <span className="tax-result-value">₹{taxResults.taxableIncome.toLocaleString()}</span>
              </div>
              <div className="tax-result-item">
                <span>Tax Amount:</span>
                <span className="tax-result-value">₹{taxResults.taxAmount.toLocaleString()}</span>
              </div>
              <div className="tax-result-item">
                <span>Final Tax (with Cess):</span>
                <span className="tax-result-value">₹{taxResults.finalTax.toLocaleString()}</span>
              </div>
              <div className="tax-result-item">
                <span>Effective Tax Rate:</span>
                <span className="tax-result-value">{taxResults.effectiveTaxRate}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Informative Tip */}
        <div className="tax-tip">
          <LightBulbIcon className="tax-tip-icon" />
          <p className="tax-tip-text">
            Tip: Maximize your tax-saving investments under Section 80C to reduce your tax liability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator; 