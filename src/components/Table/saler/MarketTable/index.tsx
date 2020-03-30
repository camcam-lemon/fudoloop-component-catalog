/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { Provider } from './Provider';

export type MarketTableProps = {
  renderData: Data[];
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

function MarketTable({ renderData }: MarketTableProps) {
  return (
    <Provider renderData={renderData}>
      <Table>
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
  border-spacing: 1px;
  border-collapse: collapse;
  min-width: 660px;
`;

export default MarketTable;
