import React from 'react';
import { IconButton } from './IconButton';
import DoneIcon from '../../../../../Icons/Done';
import { Event } from '../../../../../../@types/EventEmitter.d';

type Props = {
  onClick: (e: Event['click']) => void;
};

export const DoneButton: React.FC<Props> = React.memo(({ onClick }) => (
  <IconButton onClick={onClick}>
    <DoneIcon />
  </IconButton>
));
