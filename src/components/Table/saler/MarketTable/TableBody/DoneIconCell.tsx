import React from 'react';
import styled from 'styled-components';
import DoneIcon from '../../../../Icons/Done';
import { OVERLAY } from '../../../../../colors';
import { Event } from '../../../../../@types/EventEmitter.d';

type Props = {
  onClick: (index: number) => (e: Event['click']) => void;
  index: number;
};

export const DoneIconCell: React.FC<Props> = React.memo(({ index, onClick }) => {
  const onClickIcon = onClick(index);

  return (
    <IconButton onClick={onClickIcon}>
      <DoneIcon />
    </IconButton>
  );
});

const IconButton = styled.button`
  right: 24px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    box-shadow: 0 0 0 10px ${OVERLAY['10%']}, 0 0 0 20px ${OVERLAY['10%']} inset;
  }
  :active {
    box-shadow: 0 0 0 10px ${OVERLAY['30%']}, 0 0 0 20px ${OVERLAY['30%']} inset;
  }

  :focus {
    outline: none;
  }
`;
