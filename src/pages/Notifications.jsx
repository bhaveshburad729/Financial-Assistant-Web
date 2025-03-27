import React, { useState } from 'react';

// Sample notification data structure
const initialNotifications = [
  {
    id: 1,
    type: 'investment',
    title: 'Mutual Fund Performance Alert',
    message: 'Your HDFC Equity Fund has shown a 12% growth this quarter.',
    timestamp: '2024-03-25T10:30:00Z',
    status: 'unread',
    category: 'Mutual Funds'
  },
  {
    id: 2,
    type: 'market',
    title: 'Sensex Market Update',
    message: 'Sensex reaches new all-time high of 75,000 points.',
    timestamp: '2024-03-24T15:45:00Z',
    status: 'unread',
    category: 'Market News'
  },
  {
    id: 3,
    type: 'tax',
    title: 'Tax Saving Opportunity',
    message: 'You can still invest in ELSS funds to save tax under Section 80C.',
    timestamp: '2024-03-23T09:15:00Z',
    status: 'read',
    category: 'Tax Planning'
  },
  {
    id: 4,
    type: 'investment',
    title: 'SIP Performance Update',
    message: 'Your monthly SIP in Axis Bluechip Fund is due on 28th March.',
    timestamp: '2024-03-22T14:20:00Z',
    status: 'unread',
    category: 'Systematic Investment Plan'
  }
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and search notifications
  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || notification.type === filter;
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, status: 'read' } 
          : notification
      )
    );
  };

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };

  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    const iconMap = {
      'investment': '📈',
      'market': '📊',
      'tax': '💰',
      'default': '🔔'
    };
    return iconMap[type] || iconMap['default'];
  };

  // Format timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="notifications-container">
      <div className="notifications-card">
        {/* Header */}
        <div className="notifications-header">
          <h1 className="notifications-title">
            Notifications Dashboard
          </h1>
          <div className="notifications-count">
            <span className="count-text">
              Unread: {notifications.filter(n => n.status === 'unread').length}
            </span>
            <span className="count-badge">
              {notifications.filter(n => n.status === 'unread').length}
            </span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="notifications-filters">
          {/* Category Filter */}
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Notifications</option>
            <option value="investment">Investment</option>
            <option value="market">Market</option>
            <option value="tax">Tax</option>
          </select>

          {/* Search Input */}
          <input 
            type="text"
            placeholder="Search notifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Notifications List */}
        {filteredNotifications.length === 0 ? (
          <div className="no-notifications">
            <p className="no-notifications-text">No notifications found</p>
          </div>
        ) : (
          <div className="notifications-list">
            {filteredNotifications.map(notification => (
              <div 
                key={notification.id}
                className={`notification-item ${notification.status === 'unread' ? 'unread' : ''}`}
              >
                {/* Notification Icon */}
                <span className="notification-icon">
                  {getNotificationIcon(notification.type)}
                </span>

                {/* Notification Content */}
                <div className="notification-content">
                  <div className="notification-header">
                    <h3 className="notification-title">
                      {notification.title}
                    </h3>
                    <span className="notification-time">
                      {formatTimestamp(notification.timestamp)}
                    </span>
                  </div>
                  <p className="notification-message">
                    {notification.message}
                  </p>
                  <div className="notification-category">
                    Category: {notification.category}
                  </div>

                  {/* Action Buttons */}
                  <div className="notification-actions">
                    {notification.status === 'unread' && (
                      <button 
                        onClick={() => markAsRead(notification.id)}
                        className="action-button mark-read"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button 
                      onClick={() => deleteNotification(notification.id)}
                      className="action-button delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Information Banner */}
        <div className="info-banner">
          <span className="info-icon">ℹ️</span>
          <p className="info-text">
            Stay updated with real-time investment and market notifications
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage; 