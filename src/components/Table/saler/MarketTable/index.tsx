/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { Provider } from './Provider';
import { Event } from '../../../../@types/EventEmitter.d';

export type MarketTableProps = {
  renderData?: Data[];
  onClickEdit?: (e: Event['click'], index: number) => void;
  onClickEditComplete?: (e: Event['click'], index: number) => void;
};

export interface Data {
  id: string;
  name: string;
  standard: string | null;
  totalAmount: number | null;
  prices: {
    row: number | null;
    middle: number | null;
    high: number | null;
  };
  comment: string;
}

function MarketTable(props: MarketTableProps) {
  return (
    <Provider {...props}>
      <Table cellPadding="0">
        <TableHeader />
        <TableBody />
      </Table>
    </Provider>
  );
}

const Table = styled.table`
  padding: 0;
  margin: 0;
  border: unset;
  outline: unset;
  border-spacing: 0;
  border-collapse: collapse;
  min-width: 660px;
`;

export default MarketTable;
