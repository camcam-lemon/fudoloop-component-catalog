import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import TextField from '../../../../TextField/MarketField';
import Button from '../../../../Button/saler/Base';
import { Event } from '../../../../../@types/EventEmitter.d';

type Props = {
  open: boolean;
  value?: string | number;
  label: string;
  id: string;
  placeholder: string;
};

function useTextField(initialValue?: string) {
  const [value, setValue] = useState(initialValue || '');
  const onChange = useCallback((e: Event['changeTextArea']) => {
    e.stopPropagation();
    setValue(e.target.value);
  }, []);

  return {
    value,
    onChange,
  };
}

export const EditableCommentCell: React.FC<Props> = ({
  open,
  value: pValue,
  label,
  id,
  placeholder,
}) => {
  const { value, onChange } = useTextField(String(pValue));

  if (open) {
    return (
      <div>
        <TextField
          multline
          width="382px"
          height="60px"
          align="left"
          label={label}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <ActionArea>
          <ActionButton color="gray">キャンセル</ActionButton>
          <Margin />
          <ActionButton>市況を公開する</ActionButton>
        </ActionArea>
      </div>
    );
  }

  return <ElipseText width={392}>{pValue}</ElipseText>;
};

const ElipseText = styled.div<{ width: number }>`
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
`;
const ActionButton = styled(Button)`
  width: 150px;
  height: 36px;
`;
const ActionArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;
const Margin = styled.div`
  margin: 0 5px;
`;
