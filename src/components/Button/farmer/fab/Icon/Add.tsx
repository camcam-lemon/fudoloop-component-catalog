import React from 'react';
import styled from 'styled-components';
import { safetyNumberToString } from '../../../../util';
import { YELLOW, OVERLAY, GRAY, NAVY } from '../../../../../colors';
import { Event } from '../../../../../@types/EventEmitter.d';

export type FabAddProps = {
  /** 使用可否 */
  disabled?: boolean;
  /** 画面右端から移動する数値
   * number型を指定した場合はpx値に変換されます
   * leftに値が指定されていた場合、unsetが指定されます
   * */
  right?: number | string;
  /** 画面左端から移動する数値
   * number型を指定した場合はpx値に変換されます
   * rightに値が指定されていた場合、こちらの値が優先されます
   * */
  left?: number | string;
  /** 画面下部から移動する数値
   * number型を指定した場合はpx値に変換されます */
  bottom?: number | string;
  /** クリック時に実行する関数 */
  onClick?: (e: Event['click']) => void;
  /** カスタムスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
  //   buttonProps?: JSX.IntrinsicElements['button'];
};

function Add({
  disabled = false,
  right = 20,
  left,
  bottom = 10,
  onClick,
  styles,
  className,
  ...props
}: FabAddProps) {
  return (
    <Button
      onClick={onClick}
      right={right}
      left={left}
      bottom={bottom}
      disabled={disabled}
      style={styles}
      className={className}
      {...props}
    >
      <Vertical disabled={disabled} />
      <Horizontal disabled={disabled} />
    </Button>
  );
}

const resolveRight = (left: FabAddProps['left'], right: FabAddProps['right']) => {
  if (left) return 'unset';
  return safetyNumberToString(right);
};

const Button = styled.button<Pick<FabAddProps, 'right' | 'left' | 'bottom'>>`
  position: fixed;
  width: 55px;
  height: 55px;
  right: ${({ right, left }) => resolveRight(left, right)};
  left: ${({ left }) => safetyNumberToString(left)};
  bottom: ${({ bottom }) => safetyNumberToString(bottom)};
  font-family: Hiragino Sans;
  font-size: 1rem;
  background-color: ${YELLOW.default};
  color: ${NAVY.dark};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 1px 2px 4px 0 ${OVERLAY['50%']};
  z-index: 10;

  :disabled {
    background-color: ${GRAY.default};
    color: ${GRAY.hover};
    cursor: default;
  }

  :active {
    background-color: ${YELLOW.press};
  }
  :focus {
    outline: none;
  }
`;
const Vertical = styled.div<{ disabled?: boolean }>`
  position: absolute;
  width: 5px;
  height: 30px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: ${({ disabled }) => (disabled ? GRAY.hover : NAVY.dark)};
  border: none;
`;
const Horizontal = styled.div<{ disabled?: boolean }>`
  position: absolute;
  width: 30px;
  height: 5px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: ${({ disabled }) => (disabled ? GRAY.hover : NAVY.dark)};
  border: none;
`;
Button.displayName = 'Button';
Vertical.displayName = 'Vertical';
Horizontal.displayName = 'Horizontal';

export default Add;
