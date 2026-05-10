import axios from 'axios';

const api = axios.create({
  baseURL: '/api',   // proxied to localhost:3001 via vite.config.js
  timeout: 5000
});

export const getLiveEnergy = ()           => api.get('/energy/live');
export const getHistory    = (hours = 24) => api.get(`/energy/history?hours=${hours}`);
export const getSavings    = (days  = 30) => api.get(`/savings?days=${days}`);

export default api;