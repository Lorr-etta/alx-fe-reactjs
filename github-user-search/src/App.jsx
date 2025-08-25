import './App.css';
import Search from './components/Search'; // Import the Search component

function App() {
  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <p>Start typing to search for GitHub profiles...</p>
      
      <Search /> {/* Render the Search component */}
    </div>
  );
}

export default App;