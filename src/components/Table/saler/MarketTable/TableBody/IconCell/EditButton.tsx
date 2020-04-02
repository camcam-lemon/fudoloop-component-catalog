import React from 'react';
import { IconButton } from './IconButton';
import EditIcon from '../../../../../Icons/Edit';
import { Event } from '../../../../../../@types/EventEmitter.d';

type Props = {
  onClick: (index: number) => (e: Event['click']) => void;
  index: number;
  disabled: boolean;
};

export const EditButton: React.FC<Props> = React.memo(({ index, disabled, onClick }) => {
  return (
    <IconButton onClick={onClick(index)} disabled={disabled}>
      <EditIcon />
    </IconButton>
  );
});
