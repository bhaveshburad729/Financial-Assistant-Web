import React, { useState, useRef, useEffect } from 'react';
import { 
  UserIcon, 
  PencilIcon, 
  UserCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import '../styles/Profile.css';

const STORAGE_KEY = 'userProfileData';

const defaultProfileData = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 98765 43210',
  address: '123 Main Street, City, Country',
  occupation: 'Software Engineer',
  investmentExperience: 'Intermediate',
  investmentGoals: 'Long-term wealth creation',
  riskTolerance: 'Moderate',
  profileImage: null,
  totalInvestments: 250000
};

const Profile = () => {
  const [profileData, setProfileData] = useState(() => {
    // Try to load saved profile data from localStorage
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : defaultProfileData;
  });

  const [previewImage, setPreviewImage] = useState(() => {
    // Try to load saved profile image from localStorage
    const savedImage = localStorage.getItem(`${STORAGE_KEY}_image`);
    return savedImage || null;
  });

  const [saveStatus, setSaveStatus] = useState({ success: false, message: '' });
  const fileInputRef = useRef(null);

  // Save profile data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData));
    // Trigger storage event for other components
    window.dispatchEvent(new Event('storage'));
  }, [profileData]);

  // Save profile image to localStorage whenever it changes
  useEffect(() => {
    if (previewImage) {
      localStorage.setItem(`${STORAGE_KEY}_image`, previewImage);
    } else {
      localStorage.removeItem(`${STORAGE_KEY}_image`);
    }
    // Trigger storage event for other components
    window.dispatchEvent(new Event('storage'));
  }, [previewImage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
    setSaveStatus({ success: false, message: '' });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData(prev => ({
        ...prev,
        profileImage: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSaveStatus({ success: false, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaveStatus({ success: false, message: 'Saving changes...' });

    try {
      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData));
      if (previewImage) {
        localStorage.setItem(`${STORAGE_KEY}_image`, previewImage);
      }

      // Trigger storage event for other components
      window.dispatchEvent(new Event('storage'));

      // Update the profile data in the parent components or global state if needed
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSaveStatus({
        success: true,
        message: 'Profile updated successfully!'
      });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSaveStatus({ success: false, message: '' });
      }, 3000);

    } catch (error) {
      setSaveStatus({
        success: false,
        message: 'Failed to save changes. Please try again.'
      });
    }
  };

  // Function to reset profile to default values
  const handleResetProfile = () => {
    if (window.confirm('Are you sure you want to reset your profile to default values?')) {
      setProfileData(defaultProfileData);
      setPreviewImage(null);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(`${STORAGE_KEY}_image`);
      // Trigger storage event for other components
      window.dispatchEvent(new Event('storage'));
      setSaveStatus({
        success: true,
        message: 'Profile reset to default values!'
      });
      setTimeout(() => {
        setSaveStatus({ success: false, message: '' });
      }, 3000);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Settings</h1>
        <p>Manage your personal information and preferences</p>
      </div>

      <div className="profile-content">
        <div className="profile-grid">
          {/* Profile Overview */}
          <div className="profile-overview">
            <div className="profile-image-container">
              {previewImage ? (
                <img src={previewImage} alt="Profile" className="profile-image" />
              ) : (
                <UserCircleIcon className="profile-image-placeholder" />
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="edit-profile-button"
              >
                <PencilIcon className="edit-icon" />
              </button>
            </div>
            <h2 className="profile-name">{profileData.fullName}</h2>
            <p className="profile-email">{profileData.email}</p>
            <div className="profile-experience">
              <span className="experience-badge">
                {profileData.investmentExperience} Investor
              </span>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="profile-fields">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={profileData.occupation}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="investmentExperience">Investment Experience</label>
                <select
                  id="investmentExperience"
                  name="investmentExperience"
                  value={profileData.investmentExperience}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="investmentGoals">Investment Goals</label>
                <select
                  id="investmentGoals"
                  name="investmentGoals"
                  value={profileData.investmentGoals}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="Short-term gains">Short-term gains</option>
                  <option value="Long-term wealth creation">Long-term wealth creation</option>
                  <option value="Retirement planning">Retirement planning</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="riskTolerance">Risk Tolerance</label>
                <select
                  id="riskTolerance"
                  name="riskTolerance"
                  value={profileData.riskTolerance}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="Conservative">Conservative</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Aggressive">Aggressive</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              {saveStatus.message && (
                <div className={`save-status ${saveStatus.success ? 'success' : 'error'}`}>
                  {saveStatus.success && <CheckCircleIcon className="status-icon" />}
                  <span>{saveStatus.message}</span>
                </div>
              )}
              <button type="submit" className="save-button">
                Save Changes
              </button>
              <button 
                type="button" 
                onClick={handleResetProfile}
                className="reset-button"
              >
                Reset Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile; 