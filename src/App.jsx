import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import JobListing from './components/JobListing';
import Blog from './components/Blog';
import CandidateProfile from './components/CandidateProfile';
import HiringProfile from './components/HiringProfile';
import JobDetail from './components/JobDetail';
// import Pricing from './components/Pricing'; // Commented out
// import Login from './components/Login'; // Commented out
// import Register from './components/Register'; // Commented out
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/jobs" element={<JobListing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/candidate-profile" element={<CandidateProfile />} />
            <Route path="/hiring-profile" element={<HiringProfile />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            {/* Pricing, Login, and Register routes removed */}
          </Routes>
        </main>
        <footer className="footer">
          <div className="container text-center">
            © 2024 Cancha Chamba. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;