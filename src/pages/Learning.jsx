import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BookOpenIcon, 
  VideoCameraIcon, 
  DocumentTextIcon, 
  PlayCircleIcon, 
  BookmarkIcon, 
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';
import { youtubeService } from '../services/youtubeService';
import videoIllustration from '../assets/svg/video-illustration.svg';
import articleIllustration from '../assets/svg/article-illustration.svg';
import webinarIllustration from '../assets/svg/webinar-illustration.svg';
import pdfIllustration from '../assets/svg/pdf-illustration.svg';

const LearningPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const learningResources = [
    {
      id: 1,
      title: "Investing 101: Basics for Beginners",
      type: "Video",
      category: "Stocks",
      duration: "45 mins",
      platform: "YouTube",
      level: "Beginner",
      thumbnailUrl: videoIllustration,
      bookmarked: false,
      description: "Comprehensive guide to understanding stock market fundamentals for new investors."
    },
    {
      id: 2,
      title: "Mutual Funds Explained Simply",
      type: "Article",
      category: "Mutual Funds",
      duration: "15 mins read",
      platform: "Medium",
      level: "Beginner",
      thumbnailUrl: articleIllustration,
      bookmarked: false,
      description: "Deep dive into mutual fund types, benefits, and investment strategies."
    },
    {
      id: 3,
      title: "Advanced Options Trading Strategies",
      type: "Webinar",
      category: "Stocks",
      duration: "90 mins",
      platform: "Udemy",
      level: "Advanced",
      thumbnailUrl: webinarIllustration,
      bookmarked: false,
      description: "Sophisticated options trading techniques for experienced investors."
    },
    {
      id: 4,
      title: "SIP Investment Guide",
      type: "PDF",
      category: "SIP",
      duration: "30 mins read",
      platform: "Financial Experts",
      level: "Intermediate",
      thumbnailUrl: pdfIllustration,
      bookmarked: false,
      description: "Comprehensive guide to Systematic Investment Plans and their benefits."
    }
  ];

  const categories = [
    "All", "Stocks", "Mutual Funds", "SIP", "Gold Bonds", "Tax Planning"
  ];

  const filteredResources = learningResources.filter(resource => 
    (selectedCategory === 'All' || resource.category === selectedCategory) &&
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderResourceIcon = (type) => {
    switch(type) {
      case 'Video': return <PlayCircleIcon className="resource-icon video" />;
      case 'Article': return <DocumentTextIcon className="resource-icon article" />;
      case 'Webinar': return <VideoCameraIcon className="resource-icon webinar" />;
      case 'PDF': return <BookOpenIcon className="resource-icon pdf" />;
      default: return null;
    }
  };

  return (
    <div className="learning-container">
      <div className="learning-content">
        {/* Header */}
        <div className="learning-header">
          <h1 className="learning-title">Learning Resources</h1>
          <p className="learning-subtitle">
            Enhance your financial knowledge with curated learning materials
          </p>
        </div>

        {/* Search and Filter */}
        <div className="search-filter-container">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search learning resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <MagnifyingGlassIcon className="search-icon" />
          </div>
          <div className="filter-container">
            <FunnelIcon className="filter-icon" />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div 
              key={resource.id} 
              className="resource-card"
            >
              <div className="resource-thumbnail">
                <img 
                  src={resource.thumbnailUrl} 
                  alt={resource.title} 
                  className="thumbnail-image"
                />
                <div className="resource-type-icon">
                  {renderResourceIcon(resource.type)}
                </div>
              </div>
              <div className="resource-content">
                <div className="resource-header">
                  <span className="level-badge">{resource.level}</span>
                  <span className="duration-text">{resource.duration}</span>
                </div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">
                  {resource.description}
                </p>
                <div className="resource-footer">
                  <span className="platform-text">{resource.platform}</span>
                  <div className="resource-actions">
                    <button className="bookmark-button">
                      <BookmarkIcon className="bookmark-icon" />
                    </button>
                    <button className="start-learning-button">
                      Start Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="no-results">
            <p>No resources found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Bookmarks = () => {
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBookmarks = async () => {
      const savedBookmarks = localStorage.getItem('bookmarkedVideos');
      if (savedBookmarks) {
        const videoIds = JSON.parse(savedBookmarks);
        const videoDetails = await Promise.all(
          videoIds.map(id => youtubeService.getVideoDetails(id))
        );
        setBookmarkedVideos(videoDetails.filter(video => video !== null));
      }
      setLoading(false);
    };

    loadBookmarks();
  }, []);

  const handleBookmarkToggle = (videoId) => {
    setBookmarkedVideos(prev => {
      const newBookmarks = prev.filter(video => video.id !== videoId);
      localStorage.setItem('bookmarkedVideos', JSON.stringify(newBookmarks.map(v => v.id)));
      return newBookmarks;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Bookmarked Videos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarkedVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isBookmarked={true}
            onBookmarkToggle={handleBookmarkToggle}
          />
        ))}
      </div>
      {bookmarkedVideos.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No bookmarked videos yet.
        </p>
      )}
    </div>
  );
};

const LearningRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LearningPage />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  );
};

export default LearningRoutes; 