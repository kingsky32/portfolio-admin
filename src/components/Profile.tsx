import styled from '@emotion/styled';
import React from 'react';

export interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  uri?: string;
  alt?: string;
}

const Container = styled.div<{ size?: number }>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  border-radius: ${({ size }) => `${size}rem`};
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Profile = ({ size = 3.6, uri = '/logo512.png', alt, ...props }: ProfileProps): React.ReactElement => {
  return (
    <Container size={size} {...props}>
      <Image src={uri} alt={alt} />
    </Container>
  );
};

export default Profile;
