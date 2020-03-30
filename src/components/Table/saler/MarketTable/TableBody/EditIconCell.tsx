import React from 'react';
import styled from 'styled-components';
import EditIcon from '../../../../Icons/Edit';
import { OVERLAY } from '../../../../../colors';

export const EditIconCell: React.FC = React.memo(() => {
  return (
    <Switching>
      <EditIcon />
    </Switching>
  );
});

const Switching = styled.button`
  right: 24px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

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
