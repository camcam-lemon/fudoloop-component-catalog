import React from 'react';
import styled from 'styled-components';
import { GRAY, NAVY } from '../../../colors';
import Fonts from '../../../fonts';
// eslint-disable-next-line import/no-cycle
import { MarketFieldProps } from '.';

type ExtendProps = Omit<MarketFieldProps, 'label' | 'color' | 'width' | 'styles' | 'className'>;

type Props = {
  color: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
} & ExtendProps;

function Input({ multline, ...props }: Props) {
  return multline ? <TextArea {...props} /> : <InputText {...props} />;
}

type StyledTextProps = {
  color: string;
  focused: boolean;
  align?: React.CSSProperties['textAlign'];
  height?: React.CSSProperties['height'];
};

const InputText = styled.input.attrs({ type: 'text' })<StyledTextProps>`
  ${Fonts[300]}
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.4px;
  width: inherit;
  color: ${NAVY.default};
  text-align: ${({ align }) => align};
  padding: 0 4px;
  height: ${({ height }) => height || '20px'};
  border: unset;
  box-sizing: border-box;
  outline: none;
  cursor: text;

  :disabled {
    pointer-events: none;
    color: ${GRAY.default};
  }

  ::placeholder {
    color: ${GRAY.hover};
  }
`;
const TextArea = styled.textarea<StyledTextProps>`
  ${Fonts[300]}
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.4px;
  width: inherit;
  color: ${NAVY.default};
  text-align: ${({ align }) => align};
  padding: 0 4px;
  height: ${({ height }) => height || '20px'};
  border: unset;
  box-sizing: border-box;
  outline: none;
  cursor: text;
  resize: none;

  :disabled {
    pointer-events: none;
    color: ${GRAY.default};
  }

  ::placeholder {
    color: ${GRAY.hover};
  }
`;

export default Input;
