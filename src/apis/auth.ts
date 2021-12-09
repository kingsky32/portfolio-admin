import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { restApi } from './index';

export interface PostAuthLoginRequestBody {
  username: string;
  password: string;
}

export interface Token {
  access_token: string | null;
  refresh_token: string | null;
}

export function postAuthLoginApi(
  requestBody: PostAuthLoginRequestBody,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<Token>> {
  const endpoint = '/auth/login';
  return restApi.post(endpoint, requestBody, config);
}
