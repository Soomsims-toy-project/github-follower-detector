import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IAxiosConfig {
  baseURL: string;
  headers: {
    'Content-Type': 'application/json' | 'multipart/form-data';
  };
}

const axiosConfig: AxiosRequestConfig<IAxiosConfig> = {
  baseURL: 'https://api.github.com',
  headers: { 'Content-Type': 'application/json' },
};

const client: AxiosInstance = axios.create(axiosConfig);

client.interceptors.request.use(
  async (config) => {
    // 토큰을 가져옴
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `token ${token}`;
    return config;
  },
  (error) => {
    console.error(error);
  },
);

export { client };
