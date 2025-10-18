import axios from 'axios';
import { API_URL } from './constants';
import { getTokenCookie } from './cookies';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  try {
    const token = getTokenCookie();
    if (token && config && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
  }
  return config;
});
