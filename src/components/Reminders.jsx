import React, { useState } from 'react';
import { Bell, CheckCircle, Plus, Trash2 } from 'lucide-react';

const Reminders = () => {
  const [reminders, setReminders] = useState([
    { id: 1, text: 'Review investment portfolio', completed: false },
    { id: 2, text: 'Check SIP performance', completed: false },
    { id: 3, text: 'Update financial goals', completed: false }
  ]);
  const [newReminder, setNewReminder] = useState('');

  const addReminder = (e) => {
    e.preventDefault();
    if (newReminder.trim()) {
      setReminders([
        ...reminders,
        {
          id: Date.now(),
          text: newReminder.trim(),
          completed: false
        }
      ]);
      setNewReminder('');
    }
  };

  const toggleReminder = (id) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === id
          ? { ...reminder, completed: !reminder.completed }
          : reminder
      )
    );
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="reminders-container">
      <div className="reminders-header">
        <Bell className="reminders-icon" />
        <h2>Financial Reminders</h2>
      </div>

      <form onSubmit={addReminder} className="reminders-form">
        <input
          type="text"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
          placeholder="Add a new reminder..."
          className="reminders-input"
        />
        <button type="submit" className="reminders-add-button">
          <Plus size={20} />
        </button>
      </form>

      <div className="reminders-list">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className={`reminder-item ${reminder.completed ? 'completed' : ''}`}
          >
            <div className="reminder-content">
              <button
                onClick={() => toggleReminder(reminder.id)}
                className="reminder-toggle"
              >
                <CheckCircle
                  className={`reminder-check ${
                    reminder.completed ? 'checked' : ''
                  }`}
                />
              </button>
              <span className="reminder-text">{reminder.text}</span>
            </div>
            <button
              onClick={() => deleteReminder(reminder.id)}
              className="reminder-delete"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminders; 