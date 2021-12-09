import React from 'react';
import styled from '@emotion/styled';
import Loading from '#components/Loading';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  height: var(--button-height);
  line-height: var(--button-height);
  border-radius: var(--input-border-radius);
  cursor: pointer;
  font-size: 1.4rem;
  background: var(--primary-button-background);
  color: var(--primary-button-text);
  transition: 0.15s background ease;
  &:hover {
    background: var(--primary-button-hover-background);
  }
  &:disabled {
    background: var(--primary-button-disabled-background);
    cursor: not-allowed;
  }
`;

const LoadingContainer = styled.div<{ _loading?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ _loading }) => (_loading ? '1rem' : '-1.5rem')};
  opacity: ${({ _loading }) => (_loading ? 1 : 0)};
  transition-property: margin-left opacity;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading = false, disabled: initialDisabled, ...props }, ref): React.ReactElement => {
    const disabled = initialDisabled || loading;

    return (
      <Container ref={ref} type="button" disabled={disabled} {...props}>
        {children}
        <LoadingContainer _loading={loading}>
          <Loading />
        </LoadingContainer>
      </Container>
    );
  },
);

export default Button;
