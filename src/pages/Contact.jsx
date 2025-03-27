import React, { useState, useRef } from 'react';
import { EnvelopeIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const form = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* SVG Illustration Section */}
        <div className="contact-illustration">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 500 400" 
            className="contact-svg"
          >
            {/* Background */}
            <rect width="500" height="400" fill="#e6f2ff" />
            
            {/* Communication Elements */}
            <path 
              d="M100 200 Q250 150 400 200" 
              fill="none" 
              stroke="#3B82F6" 
              strokeWidth="4" 
              strokeDasharray="10 5"
            />
            
            {/* Message Bubbles */}
            <circle cx="150" cy="150" r="40" fill="#60A5FA" fillOpacity="0.5" />
            <circle cx="350" cy="150" r="40" fill="#60A5FA" fillOpacity="0.5" />
            
            {/* Network Connections */}
            <path 
              d="M250 250 L200 300 L300 300 Z" 
              fill="#93C5FD" 
              opacity="0.7"
            />
            
            {/* Contact Icons */}
            <g transform="translate(220, 300) scale(2)">
              <path 
                d="M10 0 L0 10 L10 20" 
                fill="none" 
                stroke="#2563EB" 
                strokeWidth="2"
              />
              <path 
                d="M20 0 L30 10 L20 20" 
                fill="none" 
                stroke="#2563EB" 
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        
        {/* Contact Form Section */}
        <div className="contact-form-section">
          <h2 className="contact-title">Contact Us</h2>
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <div className="input-group">
                <div className="input-icon">
                  <UserIcon className="icon" />
                </div>
                <input 
                  type="text" 
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="input-group">
                <div className="input-icon">
                  <EnvelopeIcon className="icon" />
                </div>
                <input 
                  type="email" 
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            {/* Phone Input */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <div className="input-group">
                <div className="input-icon">
                  <PhoneIcon className="icon" />
                </div>
                <input 
                  type="tel" 
                  id="phone"
                  name="user_phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number" 
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} 
                placeholder="Describe your issue or inquiry" 
                className="form-input"
                required
              />
            </div>
            
            {/* Status Messages */}
            {status.error && (
              <div className="status-message error">
                {status.error}
              </div>
            )}
            {status.success && (
              <div className="status-message success">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="submit-button"
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 