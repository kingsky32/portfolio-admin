import axios, { AxiosInstance } from 'axios';

export const restApi: AxiosInstance = axios.create({
  baseURL: process.env.API_HOST,
});
