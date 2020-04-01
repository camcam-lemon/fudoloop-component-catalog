import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { GRAY, Color } from '../../../colors';
import Fonts from '../../../fonts';
// eslint-disable-next-line import/no-cycle
import Input from './Input';
import { getColorPreset } from '../../util';

type NativeInputProps = JSX.IntrinsicElements['input'];
type Event = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type MarketFieldProps = {
  /** テキストフィールドに設定する値 */
  value?: NativeInputProps['value'];
  /** テキストフィールドの名前 */
  name?: NativeInputProps['name'];
  /** テキストフィールドのID */
  id?: NativeInputProps['id'];
  /** テキストフィールドの入力ラベル */
  label?: NativeInputProps['value'];
  /** 使用可否 */
  disabled?: NativeInputProps['disabled'];
  /** プレースホルダー */
  placeholder?: NativeInputProps['placeholder'];
  /** fudoloopのカラープリセット */
  color?: Color;
  /** textareaにするか否かの真偽値 */
  multline?: boolean;
  /** テキストエアリアの幅 */
  width?: React.CSSProperties['width'];
  /** テキストエアリアの高さ */
  height?: React.CSSProperties['height'];
  /** テキストの表示位置 */
  align?: React.CSSProperties['textAlign'];
  /** カスタムスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
  /** テキスト入力時のイベント関数 */
  onChange?: (e: any) => void;
};

function useTextFiled(pValue: MarketFieldProps['value'], pChange: MarketFieldProps['onChange']) {
  const [value, setValue] = useState(pValue);

  const onChange = useCallback(
    (e: Event) => {
      setValue(e.target.value);
      if (pChange) pChange(e);
    },
    [pChange],
  );

  useEffect(() => {
    setValue(pValue);
  }, [pValue]);

  return { value, onChange };
}

function useFocus() {
  const [focused, setFocused] = useState(false);
  const onFocus = useCallback(() => setFocused(true), []);
  const onBlur = useCallback(() => setFocused(false), []);

  return {
    focused,
    onFocus,
    onBlur,
  };
}

function MarketField({
  value: pValue,
  name,
  id,
  label,
  disabled = false,
  placeholder,
  color = 'green',
  multline = false,
  width = '80px',
  height,
  align = 'right',
  styles,
  className,
  onChange: pChange,
}: MarketFieldProps) {
  const { value, onChange } = useTextFiled(pValue, pChange);
  const { focused, onFocus, onBlur } = useFocus();
  const colors = getColorPreset(color);

  return (
    <Container className={className} style={styles}>
      <Label htmlFor={id} color={colors.default} focused={focused} disabled={disabled}>
        {label}
      </Label>
      <InputContainer color={colors.default} width={width} focused={focused} disabled={disabled}>
        <Input
          multline={multline}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          color={colors.default}
          focused={focused}
          align={align}
          height={height}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
        />
      </InputContainer>
    </Container>
  );
}

type StyledProps = {
  color: string;
  focused: boolean;
  disabled: boolean;
  width?: React.CSSProperties['width'];
};

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
  vertical-align: top;
`;
const Label = styled.label<StyledProps>`
  ${Fonts[300]}
  text-align: left;
  color: ${({ color, focused }) => (focused ? color : GRAY.press)};
  font-size: 10px;
  letter-spacing: -0.4px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${GRAY.hover};
    `}
`;
const InputContainer = styled.div<StyledProps>`
  position: relative;
  width: ${({ width }) => width};
  margin-left: 4px;
  box-sizing: border-box;

  ::after {
    content: '';
    position: absolute;
    width: inherit;
    border-bottom: 1px solid ${({ color, focused }) => (focused ? color : GRAY.press)};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    box-sizing: inherit;
    pointer-events: none;

    ${({ disabled }) =>
      disabled &&
      css`
        border-bottom: 1px dashed ${GRAY.hover};
      `}
  }
`;

export default MarketField;
