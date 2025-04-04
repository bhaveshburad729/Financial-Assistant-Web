import React, { useState, useEffect } from 'react';
import '../styles/goal-planner.css';
import { Sun, Moon, Target, Home, Settings, TrendingUp, Edit, Plus, Info } from 'lucide-react';

const FinancialGoalPlanner = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Buy a Car',
      targetAmount: 2500000,
      currentAmount: 500000,
      targetDate: '2028-03-15',
      monthlyContribution: 33333,
      category: 'purchase',
      description: 'Save for a new car purchase',
      priority: 'high',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Emergency Fund',
      targetAmount: 1500000,
      currentAmount: 750000,
      targetDate: '2026-06-30',
      monthlyContribution: 62500,
      category: 'savings',
      description: 'Build emergency fund for 6 months expenses',
      priority: 'high',
      status: 'in-progress'
    }
  ]);
  
  const [showNewGoalModal, setShowNewGoalModal] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    targetAmount: '',
    currentAmount: '',
    targetDate: '',
    category: 'savings',
    description: '',
    priority: 'medium'
  });

  const [editingGoal, setEditingGoal] = useState(null);
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [addFundsAmount, setAddFundsAmount] = useState('');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const calculateProgress = (current, target) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  const getProgressColor = (progress) => {
    if (progress < 30) return 'progress-red';
    if (progress < 70) return 'progress-yellow';
    return 'progress-green';
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0 
    }).format(amount);
  };

  const handleCreateGoal = () => {
    if (!newGoal.title || !newGoal.targetAmount || !newGoal.targetDate) {
      alert('Please fill in all required fields');
      return;
    }

    const goal = {
      id: goals.length + 1,
      title: newGoal.title,
      targetAmount: parseFloat(newGoal.targetAmount),
      currentAmount: parseFloat(newGoal.currentAmount) || 0,
      targetDate: newGoal.targetDate,
      monthlyContribution: Math.ceil((parseFloat(newGoal.targetAmount) - (parseFloat(newGoal.currentAmount) || 0)) / 
        (Math.ceil((new Date(newGoal.targetDate) - new Date()) / (1000 * 60 * 60 * 24 * 30)))),
      category: newGoal.category,
      description: newGoal.description,
      priority: newGoal.priority,
      status: 'in-progress'
    };

    setGoals([...goals, goal]);
    setShowNewGoalModal(false);
    setActiveTab('goals');
    setNewGoal({
      title: '',
      targetAmount: '',
      currentAmount: '',
      targetDate: '',
      category: 'savings',
      description: '',
      priority: 'medium'
    });
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
    setNewGoal({
      title: goal.title,
      targetAmount: goal.targetAmount,
      currentAmount: goal.currentAmount,
      targetDate: goal.targetDate,
      category: goal.category,
      description: goal.description,
      priority: goal.priority
    });
    setShowNewGoalModal(true);
  };

  const handleUpdateGoal = () => {
    if (!newGoal.title || !newGoal.targetAmount || !newGoal.targetDate) {
      alert('Please fill in all required fields');
      return;
    }

    const updatedGoal = {
      ...editingGoal,
      title: newGoal.title,
      targetAmount: parseFloat(newGoal.targetAmount),
      currentAmount: parseFloat(newGoal.currentAmount) || 0,
      targetDate: newGoal.targetDate,
      monthlyContribution: Math.ceil((parseFloat(newGoal.targetAmount) - (parseFloat(newGoal.currentAmount) || 0)) / 
        (Math.ceil((new Date(newGoal.targetDate) - new Date()) / (1000 * 60 * 60 * 24 * 30)))),
      category: newGoal.category,
      description: newGoal.description,
      priority: newGoal.priority
    };

    setGoals(goals.map(goal => goal.id === editingGoal.id ? updatedGoal : goal));
    setShowNewGoalModal(false);
    setEditingGoal(null);
    setNewGoal({
      title: '',
      targetAmount: '',
      currentAmount: '',
      targetDate: '',
      category: 'savings',
      description: '',
      priority: 'medium'
    });
  };

  const handleAddFunds = (goal) => {
    setSelectedGoal(goal);
    setAddFundsAmount('');
    setShowAddFundsModal(true);
  };

  const handleSubmitAddFunds = () => {
    if (!addFundsAmount || isNaN(addFundsAmount) || parseFloat(addFundsAmount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const updatedGoal = {
      ...selectedGoal,
      currentAmount: selectedGoal.currentAmount + parseFloat(addFundsAmount)
    };

    setGoals(goals.map(goal => goal.id === selectedGoal.id ? updatedGoal : goal));
    setShowAddFundsModal(false);
    setSelectedGoal(null);
    setAddFundsAmount('');
  };

  const handleShowDetails = (goal) => {
    setSelectedGoal(goal);
    setShowDetailsModal(true);
  };

  return (
    <div className="goal-planner-container">
      {/* Sidebar */}
      <div className="goal-planner-sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Goal Planner</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Home className="nav-icon" />
            <span>Dashboard</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'goals' ? 'active' : ''}`}
            onClick={() => setActiveTab('goals')}
          >
            <Target className="nav-icon" />
            <span>Goals</span>
          </button>
          <button 
            className={`nav-item ${activeTab === 'investments' ? 'active' : ''}`}
            onClick={() => setActiveTab('investments')}
          >
            <TrendingUp className="nav-icon" />
            <span>Investments</span>
          </button>

        </nav>
      </div>

      {/* Main Content */}
      <div className="goal-planner-main">
        <header className="goal-planner-header">
          <div className="header-content">
            <h1 className="header-title">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'goals' && 'My Goals'}
              {activeTab === 'investments' && 'Investment Strategy'}
              {activeTab === 'settings' && 'Settings'}
            </h1>
            {activeTab === 'goals' && (
              <button 
                className="create-goal-button"
                onClick={() => setShowNewGoalModal(true)}
              >
                <span>Create New Goal</span>
              </button>
            )}
          </div>
        </header>

        {/* Content Area */}
        <main className="goal-planner-content">
          {activeTab === 'dashboard' && (
            <div>
              {/* Summary Cards */}
              <div className="summary-grid">
                <div className="summary-card">
                  <div className="card-header">
                    <h3 className="card-title">Total Savings Goal</h3>
                    <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="card-content">
                    <p className="card-value">{formatCurrency(40000)}</p>
                    <p className="card-subtitle">Across all goals</p>
                  </div>
                </div>

                <div className="summary-card">
                  <div className="card-header">
                    <h3 className="card-title">Current Savings</h3>
                    <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div className="card-content">
                    <p className="card-value">{formatCurrency(12500)}</p>
                    <p className="card-subtitle">31% of target</p>
                  </div>
                </div>

                <div className="summary-card">
                  <div className="card-header">
                    <h3 className="card-title">Monthly Contribution</h3>
                    <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="card-content">
                    <p className="card-value">{formatCurrency(958)}</p>
                    <p className="card-subtitle">Required savings rate</p>
                  </div>
                </div>
              </div>

              {/* Goals Overview */}
              <div className="goals-overview">
                <h2 className="section-title">Goals Overview</h2>
                <div className="goals-list">
                  {goals.map(goal => (
                    <div key={goal.id} className="goal-item">
                      <div className="goal-header">
                        <div>
                          <h3 className="goal-title">{goal.title}</h3>
                          <p className="goal-subtitle">Target: {formatCurrency(goal.targetAmount)} by {new Date(goal.targetDate).toLocaleDateString()}</p>
                        </div>
                        <span className="goal-amount">{formatCurrency(goal.currentAmount)} saved</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className={`progress-fill ${getProgressColor(calculateProgress(goal.currentAmount, goal.targetAmount))}`} 
                          style={{ width: `${calculateProgress(goal.currentAmount, goal.targetAmount)}%` }}
                        ></div>
                      </div>
                      <div className="goal-footer">
                        <span className="progress-text">{calculateProgress(goal.currentAmount, goal.targetAmount)}% complete</span>
                        <span className="contribution-text">{formatCurrency(goal.monthlyContribution)}/month</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'goals' && (
            <div className="goals-grid">
              {goals.length === 0 ? (
                <div className="no-goals-message">
                  <p>No goals created yet. Click "Create New Goal" to get started!</p>
                </div>
              ) : (
                goals.map(goal => (
                  <div key={goal.id} className="goal-card">
                    <div className="goal-card-header">
                      <h3 className="goal-card-title">{goal.title}</h3>
                      <span className={`goal-category ${goal.category}`}>
                        {goal.category === 'savings' ? 'Savings' : 'Purchase'}
                      </span>
                    </div>
                    
                    <div className="goal-progress">
                      <div className="progress-header">
                        <span className="progress-label">Progress</span>
                        <span className="progress-value">{calculateProgress(goal.currentAmount, goal.targetAmount)}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className={`progress-fill ${getProgressColor(calculateProgress(goal.currentAmount, goal.targetAmount))}`} 
                          style={{ width: `${calculateProgress(goal.currentAmount, goal.targetAmount)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="goal-details">
                      <div className="detail-item">
                        <h4 className="detail-label">Current Savings</h4>
                        <p className="detail-value">{formatCurrency(goal.currentAmount)}</p>
                      </div>
                      <div className="detail-item">
                        <h4 className="detail-label">Target Amount</h4>
                        <p className="detail-value">{formatCurrency(goal.targetAmount)}</p>
                      </div>
                      <div className="detail-item">
                        <h4 className="detail-label">Monthly Contribution</h4>
                        <p className="detail-value">{formatCurrency(goal.monthlyContribution)}</p>
                      </div>
                      <div className="detail-item">
                        <h4 className="detail-label">Target Date</h4>
                        <p className="detail-value">{new Date(goal.targetDate).toLocaleDateString()}</p>
                      </div>
                      <div className="detail-item">
                        <h4 className="detail-label">Priority</h4>
                        <p className="detail-value">{goal.priority}</p>
                      </div>
                      <div className="detail-item">
                        <h4 className="detail-label">Description</h4>
                        <p className="detail-value">{goal.description}</p>
                      </div>
                    </div>
                    
                    <div className="goal-actions">
                      <button 
                        className="action-button edit"
                        onClick={() => handleEditGoal(goal)}
                      >
                        <Edit size={16} />
                        <span>Edit</span>
                      </button>
                      <button 
                        className="action-button add-funds"
                        onClick={() => handleAddFunds(goal)}
                      >
                        <Plus size={16} />
                        <span>Add Funds</span>
                      </button>
                      <button 
                        className="action-button details"
                        onClick={() => handleShowDetails(goal)}
                      >
                        <Info size={16} />
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'investments' && (
            <div>
              <div className="investment-strategy">
                <h2 className="section-title">Recommended Investment Strategy</h2>
                
                <div className="strategy-grid">
                  <div className="strategy-card">
                    <h3 className="strategy-title">Short-term Goals (1-3 years)</h3>
                    <ul className="strategy-list">
                      <li className="strategy-item">
                        <span className="strategy-bullet blue"></span>
                        <span>High-yield savings accounts (60%)</span>
                      </li>
                      <li className="strategy-item">
                        <span className="strategy-bullet green"></span>
                        <span>Certificates of deposit (30%)</span>
                      </li>
                      <li className="strategy-item">
                        <span className="strategy-bullet purple"></span>
                        <span>Short-term bond funds (10%)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="strategy-card">
                    <h3 className="strategy-title">Mid-term Goals (3-7 years)</h3>
                    <ul className="strategy-list">
                      <li className="strategy-item">
                        <span className="strategy-bullet blue"></span>
                        <span>Bond funds (40%)</span>
                      </li>
                      <li className="strategy-item">
                        <span className="strategy-bullet green"></span>
                        <span>Index funds (40%)</span>
                      </li>
                      <li className="strategy-item">
                        <span className="strategy-bullet purple"></span>
                        <span>Blue-chip stocks (20%)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="strategy-card">
                    <h3 className="strategy-title">Long-term Goals (7+ years)</h3>
                    <ul className="strategy-list">
                      <li className="strategy-item">
                        <span className="strategy-bullet blue"></span>
                        <span>Index funds (50%)</span>
                      </li>
                      <li className="strategy-item">
                        <span className="strategy-bullet green"></span>
                        <span>Growth stocks (30%)</span>
                      </li>
                      <li className="strategy-item">
                        <span className="strategy-bullet purple"></span>
                        <span>International stocks (20%)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="recommendations">
                <h2 className="section-title">Personalized Recommendations</h2>
                
                <div className="recommendation-list">
                  <div className="recommendation-item blue">
                    <h3 className="recommendation-title">For your car purchase goal</h3>
                    <p className="recommendation-text">Based on your 5-year timeline, we recommend a balanced approach with 60% in index funds and 40% in bond funds to minimize risk as you approach your target date.</p>
                  </div>
                  
                  <div className="recommendation-item green">
                    <h3 className="recommendation-title">For your emergency fund goal</h3>
                    <p className="recommendation-text">Since this is a short-term need for immediate access, keep these funds in a high-yield savings account for liquidity and safety.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      
      {/* Dark mode toggle button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      {/* New Goal Modal */}
      {showNewGoalModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Create New Financial Goal</h2>
              <button 
                className="modal-close"
                onClick={() => setShowNewGoalModal(false)}
              >
                ×
              </button>
            </div>
            
            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); handleCreateGoal(); }}>
              <div className="form-group">
                <label className="form-label">Goal Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g., Buy a House, Vacation Fund"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Goal Category</label>
                <select 
                  className="form-input"
                  value={newGoal.category}
                  onChange={(e) => setNewGoal({...newGoal, category: e.target.value})}
                >
                  <option value="savings">Savings</option>
                  <option value="purchase">Purchase</option>
                  <option value="debt">Debt Repayment</option>
                  <option value="retirement">Retirement</option>
                  <option value="education">Education</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Priority</label>
                <select 
                  className="form-input"
                  value={newGoal.priority}
                  onChange={(e) => setNewGoal({...newGoal, priority: e.target.value})}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea 
                  className="form-input"
                  placeholder="Describe your goal..."
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                />
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Target Amount (₹)</label>
                  <input 
                    type="number" 
                    className="form-input"
                    placeholder="1000000"
                    value={newGoal.targetAmount}
                    onChange={(e) => setNewGoal({...newGoal, targetAmount: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Current Savings (₹)</label>
                  <input 
                    type="number" 
                    className="form-input"
                    placeholder="0"
                    value={newGoal.currentAmount}
                    onChange={(e) => setNewGoal({...newGoal, currentAmount: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Target Date</label>
                <input 
                  type="date" 
                  className="form-input"
                  value={newGoal.targetDate}
                  onChange={(e) => setNewGoal({...newGoal, targetDate: e.target.value})}
                  required
                />
              </div>
              
              <div className="modal-actions">
                <button 
                  type="button"
                  className="modal-button cancel"
                  onClick={() => setShowNewGoalModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="modal-button create"
                >
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Funds Modal */}
      {showAddFundsModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Add Funds to {selectedGoal?.title}</h2>
              <button 
                className="modal-close"
                onClick={() => setShowAddFundsModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-form">
              <div className="form-group">
                <label className="form-label">Amount to Add (₹)</label>
                <input 
                  type="number" 
                  className="form-input"
                  placeholder="Enter amount"
                  value={addFundsAmount}
                  onChange={(e) => setAddFundsAmount(e.target.value)}
                  min="1"
                  required
                />
              </div>
              
              <div className="modal-actions">
                <button 
                  className="modal-button cancel"
                  onClick={() => setShowAddFundsModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="modal-button create"
                  onClick={handleSubmitAddFunds}
                >
                  Add Funds
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Goal Details: {selectedGoal?.title}</h2>
              <button 
                className="modal-close"
                onClick={() => setShowDetailsModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="modal-form">
              <div className="goal-details">
                <div className="detail-item">
                  <h4 className="detail-label">Category</h4>
                  <p className="detail-value">{selectedGoal?.category}</p>
                </div>
                <div className="detail-item">
                  <h4 className="detail-label">Priority</h4>
                  <p className="detail-value">{selectedGoal?.priority}</p>
                </div>
                <div className="detail-item">
                  <h4 className="detail-label">Description</h4>
                  <p className="detail-value">{selectedGoal?.description}</p>
                </div>
                <div className="detail-item">
                  <h4 className="detail-label">Current Progress</h4>
                  <p className="detail-value">
                    {formatCurrency(selectedGoal?.currentAmount)} of {formatCurrency(selectedGoal?.targetAmount)}
                    ({calculateProgress(selectedGoal?.currentAmount, selectedGoal?.targetAmount)}%)
                  </p>
                </div>
                <div className="detail-item">
                  <h4 className="detail-label">Monthly Contribution</h4>
                  <p className="detail-value">{formatCurrency(selectedGoal?.monthlyContribution)}</p>
                </div>
                <div className="detail-item">
                  <h4 className="detail-label">Target Date</h4>
                  <p className="detail-value">{new Date(selectedGoal?.targetDate).toLocaleDateString()}</p>
                </div>
                <div className="detail-item">
                  <h4 className="detail-label">Time Remaining</h4>
                  <p className="detail-value">
                    {Math.ceil((new Date(selectedGoal?.targetDate) - new Date()) / (1000 * 60 * 60 * 24))} days
                  </p>
                </div>
              </div>
              
              <div className="modal-actions">
                <button 
                  className="modal-button cancel"
                  onClick={() => setShowDetailsModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialGoalPlanner; 