import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export async function fetchUsersAdvanced({ username, location, minRepos }) {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const fullQuery = query.join(' ');
  const searchResponse = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(fullQuery)}`);

  if (!searchResponse.ok) throw new Error('Failed to fetch users');

  const searchData = await searchResponse.json();
  const basicUsers = searchData.items;

  // Fetch full details for each user (location, public_repos, etc.)
  const detailedUsers = await Promise.all(
    basicUsers.map(async (user) => {
      const response = await fetch(`https://api.github.com/users/${user.login}`);
      if (!response.ok) throw new Error('Failed to fetch user details');
      return await response.json();
    })
  );

  return detailedUsers;
}