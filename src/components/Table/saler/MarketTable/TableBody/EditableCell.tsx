import React, { useCallback, useContext } from 'react';
import TextField from '../../../../TextField/MarketField';
import {
  EditableTableFormContext,
  changeFormValue,
  EditableTableState,
} from '../factory/useEditableTable';
import { Event } from '../../../../../@types/EventEmitter.d';

type IdList = Pick<EditableTableState, 'totalAmount' | 'row' | 'middle' | 'high'>;
type Id = keyof IdList;

type Props = {
  open: boolean;
  value?: string | number;
  label: string;
  id: Id;
  placeholder: string;
};

function useTextField(id: Props['id']) {
  const { forms, changeForm } = useContext(EditableTableFormContext);
  const onChange = useCallback(
    (e: Event['change']) => {
      e.stopPropagation();
      changeForm(changeFormValue({ prop: id, value: e.target.value }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  return {
    value: forms[id],
    onChange,
  };
}

export const EditableCell: React.FC<Props> = ({ open, value: pValue, label, id, placeholder }) => {
  const { value, onChange } = useTextField(id);

  if (open) {
    return (
      <TextField
        label={label}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }

  return <>{pValue || '-'}</>;
};
