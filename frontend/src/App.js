import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PovertyEradication from './pages/PovertyEradication';
import EmploymentGeneration from './pages/EmploymentGeneration';
import SocialIntegration from './pages/SocialIntegration';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/poverty-eradication" element={<PovertyEradication />} />
        <Route path="/employment-generation" element={<EmploymentGeneration />} />
        <Route path="/social-integration" element={<SocialIntegration />} />
      </Routes>
    </Router>
  );
}

export default App;
