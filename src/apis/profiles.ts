import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { restApi } from './index';
import { User } from './users';

export function getProfileApi(config?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
  const endpoint = '/profile';
  return restApi.get(endpoint, config);
}
