import axios, { AxiosInstance } from 'axios';
import { Token } from './auth';

export const TOKEN_TYPE = 'Bearer';

export const TOKEN_STORE_KEY = 'token';

export const restApi: AxiosInstance = axios.create({
  baseURL: process.env.API_HOST,
});

export function setToken(data?: Token | null, isAutoLogin?: boolean): void {
  const { access_token } = data ?? {};

  if (Boolean(access_token)) {
    restApi.defaults.headers.common.authorization = `${TOKEN_TYPE} ${access_token}`;
    if (isAutoLogin) {
      window.localStorage.setItem(TOKEN_STORE_KEY, JSON.stringify(data));
    }
  } else {
    delete restApi.defaults.headers.common.authorization;
    window.localStorage.removeItem(TOKEN_STORE_KEY);
  }
}
