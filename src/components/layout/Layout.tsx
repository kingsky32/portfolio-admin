import Header from './Header';
import Footer from './Footer';
import styled from '@emotion/styled';

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
  flex-flow: column nowrap;
`;

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
