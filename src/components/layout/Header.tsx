import React from 'react';
import styled from '@emotion/styled';
import Input from '#components/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '#components/Profile';
import { useProfile } from '#contexts/auth';

const Container = styled.header`
  padding: 0 1.5rem;
  display: flex;
  height: 6rem;
  align-items: center;
  justify-content: center;
  background-color: var(--header-background);
  &::before {
    content: '';
    display: block;
    flex: 1 0 0;
  }
`;

const SearchForm = styled.form`
  flex: 0 0 50%;
`;

const ProfileContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ProfileButton = styled.button`
  border-radius: 3rem;
`;

const Header = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref): React.ReactElement => {
  const { profile } = useProfile();

  function handleSearchSubmit(event: React.FormEvent): void {
    event.preventDefault();
  }

  function handleProfileClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
  }

  return (
    <Container ref={ref} {...props}>
      <SearchForm onSubmit={handleSearchSubmit}>
        <Input
          prefix={<FontAwesomeIcon icon="search" size="sm" />}
          height={3.5}
          bordered={false}
          backgroundColor="rgba(0, 0, 0, 0.15)"
        />
      </SearchForm>
      <ProfileContainer>
        <ProfileButton type="button" onClick={handleProfileClick}>
          <Profile size={3} uri={profile?.profile?.uri} alt="kimchi" />
        </ProfileButton>
      </ProfileContainer>
    </Container>
  );
});

export default Header;
