import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [showExperienceModal, setShowExperienceModal] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignupError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Here you would typically make an API call to your backend
      // For demo purposes, we'll simulate a successful signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user data in localStorage or your preferred state management solution
      localStorage.setItem('user', JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      }));

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      setSignupError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExperienceSelect = async (level) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get stored signup data
      const signupData = JSON.parse(sessionStorage.getItem('signupData'));
      
      // Mock successful signup
      const userData = {
        name: signupData.name,
        email: signupData.email,
        experienceLevel: level,
        token: 'mock-token'
      };
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Clear signup data
      sessionStorage.removeItem('signupData');
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      setSignupError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join us to manage your finances</p>
        </div>

        {signupError && (
          <div className="auth-error">
            {signupError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">
              <UserIcon className="form-icon" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              <EnvelopeIcon className="form-icon" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              <PhoneIcon className="form-icon" />
              <span>Phone Number</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              <LockClosedIcon className="form-icon" />
              <span>Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Create a password"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              <LockClosedIcon className="form-icon" />
              <span>Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Experience Level Modal */}
      {showExperienceModal && (
        <div className="modal-overlay">
          <div className="modal-content experience-modal">
            <h2 className="modal-title">Select Your Experience Level</h2>
            <p className="modal-description">
              This helps us personalize your experience and provide relevant content.
            </p>
            <div className="experience-options">
              <button
                className="experience-button"
                onClick={() => handleExperienceSelect('beginner')}
                disabled={isLoading}
              >
                <span className="experience-icon">🌱</span>
                <span className="experience-label">Beginner</span>
                <span className="experience-description">
                  New to financial management
                </span>
              </button>
              <button
                className="experience-button"
                onClick={() => handleExperienceSelect('intermediate')}
                disabled={isLoading}
              >
                <span className="experience-icon">🌿</span>
                <span className="experience-label">Intermediate</span>
                <span className="experience-description">
                  Some experience with finances
                </span>
              </button>
              <button
                className="experience-button"
                onClick={() => handleExperienceSelect('professional')}
                disabled={isLoading}
              >
                <span className="experience-icon">🌳</span>
                <span className="experience-label">Professional</span>
                <span className="experience-description">
                  Advanced financial knowledge
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup; 