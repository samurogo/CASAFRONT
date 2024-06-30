import axios from 'axios';

const API_URL = 'http://localhost:5000/apiarqui';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/register', userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axiosInstance.post('/login', userData);
  return response.data.token;
};