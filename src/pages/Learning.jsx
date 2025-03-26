import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';
import { youtubeService } from '../services/youtubeService';

const Learning = () => {
  const [videos, setVideos] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Load bookmarked videos from localStorage on component mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedVideos');
    if (savedBookmarks) {
      setBookmarkedVideos(JSON.parse(savedBookmarks));
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const results = await youtubeService.searchVideos(searchQuery);
      setVideos(results);
    } catch (error) {
      console.error('Error searching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmarkToggle = (videoId) => {
    setBookmarkedVideos(prev => {
      const isBookmarked = prev.includes(videoId);
      const newBookmarks = isBookmarked
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId];
      
      // Save to localStorage
      localStorage.setItem('bookmarkedVideos', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const categories = [
    { name: 'Investment Basics', query: 'investment basics for beginners' },
    { name: 'Stock Market', query: 'stock market tutorial' },
    { name: 'Mutual Funds', query: 'mutual funds explained' },
    { name: 'Personal Finance', query: 'personal finance tips' },
  ];

  return (
    <div className="learning">
      <div className="learning-header">
        <h1 className="learning-title">Learning Center</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSearchQuery(category.query)}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow text-left"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {category.name}
            </h3>
          </button>
        ))}
      </div>

      {/* Video Grid */}
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Loading videos...</p>
        </div>
      ) : (
        <div className="videos-grid">
          {videos.map((video) => (
            <VideoCard
              key={video.id.videoId}
              video={video}
              isBookmarked={bookmarkedVideos.includes(video.id.videoId)}
              onBookmarkToggle={handleBookmarkToggle}
            />
          ))}
        </div>
      )}

      {/* Video Player Modal */}
      {location.state?.videoId && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl">
            <div className="p-4">
              <VideoPlayer videoId={location.state.videoId} />
            </div>
          </div>
        </div>
      )}
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
      <Route path="/" element={<Learning />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  );
};

export default LearningRoutes; 