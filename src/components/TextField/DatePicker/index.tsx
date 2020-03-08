import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Fonts from '../../../fonts';
import { NAVY, Color, ColorPreset, GRAY } from '../../../colors';
import { getColorPreset } from '../../util';
import CalendarIcon from './Calendar.svg';
import { Event } from '../../../@types/EventEmitter.d';

type NativeInputProps = JSX.IntrinsicElements['input'];

export type DatePickerProps = {
  /** テキストフィールドに設定する値 */
  value?: string | Date;
  /** テキストフィールドの名前 */
  name?: NativeInputProps['name'];
  /** テキストフィールドのID */
  id?: NativeInputProps['id'];
  /** テキストフィールドのタイプ */
  type?: 'date' | 'month' | 'week';
  /** 使用可否 */
  disabled?: NativeInputProps['disabled'];
  /** fudoloopのカラープリセット */
  color?: Color;
  /** カスタムスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
  /** 日付選択時のイベント関数 */
  onChange?: (e: Event['change']) => void;
};

const getDateFormat = (initialValue: DatePickerProps['value']) => {
  const value = new Date(initialValue || '');
  const d = Number.isNaN(value.getFullYear()) ? new Date() : value;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
};

function useDatePicker(
  pValue: DatePickerProps['value'],
  pChange: DatePickerProps['onChange'],
): [string, (e: Event['change']) => void] {
  const [value, setValue] = useState(getDateFormat(pValue));
  const onChange = useCallback(
    (e: Event['change']) => {
      setValue(e.target.value);
      if (pChange) pChange(e);
    },
    [pChange],
  );

  useEffect(() => {
    setValue(getDateFormat(pValue));
  }, [pValue]);

  return [value, onChange];
}

function DatePicker({
  type = 'date',
  value: pValue,
  onChange: pChange,
  color = 'green',
  styles,
  className,
  ...props
}: DatePickerProps) {
  const colors = getColorPreset(color);
  const [value, onChange] = useDatePicker(pValue, pChange);

  return (
    <TextField
      type={type}
      value={value}
      colors={colors}
      onChange={onChange}
      style={styles}
      className={className}
      {...props}
    />
  );
}

const TextField = styled.input<{ value: string; colors: ColorPreset }>`
  ${Fonts[500]}
  font-size: 0.875rem;
  position: relative;
  width: 150px;
  height: 40px;
  margin: 10px;
  color: ${NAVY.default};
  background-color: ${GRAY.default};
  border: 1px solid ${GRAY.default};
  outline: none;
  box-sizing: border-box;
  cursor: text;

  :focus {
    border: 1px solid ${({ colors }) => colors.default};
  }

  :disabled {
    pointer-events: none;
    color: ${GRAY.hover};
  }

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0 10px;
  }
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-day-field {
    color: ${({ value }) => (value ? 'inherit' : 'transparent')};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-clear-button {
    -webkit-appearance: none;
  }
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    color: transparent;
    background: url(${CalendarIcon}) no-repeat;
    background-size: 20px;
    padding: 5px;
    right: 5px;
    left: auto;
    opacity: 1;
    cursor: pointer;
  }
`;

export default DatePicker;
