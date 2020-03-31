/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { MarketTableContext } from '../Provider';
import { EditIconCell } from './EditIconCell';
import { DoneIconCell } from './DoneIconCell';
import TextField from '../../../../TextField/MarketField';
import Fonts from '../../../../../fonts';
import { NAVY, GRAY } from '../../../../../colors';
// import { MarketTableProps } from '..';
// import { Event } from '../../../../../@types/EventEmitter.d';

export const TableBody: React.FC = () => {
  const {
    dataList,
    editable,
    editIndex,
    action: { onEdit, onComplete },
  } = useContext(MarketTableContext);

  return (
    <TBody>
      {dataList.map(
        ({ id, name, standard, totalAmount, prices: { row, middle, high }, comment }, index) => (
          <React.Fragment key={id}>
            <Tr open={editable && editIndex === index}>
              <Td rowSpan={2}>
                {editable && editIndex === index ? (
                  <DoneIconCell onClick={onComplete} index={index} />
                ) : (
                  <EditIconCell onClick={onEdit} index={index} />
                )}
              </Td>
              <Td rowSpan={2}>
                <div>
                  <div>{name}</div>
                  {standard && <ElipseText width={180}>（{standard}）</ElipseText>}
                </div>
              </Td>
              <Td>
                {editable && editIndex === index ? (
                  <div>
                    <TextField
                      label="入荷量"
                      id="total-amount"
                      value={totalAmount}
                      placeholder="0"
                    />
                  </div>
                ) : (
                  totalAmount || '-'
                )}
              </Td>
              <Td>{row || '-'}</Td>
              <Td>{middle || '-'}</Td>
              <Td>{high || '-'}</Td>
            </Tr>
            <Tr second open={editable && editIndex === index}>
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

type CssProps = {
  second?: boolean;
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
const Tr = styled.tr<{ second?: boolean; open: boolean }>`
  height: 32px;
  vertical-align: middle;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  ${({ open }) =>
    open &&
    css<CssProps>`
      height: ${({ second }) => (second ? '152px' : '64px')};
    `}
`;
const Td = styled.td<{ second?: boolean }>`
  box-sizing: border-box;
  vertical-align: middle;
  padding: 0 !important;
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
