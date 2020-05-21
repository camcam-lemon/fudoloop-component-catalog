import * as React from 'react';
import styled from 'styled-components';
import { Color, ColorPreset, GRAY, NAVY } from '../../../colors';
import Fonts from '../../../fonts';
import { getColorPreset } from '../../util';
import { Event } from '../../../@types/EventEmitter.d';

type NativeInputProps = JSX.IntrinsicElements['textarea'];

export type TextareaProps = {
  /** テキストフィールドに設定する値 */
  value?: NativeInputProps['value'];
  /** テキストフィールドの名前 */
  name?: NativeInputProps['name'];
  /** テキストフィールドのID */
  id?: NativeInputProps['id'];
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
  onChange?: (e: Event['changeTextArea']) => void;
};

function useTextFiled(
  pValue: TextareaProps['value'],
  pChange: TextareaProps['onChange'],
): [NativeInputProps['value'], (e: Event['changeTextArea']) => void] {
  const [value, setValue] = React.useState(pValue);

  const onChange = React.useCallback(
    (e: Event['changeTextArea']) => {
      setValue(e.target.value);
      if (pChange) pChange(e);
    },
    [pChange],
  );

  React.useEffect(() => {
    setValue(pValue);
  }, [pValue]);

  return [value, onChange];
}

function Textarea({
  value: pValue,
  id,
  name,
  disabled,
  placeholder,
  color = 'green',
  styles,
  className,
  onChange: pChange,
  ...props
}: TextareaProps) {
  const colors = getColorPreset(color);
  const [value, onChange] = useTextFiled(pValue, pChange);

  return (
    <Input
      value={value}
      id={id}
      name={name}
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

const Input = styled.textarea<{ colors: ColorPreset }>`
  ${Fonts.input.textField}
  width: 560px;
  height: 100px;
  background-color: ${GRAY.default};
  color: ${NAVY.default};
  margin: 0;
  padding: 4px 12px;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid ${GRAY.default};
  vertical-align: bottom; /* textareaの下にできる余白を消すための指定 */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: text;
  resize: none;

  :focus {
    border: 1px solid ${({ colors }) => colors.default};
  }

  :disabled {
    pointer-events: none;
    background-color: ${GRAY.hover};
    color: ${GRAY.default};
  }

  ::placeholder {
    color: ${GRAY.hover};
  }
`;

export default Textarea;
