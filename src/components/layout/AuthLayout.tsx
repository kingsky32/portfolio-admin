import React from 'react';
import styled from '@emotion/styled';

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthLayout = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children }, ref) => {
  return <Container ref={ref}>{children}</Container>;
});

export default AuthLayout;
