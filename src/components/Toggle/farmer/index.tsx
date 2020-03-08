import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { GRAY, WHITE, Color, ColorPreset } from '../../../colors';
import { getColorPreset } from '../../util';
import { Event } from '../../../@types/EventEmitter.d';

export type ToggleProps = {
  /** 押下されたかどうかの真偽値 */
  checked?: boolean;
  /** fudoloopのカラープリセット */
  color?: Color;
  /** 使用可否 */
  disabled?: boolean;
  /** カスタムスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
  /** トグルを押した時に実行される関数 */
  onChange?: (e: Event['change']) => void;
};
type StyledProps = {
  disabled: boolean;
  checked: boolean;
  colors: ColorPreset;
};

const getBgColor = ({ disabled, checked, colors }: StyledProps) => {
  if (disabled) return GRAY.default;
  return checked ? colors.default : GRAY.press;
};

function useToggle(
  checked: boolean,
  disabled: boolean,
  onChange?: ToggleProps['onChange'],
): [boolean, (e: Event['change']) => void] {
  const [value, setValue] = useState(checked);
  const onCheck = useCallback(
    (e: Event['change']) => {
      if (!disabled) {
        setValue(e.target.checked);
        if (onChange) onChange(e);
      }
    },
    [onChange, disabled],
  );

  return [value, onCheck];
}

function Toggle({
  checked = false,
  color = 'green',
  disabled = false,
  styles,
  className,
  onChange,
}: ToggleProps) {
  const [value, onCheck] = useToggle(checked, disabled, onChange);
  const colors = getColorPreset(color);

  return (
    <Container disabled={disabled} style={styles} className={className}>
      <Circle checked={value} disabled={disabled}>
        <Skelton checked={value} onChange={onCheck} />
      </Circle>
      <Track checked={value} colors={colors} disabled={disabled} />
    </Container>
  );
}

const Container = styled.span<{ disabled?: boolean }>`
  position: relative;
  display: inline-flex;
  width: 56px;
  height: 32px;
  align-items: center;
  vertical-align: middle;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
`;
const Circle = styled.span<{ checked: boolean; disabled: boolean }>`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 4px;
  border: unset;
  background-color: ${({ disabled }) => (disabled ? GRAY.hover : WHITE)};
  border-radius: 50%;
  z-index: 6;
  cursor: inherit;
  transition: 0.2s;

  ${({ checked }) =>
    checked &&
    css`
      transform: translateX(24px);
    `}
`;

const Skelton = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -4px;
  right: 0;
  margin: auto;
  width: 230%;
  height: 125%;
  z-index: 5;
  opacity: 0;
  cursor: inherit;

  :checked {
    transform: translateX(-25px);
  }
`;
const Track = styled.label<StyledProps>`
  position: absolute;
  width: 56px;
  height: 32px;
  background-color: ${getBgColor};
  border-radius: 14.5px;
  cursor: inherit;
`;

export default Toggle;
