import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import all components
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile' 
import Counter from './components/Counter'

function App() {
  return (
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

      {/* Task 2 components */}
      <Header />
      <UserProfile name="Lorretta" age={25} bio="Aspiring Front-End Developer" />
      <MainContent /> 
      <Counter />
      <Footer />
    </div>
  );
}

export default App;