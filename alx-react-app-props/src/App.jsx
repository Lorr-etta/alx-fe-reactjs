import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import all components
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const [count, setCount] = useState(0);

  // Define the user data
  const userData = {
    name: "Jane",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        {/* WelcomeMessage component */}
        <WelcomeMessage />

        {/* Logos */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        {/* Components */}
        <Header />
        <MainContent />
        <ProfilePage /> {/* This will display user details using context */}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;