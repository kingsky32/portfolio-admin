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
  gap?: number;
  message?: string;
  borderColor?: string;
  width?: string;
  height?: number;
  backgroundColor?: string;
}

const Container = styled.div``;

const InputContainer = styled.div<{
  gap: number;
  bordered?: boolean;
  borderColor?: string;
  width?: string;
  height?: number;
  backgroundColor?: string;
}>`
  width: ${({ width }) => width ?? 'auto'};
  padding: 0 var(--input-horizontal-padding);
  height: ${({ height }) => (height ? `${height}rem` : 'var(--input-height)')};
  border-radius: var(--input-border-radius);
  border-width: 1px;
  border-style: ${({ bordered }) => (bordered ? 'solid' : 'none')};
  border-color: ${({ borderColor }) => borderColor ?? 'var(--input-border)'};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  gap: ${({ gap }) => `${gap}rem`};
`;

const OriginInput = styled.input`
  flex: 1;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--primary-text);
  margin-bottom: -3px;
  &::placeholder {
    color: var(--placeholder);
  }
  &:-webkit-autofill {
    transition: background-color 5000s ease-in-out 50000s;
    appearance: none;
    background-color: transparent !important;
    -webkit-text-fill-color: var(--primary-text) !important;
    caret-color: var(--caret-color);
  }
`;

const Prefix = styled.div``;

const Suffix = styled.div``;

const Message = styled.p`
  color: var(--primary-message-text);
  font-weight: 300;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  font-size: 1.4rem;
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      prefix,
      suffix,
      allowClear,
      gap = 1,
      bordered = true,
      message,
      borderColor,
      width,
      height,
      backgroundColor,
      ...inputProps
    },
    ref,
  ): React.ReactElement => {
    return (
      <Container>
        <InputContainer
          gap={gap}
          bordered={bordered}
          borderColor={borderColor}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
        >
          {Boolean(prefix) && <Prefix>{prefix}</Prefix>}
          <OriginInput ref={ref} {...inputProps} />
          {Boolean(suffix) && <Suffix>{suffix}</Suffix>}
        </InputContainer>
        {Boolean(message) && <Message>{message}</Message>}
      </Container>
    );
  },
);

export default Input;
