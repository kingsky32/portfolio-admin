import { AxiosResponse } from 'axios';
import React from 'react';

export type FetchType<T = any> = Promise<T>;

export interface UseFetchProps<T = any> {
  data: T | null;
  error: Error | unknown | null;
  loading: boolean;
}

function useFetch<T = any>() {
  const [state, setState] = React.useState<UseFetchProps<T>>({
    data: null,
    error: null,
    loading: false,
  });

  async function fetch(fetch: FetchType): Promise<AxiosResponse<T | null | any>> {
    setState({ data: null, error: null, loading: true });
    try {
      const responseData: AxiosResponse<T> = await fetch;
      
      setState({ data: responseData.data, error: null, loading: false });
      return responseData;
    } catch (error) {
      setState((prevState) => ({ ...prevState, error, loading: false }));
      throw error;
    }
  }

  function clear() {
    setState({
      data: null,
      error: null,
      loading: false,
    });
  }

  return { ...state, fetch, clear };
}

export default useFetch;
