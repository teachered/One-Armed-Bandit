import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MarkdownPage from './markdownpage';

const LandingPage = lazy(() => import('./landingpage'));
const OneArmedBandit = lazy(() => import('./one-armed-bandit'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reinforcement/one-armed-bandit" element={<OneArmedBandit />} />
          <Route path="/markdownpage" element={<MarkdownPage />} /> {/* Ny route */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
