import { useState } from 'react';
import { ChatBubbleLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const topics = [
  {
    title: 'Mutual Funds',
    description: 'Learn about different types of mutual funds, their benefits, and how to invest in them.',
    level: 'Beginner',
  },
  {
    title: 'Systematic Investment Plans (SIPs)',
    description: 'Understand how SIPs work and why they are a great way to start investing.',
    level: 'Beginner',
  },
  {
    title: 'Stock Market',
    description: 'Get insights into stock market basics, analysis techniques, and trading strategies.',
    level: 'Intermediate',
  },
  {
    title: 'Gold Bonds',
    description: 'Explore government-backed gold bonds and their advantages over physical gold.',
    level: 'Beginner',
  },
];

const Learning = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatMessages(prev => [...prev, { text: message, isUser: true }]);
    setMessage('');

    // TODO: Integrate with Google Gemini API
    // For now, just add a mock response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        text: "I'm your AI financial assistant. I can help you learn about investments and provide personalized guidance. What would you like to know?",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Learning Center</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore our comprehensive learning resources and get personalized guidance from our AI assistant.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
        {/* Educational Content */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Investment Topics</h3>
          <div className="space-y-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-lg border border-gray-200 p-6 hover:border-blue-500 transition-colors"
              >
                <h4 className="text-lg font-semibold text-gray-900">{topic.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{topic.description}</p>
                <span className="mt-4 inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                  {topic.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chatbot */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">AI Financial Assistant</h3>
          <div className="flex-1 rounded-lg border border-gray-200 bg-white p-6">
            <div className="h-[400px] overflow-y-auto space-y-4 mb-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      msg.isUser
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex gap-x-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about investments..."
                className="flex-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning; 