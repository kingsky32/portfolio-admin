import React from 'react';
import styled from '@emotion/styled';
import { LiteralUnion } from '../../@types/type';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type'> {
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
    string
  >;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  bordered?: boolean;
}

const Container = styled.div`
  padding: 15px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--sj-gray);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const OriginInput = styled.input`
  flex: 1;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--sj-black);
  &::placeholder {
    color: var(--sj-gray);
  }
`;

const Prefix = styled.div``;

const Suffix = styled.div``;

const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ prefix, suffix, allowClear, bordered, ...inputProps }, ref): React.ReactElement => {
    return (
      <Container ref={ref}>
        {Boolean(prefix) && <Prefix>{prefix}</Prefix>}
        <OriginInput {...inputProps} />
        {Boolean(suffix) && <Suffix>{suffix}</Suffix>}
      </Container>
    );
  },
);

export default Input;
