import React from 'react';
import styled from 'styled-components';
import { getButtonColorPreset } from '../../util/getColorPreset';
import { GRAY, ColorPreset } from '../../../colors';

type Color = 'gray' | 'blue' | 'green' | 'yellow';

type Props = {
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

function FarmerBaseButton({ color = 'green', disabled, onClick, children, ...props }: Props) {
  const colors = getButtonColorPreset(color);
  return (
    <Button colors={colors} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ colors: ColorPreset; disabled?: boolean }>`
  width: 120px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ colors }) => colors.default};
  border: none;
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

export default FarmerBaseButton;
