/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { MarketTableContext } from '../factory/useTable';
import { EditableWrapper } from './EditableWrapper';
import Fonts from '../../../../../fonts';
import { NAVY, GRAY } from '../../../../../colors';

export const TableBody: React.FC = () => {
  const {
    tableUIState: { editable, editIndex, dataList },
  } = useContext(MarketTableContext);

  return (
    <TBody>
      {dataList.map(
        ({ id, name, standard, totalAmount, prices: { row, middle, high }, comment }, index) => (
          <EditableWrapper
            key={id}
            open={editable && editIndex === index}
            editable={editable}
            index={index}
            name={name}
            standard={standard}
            totalAmount={totalAmount}
            row={row}
            middle={middle}
            high={high}
            comment={comment}
          />
        ),
      )}
    </TBody>
  );
};

const TBody = styled.tbody`
  ${Fonts['300']}
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.59px;
  color: ${NAVY.default};
  background-color: ${GRAY.default};
  padding: 0;
  margin: 0;
  border: unset;
  text-align: center;
`;
