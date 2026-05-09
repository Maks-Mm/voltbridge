//VOLTBRIDGE/frontend/src/api/client.js

import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:3001/api', timeout: 5000 });
export const getLiveEnergy = () => api.get('/energy/live');
export const getSavings = (days = 30) => api.get(`/savings?days=${days}`);
export default api;