import axios from 'axios';

// Optional: Use this if you're adding a GitHub API key later
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    ...(apiKey && { Authorization: token ${apiKey} }),
  },
});

export const searchUsers = async (query) => {
  const response = await githubApi.get(`/search/users?q=${query}`);
  return response.data.items;
};