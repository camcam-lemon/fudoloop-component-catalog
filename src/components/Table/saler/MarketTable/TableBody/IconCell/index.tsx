/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { DoneButton } from './DoneButton';
import { EditButton } from './EditButton';
import { MarketTableContext } from '../../Provider';

type Props = {
  open: boolean;
  index: number;
};

export const IconCell: React.FC<Props> = React.memo(({ open, index }) => {
  const {
    action: { onEdit, onComplete },
  } = useContext(MarketTableContext);

  return open ? (
    <DoneButton onClick={onComplete} index={index} />
  ) : (
    <EditButton onClick={onEdit} index={index} />
  );
});
