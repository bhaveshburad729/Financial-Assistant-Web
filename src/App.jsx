import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Funding from './pages/Funding';
import Schemes from './pages/Schemes';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-64 p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learning/*" element={<Learning />} />
              <Route path="/funding/*" element={<Funding />} />
              <Route path="/schemes/*" element={<Schemes />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App; 