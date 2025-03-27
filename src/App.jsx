import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Funding from './pages/Funding';
import Schemes from './pages/Schemes';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MutualFunds from './pages/MutualFunds';
import SIPs from './pages/SIPs';
import GoldBonds from './pages/GoldBonds';
import Stocks from './pages/Stocks';
import GovernmentSchemes from './pages/GovernmentSchemes';
import Contact from './pages/Contact';
import TaxCalculator from './pages/TaxCalculator';
import DocumentCompressor from './pages/DocumentCompressor';
import NotificationsPage from './pages/Notifications';
import ProfilePage from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes - without Navbar and Sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main App Routes - with Navbar and Sidebar */}
        <Route path="/*" element={
          <div className="app-container">
            <Navbar />
            <div className="main-layout">
              <Sidebar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/learning" element={<Learning />} />
                  <Route path="/funding" element={<Funding />} />
                  <Route path="/schemes" element={<Schemes />} />
                  <Route path="/mutual-funds" element={<MutualFunds />} />
                  <Route path="/sips" element={<SIPs />} />
                  <Route path="/gold-bonds" element={<GoldBonds />} />
                  <Route path="/government-schemes" element={<GovernmentSchemes />} />
                  <Route path="/stocks" element={<Stocks />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/tax-calculator" element={<TaxCalculator />} />
                  <Route path="/document-compressor" element={<DocumentCompressor />} />
                  <Route path="/notifications" element={<NotificationsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
              </main>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App; 