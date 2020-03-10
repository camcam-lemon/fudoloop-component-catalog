import React from 'react';
import styled from 'styled-components';
import Base, { TextFieldProps } from '../Base';
import { WHITE } from '../../../colors';

type Props = Omit<TextFieldProps, 'color'>;

export type LoginTextFieldProps = Props;

function LoginTextField({
  value,
  name,
  id,
  type = 'text',
  disabled,
  placeholder,
  onChange,
  ...props
}: LoginTextFieldProps) {
  return (
    <TextField
      color="green"
      value={value}
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
}

// ログインフォームのカラー指定はここだけの特殊なものなので定数管理はしない
const TextField = styled(Base)`
  color: ${WHITE};
  background-color: rgba(255, 255, 255, 0.28);
  border-radius: 17px;
  border: 1px solid transparent;
  padding: 0 16px;
`;

export default LoginTextField;
