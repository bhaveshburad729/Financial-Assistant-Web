const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const youtubeService = {
  async searchVideos(query, maxResults = 12) {
    try {
      const response = await fetch(
        `${BASE_URL}/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=${maxResults}&type=video&key=${API_KEY}`
      );
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  },

  async getVideoDetails(videoId) {
    try {
      const response = await fetch(
        `${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      const data = await response.json();
      return data.items[0];
    } catch (error) {
      console.error('Error fetching video details:', error);
      return null;
    }
  }
}; 