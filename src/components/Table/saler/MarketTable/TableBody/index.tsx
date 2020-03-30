/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { MarketTableContext } from '../Provider';
import { EditIconCell } from './EditIconCell';
import Fonts from '../../../../../fonts';
import { NAVY, GRAY } from '../../../../../colors';

export const TableBody: React.FC = () => {
  const { dataList } = useContext(MarketTableContext);
  return (
    <TBody>
      {dataList.map(
        ({ id, name, standard, totalAmount, prices: { row, middle, high }, comment }) => (
          <React.Fragment key={id}>
            <Tr>
              <Td rowSpan={2}>
                <EditIconCell />
              </Td>
              <Td rowSpan={2}>
                <div>
                  <div>{name}</div>
                  {standard && <ElipseText width={180}>（{standard}）</ElipseText>}
                </div>
              </Td>
              <Td>{totalAmount || '-'}</Td>
              <Td>{row || '-'}</Td>
              <Td>{middle || '-'}</Td>
              <Td>{high || '-'}</Td>
            </Tr>
            <Tr>
              <Td second colSpan={4}>
                <ElipseText width={392}>{comment}</ElipseText>
              </Td>
            </Tr>
          </React.Fragment>
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
const Tr = styled.tr`
  height: 32px;
`;
const Td = styled.td<{ second?: boolean }>`
  box-sizing: border-box;
  vertical-align: middle;
  padding: 0;
  border: 1px solid ${GRAY.hover};
  width: 100px;
  text-align: ${({ second }) => (second ? 'left' : 'center')};
`;
const ElipseText = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
`;
