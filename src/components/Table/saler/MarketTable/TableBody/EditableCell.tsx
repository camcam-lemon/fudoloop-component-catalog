import React, { useState, useCallback } from 'react';
import TextField from '../../../../TextField/MarketField';
import { Event } from '../../../../../@types/EventEmitter.d';

type Props = {
  open: boolean;
  value?: string | number;
  label: string;
  id: string;
  placeholder: string;
};

function useTextField(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: Event['change']) => {
    e.stopPropagation();
    setValue(e.target.value);
  }, []);

  return {
    value,
    onChange,
  };
}

export const EditableCell: React.FC<Props> = ({ open, value: pValue, label, id, placeholder }) => {
  const { value, onChange } = useTextField(String(pValue || ''));

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
