// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center mx-auto justify-center min-h-screen text-gray-800 p-6">
     
      <ul>
        <li><Link to="/one-armed-bandit">Enarmade Bandit</Link></li>
        <li><Link to="/ml-intro">Introduction to Machine Learning</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
    </div>
  );
};

export default LandingPage;
