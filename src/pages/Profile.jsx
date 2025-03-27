import React, { useState } from 'react';
import { 
  UserIcon, 
  CreditCardIcon, 
  Cog6ToothIcon, 
  ArrowLeftOnRectangleIcon, 
  PencilIcon, 
  ArrowUpTrayIcon, 
  TrophyIcon, 
  ChartPieIcon 
} from '@heroicons/react/24/outline';

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    experience: "Intermediate",
    totalInvestments: 250000,
    riskTolerance: "Moderate",
    profileCompletion: 75,
    financialGoals: [
      { id: 1, title: "Retirement Corpus", targetAmount: 5000000, currentProgress: 1500000 },
      { id: 2, title: "Child's Education", targetAmount: 2000000, currentProgress: 500000 },
      { id: 3, title: "Home Purchase", targetAmount: 3500000, currentProgress: 750000 }
    ]
  });

  const calculateProgressPercentage = (current, target) => {
    return Math.round((current / target) * 100);
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-grid">
          {/* Profile Overview */}
          <div className="profile-overview">
            <div className="profile-image-container">
              <img 
                src="/api/placeholder/200/200" 
                alt="Profile" 
                className="profile-image"
              />
              <button className="edit-profile-button">
                <PencilIcon className="edit-icon" />
              </button>
            </div>
            <h2 className="profile-name">{userProfile.name}</h2>
            <p className="profile-email">{userProfile.email}</p>
            <div className="profile-experience">
              <span className="experience-badge">
                {userProfile.experience} Investor
              </span>
            </div>
          </div>

          {/* Profile Details */}
          <div className="profile-details">
            <h3 className="section-title">Financial Profile</h3>
            
            <div className="profile-stats-grid">
              <div className="stat-card">
                <div className="stat-header">
                  <CreditCardIcon className="stat-icon" />
                  <h4 className="stat-title">Total Investments</h4>
                </div>
                <p className="stat-value">₹{userProfile.totalInvestments.toLocaleString()}</p>
              </div>
              
              <div className="stat-card">
                <div className="stat-header">
                  <ChartPieIcon className="stat-icon" />
                  <h4 className="stat-title">Risk Tolerance</h4>
                </div>
                <p className="stat-value">{userProfile.riskTolerance}</p>
              </div>
            </div>

            {/* Financial Goals */}
            <div className="goals-section">
              <h3 className="section-title">Financial Goals</h3>
              {userProfile.financialGoals.map(goal => (
                <div key={goal.id} className="goal-card">
                  <div className="goal-header">
                    <span className="goal-title">{goal.title}</span>
                    <span className="goal-amount">
                      ₹{goal.currentProgress.toLocaleString()} / ₹{goal.targetAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{
                        width: `${calculateProgressPercentage(goal.currentProgress, goal.targetAmount)}%`
                      }}
                    ></div>
                  </div>
                  <div className="progress-text">
                    <span>
                      {calculateProgressPercentage(goal.currentProgress, goal.targetAmount)}% Complete
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="action-button">
            <Cog6ToothIcon className="action-icon settings" />
            <span>Account Settings</span>
          </button>
          <button className="action-button">
            <ArrowUpTrayIcon className="action-icon upload" />
            <span>Upload Documents</span>
          </button>
          <button className="action-button">
            <TrophyIcon className="action-icon trophy" />
            <span>Achievements</span>
          </button>
          <button className="action-button">
            <ArrowLeftOnRectangleIcon className="action-icon logout" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 