import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gate.css';

const Gate = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="house-container">
      <div className="house">
        <div className="roof"></div>
        <div className="walls">
          <div className="gate">
            <div className={`gate-door ${isOpen ? 'open' : 'closed'}`}></div>
            <div className="gate-handle"></div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate('/control')}>Ir al Control del Portón</button>
    </div>
  );
};

export default Gate;
