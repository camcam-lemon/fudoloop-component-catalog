import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { getColorPreset, safetyNumberToString, calcSize } from '../util';
import { GRAY, Color } from '../../colors';
import { Event } from '../../@types/EventEmitter.d';

type NativeInputProps = JSX.IntrinsicElements['input'];
type StyledInputProps = Omit<NativeInputProps, 'ref' | 'type'>;

export type RadioProps = {
  /** ラジオボタンに設定する値 */
  value?: NativeInputProps['value'];
  /** ラジオボタンの名前 */
  name?: NativeInputProps['name'];
  /** ラジオボタンのID */
  id?: NativeInputProps['id'];
  /** ラジオボタンをチェック済みにするか否かの真偽値 */
  checked?: boolean;
  /** ラジオボタンの横に表示するテキスト */
  label?: string;
  /** ラジオボタンのサイズ */
  size?: string | number;
  /** fudoloopのカラープリセット */
  color?: Color;
  /** ラジオボタンとテキストのスペース */
  space?: string | number;
  /** 使用可否 */
  disabled?: boolean;
  /** ラジオボタンに渡すその他のprops */
  inputProps?: StyledInputProps;
  /** カスタムスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
  /** check時のイベント関数 */
  onChange?: (e: Event['change']) => void;
};

const borderColor = ({
  checked,
  disabled,
  color,
}: {
  checked?: boolean;
  disabled?: boolean;
  color: string;
}) => {
  let bc = GRAY.press;
  if (disabled) bc = GRAY.default;
  if (checked) bc = color;
  return `1px solid ${bc}`;
};

function useRadio({ checked: pChecked, onChange }: Pick<RadioProps, 'checked' | 'onChange'>) {
  const [checked, setChecked] = useState(!!pChecked);
  const onCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      if (onChange) onChange(e);
    },
    [onChange],
  );

  useEffect(() => {
    setChecked(!!pChecked);
  }, [pChecked]);

  return {
    checked,
    onCheck,
  };
}

function Base({
  value,
  name,
  id,
  checked = false,
  label,
  size = '24px',
  color = 'green',
  space = '15px',
  disabled = false,
  inputProps,
  styles,
  className,
  onChange,
}: RadioProps) {
  const { checked: sChecked, onCheck } = useRadio({ checked, onChange });
  const colors = getColorPreset(color);
  const iconSize = calcSize(size, 2 / 3);
  const textSpace = safetyNumberToString(space);

  return (
    <Label htmlFor={id} disabled={disabled}>
      {label && <Text space={textSpace}>{label}</Text>}
      <RadioContainer size={size}>
        <Skelton
          value={value}
          name={name}
          id={id}
          checked={sChecked}
          onChange={onCheck}
          disabled={disabled}
          {...inputProps}
        />
        <Radio
          checked={sChecked}
          disabled={disabled}
          color={colors.default}
          style={styles}
          className={className}
        >
          <Icon color={colors.default} size={iconSize} />
        </Radio>
      </RadioContainer>
    </Label>
  );
}

const Label = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
`;
const RadioContainer = styled.span<{ size?: string | number }>`
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
`;
const Icon = styled.span<{ color: string; size?: string }>`
  display: inline-block;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;
const Skelton = styled.input.attrs({ type: 'radio' })`
  width: inherit;
  height: inherit;
  margin: 0;
  padding: 0;
  opacity: 0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
`;
const Radio = styled.span<{ checked: boolean; disabled?: boolean; color: string }>`
  display: inline-block;
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  border: ${({ checked, disabled, color }) => borderColor({ checked, disabled, color })};
  box-sizing: border-box;
  user-select: none;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;
const Text = styled.span<{ space: string }>`
  margin-right: ${({ space }) => space};
`;

export default Base;
