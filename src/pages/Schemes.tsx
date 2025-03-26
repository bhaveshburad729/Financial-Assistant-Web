import { useState } from 'react';
import { ShieldCheckIcon, CurrencyDollarIcon, BuildingLibraryIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const schemes = [
  {
    name: 'Sukanya Samriddhi Yojana',
    description: 'Government-backed savings scheme for girl child education and marriage expenses.',
    icon: UserGroupIcon,
    interestRate: '8.0%',
    minDeposit: '₹250',
    maxDeposit: '₹1.5 Lakh/year',
    lockIn: '21 years',
    taxBenefit: 'Yes',
  },
  {
    name: 'Public Provident Fund (PPF)',
    description: 'Long-term savings scheme with tax benefits and guaranteed returns.',
    icon: ShieldCheckIcon,
    interestRate: '7.1%',
    minDeposit: '₹500',
    maxDeposit: '₹1.5 Lakh/year',
    lockIn: '15 years',
    taxBenefit: 'Yes',
  },
  {
    name: 'National Savings Certificate (NSC)',
    description: 'Fixed income investment scheme with guaranteed returns.',
    icon: CurrencyDollarIcon,
    interestRate: '6.8%',
    minDeposit: '₹100',
    maxDeposit: 'No limit',
    lockIn: '5 years',
    taxBenefit: 'Yes',
  },
  {
    name: 'Senior Citizens Savings Scheme',
    description: 'High-interest savings scheme exclusively for senior citizens.',
    icon: BuildingLibraryIcon,
    interestRate: '8.2%',
    minDeposit: '₹1,000',
    maxDeposit: '₹15 Lakh',
    lockIn: '5 years',
    taxBenefit: 'Yes',
  },
];

const Schemes = () => {
  const [selectedScheme, setSelectedScheme] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Government Schemes</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore government-backed investment schemes offering attractive returns and tax benefits.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
        {/* Scheme Cards */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Schemes</h3>
          <div className="space-y-6">
            {schemes.map((scheme) => (
              <div
                key={scheme.name}
                className={`rounded-lg border p-6 cursor-pointer transition-all ${
                  selectedScheme === scheme.name
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedScheme(scheme.name)}
              >
                <div className="flex items-center gap-x-4">
                  <scheme.icon className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{scheme.name}</h4>
                    <p className="mt-1 text-sm text-gray-600">{scheme.description}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Interest Rate</span>
                    <p className="text-gray-600">{scheme.interestRate}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Min Deposit</span>
                    <p className="text-gray-600">{scheme.minDeposit}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Max Deposit</span>
                    <p className="text-gray-600">{scheme.maxDeposit}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Lock-in Period</span>
                    <p className="text-gray-600">{scheme.lockIn}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Tax Benefit</span>
                    <p className="text-gray-600">{scheme.taxBenefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scheme Details */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Scheme Details</h3>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            {selectedScheme ? (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {schemes.find(s => s.name === selectedScheme)?.name}
                </h4>
                <div className="prose prose-sm text-gray-600">
                  <p>
                    {schemes.find(s => s.name === selectedScheme)?.description}
                  </p>
                  <h5 className="font-medium text-gray-900 mt-4">Key Features:</h5>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Government-backed security</li>
                    <li>Attractive interest rates</li>
                    <li>Tax benefits under Section 80C</li>
                    <li>Flexible deposit options</li>
                    <li>Guaranteed returns</li>
                  </ul>
                  <h5 className="font-medium text-gray-900 mt-4">Eligibility:</h5>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Indian resident</li>
                    <li>Valid KYC documents</li>
                    <li>Bank account</li>
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">
                Select a scheme to view detailed information about eligibility, features, and benefits.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes; 