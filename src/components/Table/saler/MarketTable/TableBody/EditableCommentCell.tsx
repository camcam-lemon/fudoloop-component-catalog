import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import TextField from '../../../../TextField/MarketField';
import Button from '../../../../Button/saler/Base';
import { MarketTableContext } from '../factory/useTable';
import { EditableTableFormContext, changeFormValue } from '../factory/useEditableTable';
import { Event } from '../../../../../@types/EventEmitter.d';

type Props = {
  open: boolean;
  value?: string | number;
  label: string;
  id: string;
  placeholder: string;
};

function useTextField() {
  const {
    forms: { comment },
    changeForm,
  } = useContext(EditableTableFormContext);
  const onChange = useCallback(
    (e: Event['change']) => {
      e.stopPropagation();
      changeForm(changeFormValue({ prop: 'comment', value: e.target.value }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    value: comment,
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
  const {
    action: { onClose, onComplete },
  } = useContext(MarketTableContext);
  const { value, onChange } = useTextField();

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
          <ActionButton color="gray" onClick={onClose}>
            キャンセル
          </ActionButton>
          <Margin />
          <ActionButton onClick={onComplete}>市況を公開する</ActionButton>
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
