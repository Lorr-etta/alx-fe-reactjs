import axios from 'axios';

// Optional API key from .env file
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
  }
  }
);

// Search for users
export const searchUsers = async (query) => {
  const response = await githubApi.get(`/search/users?q=${query}`);
  return response.data.items;
};