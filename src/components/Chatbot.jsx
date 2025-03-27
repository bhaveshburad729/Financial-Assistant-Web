import React, { useState, useRef, useEffect } from 'react';

// Custom SVG Icons
const RobotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Predefined responses for financial context
const FINANCIAL_RESPONSES = {
  'what is mutual fund': "A mutual fund is an investment vehicle that pools money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. It's managed by professional fund managers and helps spread investment risk.",
  'how to start investing': "To start investing, follow these steps:\n1. Assess your financial goals\n2. Determine your risk tolerance\n3. Create an emergency fund\n4. Open a demat account\n5. Start with low-cost index funds or SIPs\n6. Diversify your investments",
  'what is sip': "SIP (Systematic Investment Plan) is a method of investing a fixed amount regularly in mutual funds. It allows you to invest a predetermined sum at regular intervals, helping you average out market volatility.",
  'what is equity fund': "An equity fund is a mutual fund that invests primarily in stocks. It offers higher potential returns but comes with higher risk. These funds are suitable for long-term investors with a high risk tolerance.",
  'what is debt fund': "A debt fund invests in fixed-income securities like bonds, government securities, and money market instruments. It's generally safer than equity funds but offers lower returns. Suitable for conservative investors.",
  'what is balanced fund': "A balanced fund invests in both equity and debt instruments. It provides a mix of growth and stability, making it suitable for moderate risk-takers looking for balanced returns.",
  'how to choose mutual fund': "To choose a mutual fund:\n1. Check the fund's past performance\n2. Consider the fund manager's track record\n3. Look at the expense ratio\n4. Understand the investment objective\n5. Review the portfolio composition\n6. Check the fund's risk level",
  'what is expense ratio': "The expense ratio is the annual fee charged by mutual funds for managing your money. It's expressed as a percentage of your investment. Lower expense ratios are generally better as they leave more money invested.",
  'what is nav': "NAV (Net Asset Value) is the price per unit of a mutual fund. It's calculated by dividing the total value of the fund's assets minus liabilities by the number of units. NAV changes daily based on market performance.",
  'what is lock in period': "A lock-in period is the minimum time you must stay invested in a fund before you can withdraw your money. It helps in maintaining fund stability and is common in tax-saving funds and some debt funds.",
  'what is risk level': "Risk level indicates how volatile a fund's returns might be:\n1. Low Risk: Stable returns, low volatility\n2. Moderate Risk: Balanced returns, medium volatility\n3. High Risk: Higher potential returns, high volatility",
  'what is portfolio': "A portfolio is a collection of investments (stocks, bonds, mutual funds, etc.) owned by an individual or institution. A well-diversified portfolio helps spread risk and optimize returns.",
  'what is diversification': "Diversification is spreading your investments across different asset classes, sectors, and companies to reduce risk. It's like not putting all your eggs in one basket.",
  'what is market volatility': "Market volatility refers to how much and how quickly the value of investments changes. High volatility means prices change dramatically in a short time, while low volatility means prices are relatively stable.",
  'what is asset allocation': "Asset allocation is the strategy of dividing your investments among different asset classes (stocks, bonds, cash) to balance risk and return based on your goals and risk tolerance.",
  'what is elss': "ELSS (Equity Linked Savings Scheme) is a type of mutual fund that invests primarily in equity and offers tax benefits under Section 80C. It has a mandatory lock-in period of 3 years.",
  'what is index fund': "An index fund is a mutual fund that tracks a specific market index (like Nifty 50). It offers low-cost, passive investment strategy with returns that mirror the index performance.",
  'what is liquid fund': "A liquid fund invests in very short-term debt instruments (up to 91 days). It offers high liquidity, low risk, and stable returns, making it ideal for parking short-term money.",
  'what is systematic withdrawal': "Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount from your mutual fund investment at regular intervals. It's useful for generating regular income from investments.",
  'what is systematic transfer': "Systematic Transfer Plan (STP) enables you to transfer a fixed amount from one mutual fund to another at regular intervals. It helps in gradually shifting investments between funds.",
  'what is dividend option': "In mutual funds, dividend option distributes profits periodically to investors. However, it's better to opt for growth option for long-term wealth creation as dividends are taxable.",
  'what is exit load': "Exit load is a fee charged when you sell mutual fund units before a specified period. It discourages early withdrawals and helps funds maintain stability.",
  'what is folio number': "A folio number is a unique identifier assigned to an investor by a mutual fund company. All your investments in different schemes of the same fund house are tracked under this number.",
  'what is kyc': "KYC (Know Your Customer) is a mandatory process to verify the identity of investors. You need to complete KYC by submitting identity and address proofs before investing in mutual funds.",
  'what is direct plan': "Direct plans are mutual fund schemes where you invest directly with the fund house without involving intermediaries. They have lower expense ratios compared to regular plans.",
  'what is regular plan': "Regular plans are mutual fund schemes where you invest through intermediaries like distributors. They have higher expense ratios due to distributor commissions.",
  'what is growth option': "Growth option in mutual funds reinvests all profits back into the fund instead of distributing them. This leads to compounding of returns and is better for long-term wealth creation.",
  'what is fund manager': "A fund manager is a financial professional who manages the mutual fund's portfolio. They make investment decisions based on the fund's objectives and market conditions.",
  'what is aum': "AUM (Assets Under Management) is the total market value of investments managed by a mutual fund. Higher AUM generally indicates greater investor confidence in the fund.",
  'what is sebi': "SEBI (Securities and Exchange Board of India) is the regulatory body for mutual funds and securities market in India. It protects investor interests and regulates market activities.",
  'what is cagr': "CAGR (Compound Annual Growth Rate) is a measure of the annual return rate of an investment over a period. It helps compare performance of different investments.",
  'default': "I'm your financial assistant! Ask me about mutual funds, investing strategies, or financial planning. I can provide basic guidance to help you make informed decisions. Try asking about:\n- What is a mutual fund?\n- How to start investing?\n- What is SIP?\n- Types of mutual funds\n- Risk management\n- Portfolio diversification\n\nOr try these specific questions:\n- What is ELSS?\n- What is a liquid fund?\n- What is KYC?\n- What is direct vs regular plan?\n- What is exit load?\n- What is SEBI?"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI Financial Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle user message submission
  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { 
      id: messages.length + 1, 
      text: input, 
      sender: 'user' 
    };
    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    const botResponse = { 
      id: messages.length + 2, 
      text: generateResponse(input.toLowerCase()), 
      sender: 'bot' 
    };
    setMessages(prev => [...prev, botResponse]);

    // Clear input
    setInput('');
  };

  // Generate bot response based on input
  const generateResponse = (userInput) => {
    // Convert input to lowercase and remove extra spaces
    userInput = userInput.toLowerCase().trim();

    // First try exact match
    if (FINANCIAL_RESPONSES[userInput]) {
      return FINANCIAL_RESPONSES[userInput];
    }

    // Then try to find partial matches
    for (let key in FINANCIAL_RESPONSES) {
      // Skip the default response when searching
      if (key === 'default') continue;

      // Check if the user's question contains the key phrase
      if (userInput.includes(key) || key.includes(userInput)) {
        return FINANCIAL_RESPONSES[key];
      }

      // Check for similar words (e.g., "mutual funds" vs "mutual fund")
      const userWords = userInput.split(' ');
      const keyWords = key.split(' ');
      const hasCommonWords = keyWords.some(word => 
        userWords.includes(word) && word.length > 3
      );

      if (hasCommonWords) {
        return FINANCIAL_RESPONSES[key];
      }
    }

    // If no match found, check for common financial terms
    const commonTerms = {
      'invest': FINANCIAL_RESPONSES['how to start investing'],
      'mutual': FINANCIAL_RESPONSES['what is mutual fund'],
      'fund': FINANCIAL_RESPONSES['what is mutual fund'],
      'sip': FINANCIAL_RESPONSES['what is sip'],
      'risk': FINANCIAL_RESPONSES['what is risk level'],
      'portfolio': FINANCIAL_RESPONSES['what is portfolio'],
      'equity': FINANCIAL_RESPONSES['what is equity fund'],
      'debt': FINANCIAL_RESPONSES['what is debt fund'],
      'balance': FINANCIAL_RESPONSES['what is balanced fund'],
      'elss': FINANCIAL_RESPONSES['what is elss'],
      'kyc': FINANCIAL_RESPONSES['what is kyc'],
      'sebi': FINANCIAL_RESPONSES['what is sebi'],
      'nav': FINANCIAL_RESPONSES['what is nav']
    };

    for (let term in commonTerms) {
      if (userInput.includes(term)) {
        return commonTerms[term];
      }
    }

    // If still no match found, return default response
    return FINANCIAL_RESPONSES['default'];
  };

  // Render individual message
  const renderMessage = (message) => (
    <div 
      key={message.id} 
      className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
    >
      {message.sender === 'bot' && (
        <div className="bot-icon">
          <RobotIcon />
        </div>
      )}
      <div className={`message-content ${message.sender === 'user' ? 'user' : 'bot'}`}>
        {message.text}
      </div>
    </div>
  );

  // Render chatbot interface
  return (
    <div className="chatbot-container">
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="chatbot-toggle-button"
        >
          <MessageIcon />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Chatbot Header */}
          <div className="chatbot-header">
            <div className="header-content">
              <RobotIcon />
              <h2>Financial Assistant</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="close-button"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages Container */}
          <div className="messages-container">
            {messages.map(renderMessage)}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="input-area">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a financial question..."
              className="chat-input"
            />
            <button 
              onClick={handleSendMessage}
              className="send-button"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 