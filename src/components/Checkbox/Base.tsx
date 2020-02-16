/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { getSvgColor, safetyNumberToString, calcIconSize } from '../util';
import { GRAY, Color } from '../../colors';

type NativeInputProps = JSX.IntrinsicElements['input'];
type StyledInputProps = Omit<NativeInputProps, 'ref' | 'type'>;

export type CheckboxProps = {
  /** チェックボックスの状態 */
  checked?: boolean;
  /** チェックボックスのサイズ */
  size?: string | number;
  /** fudoloopのカラープリセット */
  color?: Color;
  /** チェックボックスとテキストのスペース */
  space?: string | number;
  /** 使用可否 */
  disabled?: boolean;
  /** チェックボックスに渡すその他のprops */
  inputProps?: StyledInputProps;
  /** カスタムスタイル */
  styles?: React.CSSProperties;
  /** check時のイベント関数 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** チェックボックスの横に表示するテキスト */
  children?: React.ReactNode;
};

function useChecbox({ checked: pChecked, onChange }: Pick<CheckboxProps, 'checked' | 'onChange'>) {
  const [checked, setChecked] = useState(!!pChecked);
  const onCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      if (onChange) onChange(e);
    },
    [onChange],
  );

  return {
    value: checked,
    onCheck,
  };
}

function Base({
  checked = false,
  size,
  disabled = false,
  color = 'green',
  space = '15px',
  inputProps,
  styles,
  onChange,
  children,
}: CheckboxProps) {
  const { value, onCheck } = useChecbox({ checked, onChange });
  const fillColor = getSvgColor(disabled, undefined, color);
  const iconSize = calcIconSize(size);
  const textSpace = safetyNumberToString(space);

  return (
    <Label disabled={disabled}>
      <CheckboxContainer size={size}>
        <Skelton checked={value} onChange={onCheck} disabled={disabled} {...inputProps} />
        <Checkbox checked={value} disabled={disabled} style={styles}>
          <Icon viewBox="0 0 17 13" size={iconSize}>
            <path
              fill={fillColor}
              fillRule="evenodd"
              d="M14.422.207a.683.683 0 0 0-.98 0L6.318 7.478a.683.683 0 0 1-.98 0L2.806 4.894a.682.682 0 0 0-.98 0L.204 6.552a.717.717 0 0 0 0 1l5.134 5.241c.271.276.71.276.98 0l9.73-9.93a.716.716 0 0 0 0-1L14.422.208z"
            />
          </Icon>
        </Checkbox>
      </CheckboxContainer>
      {children && <Text space={textSpace}>{children}</Text>}
    </Label>
  );
}

const Label = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
`;
const CheckboxContainer = styled.span<{ size?: string | number }>`
  width: ${({ size }) => size || '24px'};
  height: ${({ size }) => size || '24px'};
`;
const Icon = styled.svg<{ size?: string | number }>`
  display: inline-block;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: ${({ size }) => size || '17px'};
  height: ${({ size }) => size || '13px'};
`;
const Skelton = styled.input.attrs({ type: 'checkbox' })`
  width: inherit;
  height: inherit;
  margin: 0;
  padding: 0;
  opacity: 0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
`;
const Checkbox = styled.span<{ checked: boolean; disabled?: boolean }>`
  display: inline-block;
  position: relative;
  width: inherit;
  height: inherit;
  border-radius: 4px;
  background-color: ${GRAY.default};
  border: ${({ disabled }) => (disabled ? `1px solid ${GRAY.default}` : `1px solid ${GRAY.press}`)};
  box-sizing: border-box;
  user-select: none;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;
const Text = styled.span<{ space: string }>`
  margin-left: ${({ space }) => space};
`;

export default Base;
