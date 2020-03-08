import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import EnabledIcon from '../../../Icons/Checked';
import DisabledIcon from '../../../Icons/Cross';
import {
  RED,
  RED_ALPHA,
  GRAY,
  WHITE,
  OVERLAY,
  Color,
  ColorPreset,
  AlphaColorPreset,
} from '../../../../colors';
import Fonts from '../../../../fonts';
import { getColorPreset, getAlphaColorPreset } from '../../../util';
import { Event } from '../../../../@types/EventEmitter.d';

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
  alphaColors?: AlphaColorPreset;
};

const colorManager = (type: 'default' | 'hover' | 'press') => ({
  disabled,
  checked,
  colors,
  alphaColors,
}: StyledProps) => {
  if (disabled || !alphaColors) return GRAY.hover;
  const preset = checked
    ? {
        default: colors.default,
        hover: alphaColors['30%'],
        press: alphaColors['50%'],
      }
    : {
        default: RED.default,
        hover: RED_ALPHA['30%'],
        press: RED_ALPHA['50%'],
      };

  switch (type) {
    case 'default': {
      return preset.default;
    }
    case 'hover': {
      return `0 0 0 10px ${preset.hover}, 0 0 0 40px ${preset.hover} inset`;
    }
    case 'press': {
      return `0 0 0 10px ${preset.press}, 0 0 0 40px ${preset.press} inset`;
    }
    default: {
      return GRAY.hover;
    }
  }
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

function AccountToggle({
  checked = true,
  color = 'blue',
  disabled = false,
  styles,
  className,
  onChange,
}: ToggleProps) {
  const [value, onCheck] = useToggle(checked, disabled, onChange);
  const colors = getColorPreset(color);
  const alphaColors = getAlphaColorPreset(color);

  return (
    <Container disabled={disabled} style={styles} className={className}>
      <Circle checked={value} disabled={disabled} colors={colors} alphaColors={alphaColors}>
        <Skelton checked={value} onChange={onCheck} />
        <Icon>
          {value ? (
            <EnabledIcon disabled={disabled} fill={colors.default} />
          ) : (
            <DisabledIcon fill={RED.default} />
          )}
        </Icon>
      </Circle>
      <Track>
        <AccountState checked={value} disabled={disabled} colors={colors}>
          {value ? '有効' : '無効'}
        </AccountState>
      </Track>
    </Container>
  );
}

const Container = styled.span<{ disabled?: boolean }>`
  position: relative;
  display: inline-flex;
  width: 96px;
  height: 40px;
  align-items: center;
  vertical-align: middle;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: pointer;
`;
const Icon = styled.span<{ size?: string | number }>`
  display: inline-block;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 20px;
  height: 20px;
`;

const Circle = styled.span<StyledProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  left: -20px;
  border: 1px solid ${colorManager('default')};
  background-color: ${({ disabled }) => (disabled ? GRAY.default : WHITE)};
  border-radius: 50%;
  z-index: 6;
  cursor: inherit;
  transition: 0.2s;

  :hover {
    box-shadow: ${colorManager('hover')};
  }

  :active {
    box-shadow: ${colorManager('press')};
  }

  ${({ checked }) =>
    checked &&
    css`
      transform: translateX(70px);
    `}
`;

const Skelton = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  right: 0;
  margin: auto;
  width: 230%;
  height: 125%;
  z-index: 5;
  opacity: 0;
  cursor: inherit;

  :checked {
    transform: translateX(-40px);
  }
`;
const Track = styled.label`
  position: absolute;
  display: inline-flex;
  width: 70px;
  height: 28px;
  background-color: ${GRAY.default};
  border-radius: 10px;
  box-shadow: 0px 1px 1px 0px ${OVERLAY['50%']} inset;
  align-items: center;
  cursor: inherit;
`;
const AccountState = styled.span<StyledProps>`
  ${Fonts['300']}
  position: absolute;
  font-size: 10px;
  color: ${({ disabled, colors }) => (disabled ? GRAY.hover : colors.default)};
  letter-spacing: -0.25px;
  opacity: 0.7;
  transition: 0.2s;
  transform: translateX(10px);

  ${({ checked }) =>
    !checked &&
    css`
      transform: translateX(40px);
      color: ${RED.default};
    `}
`;

export default AccountToggle;
