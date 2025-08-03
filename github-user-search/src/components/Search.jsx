import { fetchUserData, fetchUsersAdvanced } from '../services/githubService';
import { useState } from 'react';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userResults, setUserResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserResults([]);

    try {
      let results = [];

      if (username && !location && !minRepos) {
        // Step 1: Use fetchUserData if only username is filled
        const user = await fetchUserData(username);
        results = user ? [user] : [];
      } else {
        // Step 3: Use fetchUsersAdvanced for filtered search
        results = await fetchUsersAdvanced({ username, location, minRepos });
      }

      setUserResults(results);
    } catch (err) {
      console.error('Search error:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Location (e.g. San Francisco)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Looks like we cant find the user.</p>}

      {userResults.length > 0 && (
        <div className="mt-6 space-y-6">
          {userResults.map((user) => (
            <div key={user.id} className="p-4 border rounded-md shadow text-left">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  width={80}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
                  <p className="text-sm text-gray-600">@{user.login}</p>
                  {user.location && (
                    <p className="text-sm text-gray-500"> {user.location}</p>
                  )}
                  <p className="text-sm text-gray-500">
                    Public Repositories: {user.public_repos}
                  </p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-2 inline-block"
                  >
                    Visit GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;