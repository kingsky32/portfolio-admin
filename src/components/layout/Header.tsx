import React from 'react';
import styled from '@emotion/styled';

const Container = styled.header``;

const Header = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref): React.ReactElement => {
  return <Container ref={ref} {...props}></Container>;
});

export default Header;
