import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.goval.app:2053', // Your Flask backend URL
});

export default api;
