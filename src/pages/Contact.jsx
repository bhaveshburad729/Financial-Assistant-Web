import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  UserIcon, 
  PhoneIcon,
  ChatBubbleLeftIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import contactIllustration from '../assets/svg/contact-illustration.svg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              Have questions about financial planning? We're here to help.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MapPinIcon className="contact-icon" />
                <div>
                  <h3 className="contact-item-title">Visit Us</h3>
                  <p className="contact-item-text">
                    123 Financial District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <div>
                  <h3 className="contact-item-title">Call Us</h3>
                  <p className="contact-item-text">
                    +91 123 456 7890<br />
                    +91 987 654 3210
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <EnvelopeIcon className="contact-icon" />
                <div>
                  <h3 className="contact-item-title">Email Us</h3>
                  <p className="contact-item-text">
                    support@financialassistant.com<br />
                    info@financialassistant.com
                  </p>
                </div>
              </div>
              
              <div className="contact-item">
                <ClockIcon className="contact-icon" />
                <div>
                  <h3 className="contact-item-title">Business Hours</h3>
                  <p className="contact-item-text">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <ChatBubbleLeftIcon className="form-icon" />
              <h2 className="form-title">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <UserIcon className="form-input-icon" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <EnvelopeIcon className="form-input-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  <PhoneIcon className="form-input-icon" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Illustration */}
        <div className="contact-illustration">
          <img 
            src={contactIllustration} 
            alt="Contact Us" 
            className="illustration-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 