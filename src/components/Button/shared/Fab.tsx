import React from 'react';
import styled from 'styled-components';
import { getColorPreset } from '../../util';
import { GRAY, OVERLAY, ColorPreset } from '../../../colors';

type Color = 'gray' | 'blue' | 'green' | 'yellow';

type FabProps = {
  /** ボタンの色 */
  color?: Color;
  /** 使用可否 */
  disabled?: boolean;
  /** クリック時に実行する関数 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** カスタムスタイル */
  style?: React.CSSProperties;
  /** ボタンのテキスト */
  children?: string;
};

function Fab({ color = 'green', disabled, onClick, children, ...props }: FabProps) {
  const colors = getColorPreset(color);
  return (
    <Button colors={colors} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ colors: ColorPreset; disabled?: boolean }>`
  height: 40px;
  font-family: Hiragino Sans;
  font-size: 1rem;
  background-color: ${({ colors }) => colors.default};
  color: ${({ colors }) => colors.font};
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
