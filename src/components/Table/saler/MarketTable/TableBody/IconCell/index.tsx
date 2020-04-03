/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { DoneButton } from './DoneButton';
import { EditButton } from './EditButton';
import { MarketTableContext } from '../../factory/useTable';

type Props = {
  open: boolean;
  index: number;
  disabled: boolean;
};

export const IconCell: React.FC<Props> = React.memo(({ open, index, disabled }) => {
  const {
    action: { onEdit, onComplete },
  } = useContext(MarketTableContext);

  return open ? (
    <DoneButton onClick={onComplete} />
  ) : (
    <EditButton onClick={onEdit} index={index} disabled={disabled} />
  );
});
