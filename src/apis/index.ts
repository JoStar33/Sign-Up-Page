import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { DefaultResponse } from '@/types';
import environment from '@/environment';

const VERSION = '/v1';
const URL_API = '/api';

const config: AxiosRequestConfig = {
  baseURL: environment.serverUrl + URL_API + VERSION,
  withCredentials: false,
};

const responseBody = <T extends object = DefaultResponse>(response: AxiosResponse<T>) => response.data;

export const instance = axios.create(config);

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export const requests = {
  get: <T extends DefaultResponse = DefaultResponse>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData) =>
    instance.post<T>(url, body).then(responseBody),
  put: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData) => instance.put<T>(url, body).then(responseBody),
  delete: <T extends DefaultResponse = DefaultResponse>(url: string) => instance.delete<T>(url).then(responseBody),
  patch: <T extends DefaultResponse = DefaultResponse>(url: string, body: object | FormData | undefined) =>
    instance.patch<T>(url, body).then(responseBody),
};
