import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Color, ColorPreset, GRAY, NAVY } from '../../../colors';
import Fonts from '../../../fonts';
import { getColorPreset } from '../../util';
import { Event } from '../../../@types/EventEmitter.d';

type NativeInputProps = JSX.IntrinsicElements['input'];

export type TextFieldProps = {
  /** テキストフィールドに設定する値 */
  value?: NativeInputProps['value'];
  /** テキストフィールドの名前 */
  name?: NativeInputProps['name'];
  /** テキストフィールドのID */
  id?: NativeInputProps['id'];
  /** テキストフィールドのタイプ */
  type?: NativeInputProps['type'];
  /** 使用可否 */
  disabled?: NativeInputProps['disabled'];
  /** プレースホルダー */
  placeholder?: NativeInputProps['placeholder'];
  /** fudoloopのカラープリセット */
  color?: Color;
  /** カスタムスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
  /** テキスト入力時のイベント関数 */
  onChange?: (e: Event['change']) => void;
};

function useTextFiled(
  pValue: TextFieldProps['value'],
  pChange: TextFieldProps['onChange'],
): [NativeInputProps['value'], (e: Event['change']) => void] {
  const [value, setValue] = useState(pValue);

  const onChange = useCallback(
    (e: Event['change']) => {
      setValue(e.target.value);
      if (pChange) pChange(e);
    },
    [pChange],
  );

  useEffect(() => {
    setValue(pValue);
  }, [pValue]);

  return [value, onChange];
}

function TextFiled({
  value: pValue,
  id,
  name,
  type = 'text',
  disabled,
  placeholder,
  color = 'green',
  styles,
  className,
  onChange: pChange,
  ...props
}: TextFieldProps) {
  const colors = getColorPreset(color);
  const [value, onChange] = useTextFiled(pValue, pChange);

  return (
    <Input
      value={value}
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      colors={colors}
      style={styles}
      className={className}
      onChange={onChange}
      {...props}
    />
  );
}

const Input = styled.input<{ colors: ColorPreset }>`
  ${Fonts['300']}
  width: 360px;
  height: 32px;
  font-size: 1rem;
  background-color: ${GRAY.default};
  color: ${NAVY.default};
  margin: 0;
  padding: 0 8px;
  border: 1px solid ${GRAY.default};
  outline: none;
  border-radius: 4px;
  line-height: 20px;
  letter-spacing: -0.4px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  :focus {
    border: 1px solid ${({ colors }) => colors.default};
  }

  :disabled {
    pointer-events: none;
    background-color: ${GRAY.hover};
    color: ${GRAY.default};
  }

  ::-webkit-input-placeholder {
    color: ${GRAY.press};
    letter-spacing: -0.35px;
  }
`;

export default TextFiled;
