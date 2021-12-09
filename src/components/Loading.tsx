import React from 'react';
import styled from '@emotion/styled';

export interface LoadingProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: number;
}

const Loading = styled.img<{ size?: number }>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
`;

Loading.defaultProps = {
  size: 1.5,
  src: '/images/circular_progress_indicator.gif',
  alt: 'loading',
} as LoadingProps;

export default Loading;
