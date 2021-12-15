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
  padding-left: 5rem;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
`;

const EAsideNavigation = styled(AsideNavigation)`
  position: fixed;
  left: 0;
  height: 100%;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
`;

const DefaultLayout = React.forwardRef<HTMLDivElement, LayoutProps>(({ children }, ref) => {
  return (
    <Container ref={ref}>
      <EAsideNavigation />
      <ContentsContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ContentsContainer>
    </Container>
  );
});

export default DefaultLayout;
