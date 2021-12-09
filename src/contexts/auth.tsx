import React from 'react';
import { User } from '#apis/users';
import useFetch from '#hooks/useFetch';
import { Token, postAuthLoginApi, PostAuthLoginRequestBody } from '#apis/auth';
import { getProfileApi } from '#apis/profiles';
import { setToken } from '#apis/index';

export type LoginType = (requestBody: PostAuthLoginRequestBody, isAutoLogin?: boolean) => Promise<Token | null>;

export interface Auth {
  profile: User | null;
  login: LoginType;
  setProfile: Function;
}

const initialState = {
  profile: null,
  async login() {
    return { access_token: null, refresh_token: null };
  },
  setProfile: () => null,
} as Auth;

const AuthContext = React.createContext<Auth>(initialState);

export function useLogin() {
  const { login } = React.useContext(AuthContext);
  return login;
}

export function useProfile() {
  const { profile, setProfile } = React.useContext(AuthContext);
  return { profile, setProfile };
}

export function AuthProvider({ children }: React.HTMLAttributes<HTMLElement>): React.ReactElement {
  const [profile, setProfile] = React.useState(null);
  const postAuthLogin = useFetch<Token>();
  const getProfile = useFetch<User>();

  const handleSetProfile = React.useCallback(async (): Promise<void | null> => {
    if (getProfile.loading) {
      return null;
    }

    try {
      const { data: responseData } = await getProfile.fetch(getProfileApi());
      setProfile(responseData);
    } catch (error) {
      throw error;
    }
  }, []);

  const handleLogin = React.useCallback(
    async (requestBody: PostAuthLoginRequestBody, isAutoLogin?: boolean): Promise<Token | null> => {
      if (postAuthLogin.loading) {
        return null;
      }

      try {
        const { data: responseData } = await postAuthLogin.fetch(postAuthLoginApi(requestBody));
        setToken(responseData, isAutoLogin);

        await handleSetProfile();

        return responseData;
      } catch (error) {
        throw error;
      }
    },
    [],
  );

  return (
    <AuthContext.Provider value={{ profile, login: handleLogin, setProfile: handleSetProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
