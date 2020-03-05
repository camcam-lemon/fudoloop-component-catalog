import React from 'react';
import styled from 'styled-components';
import { getColorPreset } from '../../util';
import { GRAY, OVERLAY, ColorPreset } from '../../../colors';
import { Event } from '../../../@types/EventEmitter.d';

type Color = 'gray' | 'blue' | 'green' | 'yellow';

export type BaseFabProps = {
  /** ボタンの色 */
  color?: Color;
  /** 使用可否 */
  disabled?: boolean;
  /** カスタムスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
  /** クリック時に実行する関数 */
  onClick?: (e: Event['click']) => void;
  /** ボタンのテキスト */
  children?: string;
};

function Fab({
  styles,
  className,
  color = 'green',
  disabled = false,
  onClick,
  children,
  ...props
}: BaseFabProps) {
  const colors = getColorPreset(color);
  return (
    <Button
      colors={colors}
      onClick={onClick}
      disabled={disabled}
      style={styles}
      className={className}
      {...props}
    >
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
