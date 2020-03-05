import React from 'react';
import styled from 'styled-components';
import { getColorPreset } from '../../util/getColorPreset';
import { GRAY, NAVY, ColorPreset } from '../../../colors';
import { Event } from '../../../@types/EventEmitter.d';

export type BaseButtonProps = {
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
  /** その他のボタンpross */
};

function BaseButton({
  styles,
  className,
  disabled = false,
  onClick,
  children,
  ...props
}: BaseButtonProps) {
  const colors = getColorPreset('gray');
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
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
  min-width: 120px;
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
