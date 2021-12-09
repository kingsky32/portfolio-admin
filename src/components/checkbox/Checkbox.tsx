import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LabelText = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  color: var(--primary-text);
  font-weight: 400;
  transition: 0.25s color ease;
  &:hover {
    color: var(--primary-hover-text);
  }
  &:active {
    color: var(--primary-text);
  }
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
`;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, checked: initialChecked = false, onChange, ...checkboxProps }, ref): React.ReactElement => {
    const [checked, setChecked] = React.useState<boolean>(initialChecked);

    React.useEffect(() => {
      if (checked === initialChecked) {
        return;
      }
      setChecked(initialChecked);
    }, [initialChecked]);

    return (
      <Container>
        <Label>
          <Input
            ref={ref}
            type="checkbox"
            onChange={(e) => {
              setChecked(e.target.checked);
              if (typeof onChange === 'function') {
                onChange(e);
              }
            }}
            {...checkboxProps}
          />
          <FontAwesomeIcon icon={['far', checked ? 'check-square' : 'square']} size="lg" color="var(--input-border)" />
          <LabelText>{children}</LabelText>
        </Label>
      </Container>
    );
  },
);

export default Checkbox;
