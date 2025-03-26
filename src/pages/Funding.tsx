import { useState } from 'react';
import { ArrowTrendingUpIcon, BanknotesIcon, BuildingOfficeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const fundingOptions = [
  {
    name: 'Mutual Funds',
    description: 'Invest in professionally managed portfolios of stocks, bonds, and other securities.',
    icon: ChartBarIcon,
    risk: 'Medium',
    minInvestment: '₹500',
    returns: '8-12%',
  },
  {
    name: 'Fixed Deposits',
    description: 'Secure investment with guaranteed returns from banks and financial institutions.',
    icon: BanknotesIcon,
    risk: 'Low',
    minInvestment: '₹1,000',
    returns: '5-7%',
  },
  {
    name: 'Real Estate',
    description: 'Invest in property for long-term capital appreciation and rental income.',
    icon: BuildingOfficeIcon,
    risk: 'High',
    minInvestment: '₹10,00,000',
    returns: '10-15%',
  },
  {
    name: 'Stock Market',
    description: 'Direct investment in company stocks for potential high returns.',
    icon: ArrowTrendingUpIcon,
    risk: 'High',
    minInvestment: '₹100',
    returns: '12-20%',
  },
];

const Funding = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Investment Opportunities</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore various funding options and investment opportunities tailored to your financial goals and risk appetite.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
        {/* Investment Options */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Options</h3>
          <div className="space-y-6">
            {fundingOptions.map((option) => (
              <div
                key={option.name}
                className={`rounded-lg border p-6 cursor-pointer transition-all ${
                  selectedOption === option.name
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedOption(option.name)}
              >
                <div className="flex items-center gap-x-4">
                  <option.icon className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{option.name}</h4>
                    <p className="mt-1 text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Risk Level</span>
                    <p className="text-gray-600">{option.risk}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Min Investment</span>
                    <p className="text-gray-600">{option.minInvestment}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Expected Returns</span>
                    <p className="text-gray-600">{option.returns}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Calculator */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Investment Calculator</h3>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <p className="text-gray-600 mb-6">
              Calculate potential returns on your investment based on your selected option.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Investment Amount
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                  Investment Duration (Years)
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="duration"
                    id="duration"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter duration"
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Calculate Returns
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding; 