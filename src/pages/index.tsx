import Input from '#components/input';
import styled from '@emotion/styled';
import type { NextPage } from 'next';

const Container = styled.div``;

const Home: NextPage = () => {
  return (
    <Container>
      <Input prefix="test" suffix="test" placeholder="Input" />
    </Container>
  );
};

export default Home;
