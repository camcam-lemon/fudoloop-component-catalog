import React from 'react';
import styled from 'styled-components';
import { getButtonColorPreset } from '../../util/getColorPreset';
import { WHITE, GRAY, OVERLAY, ColorPreset } from '../../../colors';

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

function Fab({ color = 'green', disabled, onClick, children, ...props }: Props) {
  const colors = getButtonColorPreset(color);
  return (
    <Button colors={colors} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ colors: ColorPreset; disabled?: boolean }>`
  /* width: 132px; */
  height: 40px;
  font-family: Hiragino Sans;
  font-size: 1rem;
  background-color: ${({ colors }) => colors.default};
  color: ${WHITE};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px ${OVERLAY['50%']};

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

export default Fab;
