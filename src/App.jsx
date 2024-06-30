import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Gate from './components/Gate';
import ControlGate from './components/ControlGate';
import axios from 'axios';

const App = () => {
  const [gateOpen, setGateOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchGateStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/gate/status', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGateOpen(response.data.status === 'open');
    } catch (error) {
      console.error('Error fetching gate status:', error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchGateStatus();
    }
  }, [isLoggedIn]);

  const handleToggleGate = () => {
    setGateOpen(prevOpen => !prevOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    fetchGateStatus();
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route 
          path="/gate" 
          element={isLoggedIn ? <Gate isOpen={gateOpen} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/control" 
          element={isLoggedIn ? <ControlGate isOpen={gateOpen} onToggle={handleToggleGate} /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
