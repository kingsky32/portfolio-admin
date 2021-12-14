import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header`
  display: flex;
  height: 5rem;
  padding: 1.5rem 0;
  justify-content: 
  background-color: var(--header-background);
`;

const Header = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref): React.ReactElement => {
  return <Container ref={ref} {...props}></Container>;
});

export default Header;
