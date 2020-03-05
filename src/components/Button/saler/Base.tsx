import React from 'react';
import styled from 'styled-components';
import { getColorPreset } from '../../util/getColorPreset';
import { GRAY, ColorPreset } from '../../../colors';
import { Event } from '../../../@types/EventEmitter.d';

type Color = 'gray' | 'blue' | 'green' | 'yellow';

export type ButtonProps = {
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
  /** その他のボタンprops */
  //   buttonProps?: JSX.IntrinsicElements['button'];
};

function SalerAdminBaseButton({
  color = 'yellow',
  disabled,
  onClick,
  children,
  styles,
  className,
  ...props
}: ButtonProps) {
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
  font-family: Hiragino Sans;
  font-size: 1rem;
  width: 216px;
  height: 52px;
  border-radius: 6px;
  background-color: ${({ colors }) => colors.default};
  border: ${({ colors, disabled }) => (disabled ? 'none' : `1px solid ${colors.default}`)};
  color: ${({ colors }) => colors.font};
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
