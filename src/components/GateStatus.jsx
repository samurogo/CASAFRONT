import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GateStatus = () => {
  const [gateStatus, setGateStatus] = useState('');

  useEffect(() => {
    const fetchGateStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/gate/status', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setGateStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching gate status:', error);
      }
    };

    fetchGateStatus();
  }, []);

  return (
    <div>
      <h2>Gate Status</h2>
      <p>Gate is currently {gateStatus}</p>
    </div>
  );
};

export default GateStatus;
