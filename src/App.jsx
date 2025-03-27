import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MutualFunds from './pages/MutualFunds';
import SIPs from './pages/SIPs';
import GoldBonds from './pages/GoldBonds';
import Stocks from './pages/Stocks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learning" element={<Learning />} />
          <Route path="mutual-funds" element={<MutualFunds />} />
          <Route path="sips" element={<SIPs />} />
          <Route path="gold-bonds" element={<GoldBonds />} />
          <Route path="stocks" element={<Stocks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 