import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Logo from '#components/icon/Logo';

const Container = styled.header``;

const LogoContainer = styled.h1``;

const Header = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref): React.ReactElement => {
  return (
    <Container ref={ref} {...props}>
      <LogoContainer>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </LogoContainer>
    </Container>
  );
});

export default Header;
