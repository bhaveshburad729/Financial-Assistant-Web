import { Link } from 'react-router-dom';
import { ChartBarIcon, AcademicCapIcon, CurrencyDollarIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI-Powered Guidance',
    description: 'Get personalized financial advice powered by Google Gemini AI',
    icon: SparklesIcon,
    href: '/learning',
  },
  {
    name: 'Investment Learning',
    description: 'Learn about Mutual Funds, SIPs, Stocks, and Gold Bonds',
    icon: AcademicCapIcon,
    href: '/learning',
  },
  {
    name: 'Funding Options',
    description: 'Explore various funding and investment opportunities',
    icon: CurrencyDollarIcon,
    href: '/funding',
  },
  {
    name: 'Market Analysis',
    description: 'Stay updated with real-time market trends and analysis',
    icon: ChartBarIcon,
    href: '/learning',
  },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Your AI-Powered Financial Assistant
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Get personalized financial guidance, learn about investments, and make informed decisions with our AI-powered platform.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/signup"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get started
                  </Link>
                  <Link to="/learning" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Smart Investing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to make informed investment decisions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From learning the basics to advanced investment strategies, we've got you covered with AI-powered insights and comprehensive resources.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link to={feature.href} className="text-sm font-semibold leading-6 text-blue-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home; 