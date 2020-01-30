import React from 'react';
import styled from 'styled-components';
import { getButtonColorPreset } from '../../util/getColorPreset';
import { GRAY, NAVY, ColorPreset } from '../../../colors';

type ButtonProps = {
  /** 使用可否 */
  disabled?: boolean;
  /** クリック時に実行する関数 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**ボタンのテキスト */
  children?: string;
  /** その他のボタンprops */
};

function BaseButton({ disabled, onClick, children, ...props }: ButtonProps) {
  const colors = getButtonColorPreset('gray');
  return (
    <Button colors={colors} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ colors: ColorPreset; disabled?: boolean }>`
  width: 120px;
  height: 36px;
  border: solid 1px ${GRAY.hover};
  border-radius: 6px;
  background-color: ${({ colors }) => colors.default};
  color: ${NAVY.dark};
  font-size: 1rem;
  font-family: Hiragino Sans;
  cursor: pointer;

  :disabled {
    background-color: ${GRAY.default};
    color: ${GRAY.hover};
    cursor: default;
  }

  :hover {
    background-color: ${({ colors, disabled }) => (disabled ? GRAY.default : colors.hover)};
  }
  :active {
    background-color: ${({ colors, disabled }) => (disabled ? GRAY.default : colors.press)};
  }
  :focus {
    outline: none;
  }
`;
Button.displayName = 'Button';

export default BaseButton;
