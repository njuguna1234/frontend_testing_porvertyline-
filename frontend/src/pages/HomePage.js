// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Blah Company</h1>
      <p>Our mission is to eradicate poverty, create employment, and foster social integration.</p>
      
      <div className="core-solutions">
        <div>
          <h2><Link to="/poverty-eradication">Poverty Eradication</Link></h2>
          <p>Learn about our strategies to lift people out of poverty.</p>
        </div>
        <div>
          <h2><Link to="/employment-generation">Employment Generation</Link></h2>
          <p>Discover how we're creating job opportunities for marginalized groups.</p>
        </div>
        <div>
          <h2><Link to="/social-integration">Social Integration</Link></h2>
          <p>Understand our efforts to promote social inclusion and equality.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
