import React from 'react';
import styled from 'styled-components';
import { getButtonColorPreset, getFontColor } from '../../util/getColorPreset';
import { GRAY, ColorPreset } from '../../../colors';

type Color = 'gray' | 'blue' | 'green' | 'yellow';

type ButtonProps = {
  /** ボタンの色 */
  color?: Color;
  /** 使用可否 */
  disabled?: boolean;
  /** クリック時に実行する関数 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** ボタンのテキスト */
  children?: string;
  /** その他のボタンprops */
  //   buttonProps?: JSX.IntrinsicElements['button'];
};

function SalerAdminBaseButton({
  color = 'yellow',
  disabled,
  onClick,
  children,
  ...props
}: ButtonProps) {
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
  font-size: 1rem;
  width: 216px;
  height: 52px;
  border-radius: 6px;
  background-color: ${({ colors }) => colors.default};
  border: ${({ colors, disabled }) => (disabled ? 'none' : `1px solid ${colors.default}`)};
  color: ${({ fontColor }) => fontColor};
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

export default SalerAdminBaseButton;
