import React from 'react';
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

const VideoCard = ({ video, isBookmarked, onBookmarkToggle }) => {
  return (
    <div className="video-card">
      <div className="video-thumbnail">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-thumbnail-image"
        />
        <button
          className="bookmark-button"
          onClick={onBookmarkToggle}
          aria-label={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
        >
          {isBookmarked ? (
            <BookmarkIconSolid className="bookmark-icon" />
          ) : (
            <BookmarkIconOutline className="bookmark-icon" />
          )}
        </button>
      </div>
      <div className="video-content">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-description">{video.description}</p>
        <div className="video-meta">
          <span className="video-duration">{video.duration}</span>
          <span className="video-category">{video.category}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

 