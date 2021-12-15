import React from 'react';
import produce from 'immer';
import Input from '#components/input';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { PostAuthLoginRequestBody } from '#apis/auth';
import Button from '#components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Icon from '#components/icon';
import { useLogin, useProfile } from '#contexts/auth';
import handleError from '#utils/handleError';
import Checkbox from '#components/checkbox';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { PREV_PAGE } from '#commons/contants';

const Container = styled.div`
  padding: 0 var(--layout-horizontal-padding);
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.h1`
  margin-bottom: 4rem;
`;

const Form = styled.form`
  max-width: 52rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
`;

const CheckboxContainer = styled.div`
  margin-top: -0.5rem;
  padding: 0 2rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 3rem;
  font-weight: 500;
`;

const initialRequestBody = {
  username: '',
  password: '',
} as PostAuthLoginRequestBody;

const Home: NextPage = (): React.ReactElement => {
  const [cookies, _, removeCookie] = useCookies();
  const prevPage = cookies[PREV_PAGE] ?? '/';
  const router = useRouter();
  const [isAutoLogin, setIsAutoLogin] = React.useState<boolean>(false);
  const login = useLogin();
  const { profile } = useProfile();
  const [requestBody, setRequestBody] = React.useState<PostAuthLoginRequestBody>(initialRequestBody);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = React.useCallback(
    async (event: React.SyntheticEvent): Promise<void> => {
      if (loading) {
        return;
      }
      event.preventDefault();
      try {
        setLoading(true);
        await login(requestBody, isAutoLogin);
        router.replace(prevPage);
        removeCookie(PREV_PAGE);
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    },
    [loading, requestBody],
  );

  const handleChangeIsAutoLogin = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAutoLogin(event.target.checked);
  }, []);

  React.useEffect(() => {
    if (profile) {
      router.replace('/');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Login | Seung Ju</title>
      </Head>
      <Container>
        <LogoContainer>
          <Icon.LogoFull size={24} color="var(--primary-button-background)" />
        </LogoContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            value={requestBody.username}
            onChange={(e) => {
              setRequestBody(
                produce((draft) => {
                  draft.username = e.target.value;
                }),
              );
            }}
            prefix={<FontAwesomeIcon icon="user" size="lg" color="#cccccc" />}
            placeholder="Username"
            borderColor="var(--main-color)"
          />
          <Input
            type="password"
            value={requestBody.password}
            onChange={(e) => {
              setRequestBody(
                produce((draft) => {
                  draft.password = e.target.value;
                }),
              );
            }}
            prefix={<FontAwesomeIcon icon="lock" size="lg" color="#cccccc" />}
            placeholder="Password"
            borderColor="var(--main-color)"
          />
          <CheckboxContainer>
            <Checkbox checked={isAutoLogin} onChange={handleChangeIsAutoLogin}>
              Remember Me
            </Checkbox>
          </CheckboxContainer>
          <SubmitButton type="submit" loading={loading}>
            Log In
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
};

export default Home;
