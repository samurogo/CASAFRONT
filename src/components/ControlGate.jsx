import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ControlGate = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();

  const toggleGate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/gate/toggle', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onToggle();
    } catch (error) {
      console.error('Error toggling gate:', error);
    }
  };

  return (
    <div className="control-container">
      <h2>Control del Portón</h2>
      <p>Estado actual del portón: {isOpen ? 'Abierto' : 'Cerrado'}</p>
      <button onClick={toggleGate}>Abrir / Cerrar</button>
      <button onClick={() => navigate('/gate')}>Ir al Portón</button>
    </div>
  );
};

export default ControlGate;
