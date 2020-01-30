import React from 'react';
import styled from 'styled-components';
import { getButtonColorPreset, getFontColor } from '../../util/getColorPreset';
import { GRAY, ColorPreset, OVERLAY } from '../../../colors';

export type Color = 'gray' | 'blue' | 'green' | 'yellow';

export type ButtonProps = {
  /** ボタンの色 */
  color?: Color;
  /** 使用可否 */
  disabled?: boolean;
  /** クリック時に実行する関数 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**ボタンのテキスト */
  children?: string;
  /** その他のボタンprops */
  //   buttonProps?: JSX.IntrinsicElements['button'];
};

function FarmerBaseButton({ color = 'green', disabled, onClick, children, ...props }: ButtonProps) {
  const colors = getButtonColorPreset(color);
  const fontColor = getFontColor(color);
  return (
    <Button colors={colors} fontColor={fontColor} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ colors: ColorPreset; fontColor: string; disabled?: boolean }>`
  font-family: Hiragino Sans;
  font-size: 0.8rem;
  height: 32px;
  min-width: 120px;
  border-radius: 16px;
  background-color: ${({ colors }) => colors.default};
  color: ${({ fontColor }) => fontColor};
  border: none;
  box-shadow: 0 2px 4px 0 ${OVERLAY['50%']};
  cursor: pointer;

  :disabled {
    background-color: ${GRAY.default};
    color: ${GRAY.hover};
    cursor: default;
  }

  :active {
    background-color: ${({ colors, disabled }) => (disabled ? GRAY.default : colors.press)};
  }

  :focus {
    outline: none;
  }
`;
Button.displayName = 'Button';

export default FarmerBaseButton;
