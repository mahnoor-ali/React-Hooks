import React from 'react';
import './Home.module.css';
import { Link } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';

function Home() {
  const [isDarkMode, setDarkMode]  = useDarkMode();
  return (
    <div className="home-page">
     <button onClick={() => setDarkMode(!isDarkMode)}> {isDarkMode? 'DarkMode': 'Light Mode'} </button>
      <h1>Welcome to my React homepage!</h1>
      <p>This is a basic example page to get you started with React.</p>
      <br />
      <Link to="/About"> About </Link>
    </div>
  );
}

export default Home;