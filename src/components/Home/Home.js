import React from 'react';
import './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
     
      <h1>Welcome to my React homepage!</h1>
      <p>This is a basic example page to get you started with React.</p>
      <br />
      <Link to="/About"> About </Link>
    </div>
  );
}

export default Home;