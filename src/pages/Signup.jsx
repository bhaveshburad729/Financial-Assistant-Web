import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignupError('');
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock email check
      if (formData.email === 'test@example.com') {
        setSignupError('This email is already registered. Please use a different email or sign in.');
      } else {
        // Store form data temporarily
        sessionStorage.setItem('signupData', JSON.stringify(formData));
        setShowExperienceModal(true);
      }
    } catch (error) {
      setSignupError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setSignupError('');
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
          <p className="auth-subtitle">Join our financial community</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <div className="input-group">
              <UserIcon className="input-icon" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                placeholder="Enter your full name"
                autoComplete="name"
                disabled={isLoading}
              />
            </div>
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <div className="input-group">
              <EnvelopeIcon className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="Enter your email"
                autoComplete="email"
                disabled={isLoading}
              />
            </div>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <LockClosedIcon className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? 'input-error' : ''}`}
                placeholder="Create a password"
                autoComplete="new-password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeSlashIcon className="toggle-icon" />
                ) : (
                  <EyeIcon className="toggle-icon" />
                )}
              </button>
            </div>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-group">
              <LockClosedIcon className="input-icon" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
                placeholder="Confirm your password"
                autoComplete="new-password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isLoading}
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="toggle-icon" />
                ) : (
                  <EyeIcon className="toggle-icon" />
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>

          {signupError && (
            <div className="error-alert">{signupError}</div>
          )}

          <button
            type="submit"
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
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