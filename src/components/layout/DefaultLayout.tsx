import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import AsideNavigation from './AsideNavigation';

export interface LayoutProps {
  children?: React.ReactNode;
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
`;

const ContentsContainer = styled.div``;

const DefaultLayout = React.forwardRef<HTMLDivElement, LayoutProps>(({ children }, ref) => {
  return (
    <Container ref={ref}>
      <Header />
      <Main>
        <AsideNavigation />
        <ContentsContainer>{children}</ContentsContainer>
      </Main>
      <Footer />
    </Container>
  );
});

export default DefaultLayout;
