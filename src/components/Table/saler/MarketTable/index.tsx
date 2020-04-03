/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { Data } from './factory/useTable';
import { EditableTableState } from './factory/useEditableTable';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { Provider } from './Provider';
import { Event } from '../../../../@types/EventEmitter.d';

export * from './factory/useTable';
export type FormValues = EditableTableState;

export type MarketTableProps = {
  renderData?: Data[];
  onClickEdit?: (e: Event['click'], index: number) => void;
  onClickEditComplete?: (e: Event['click'], index: number, forms: EditableTableState) => void;
  onCancel?: (e: Event['click'] | Event['clickDiv'], index: number) => void;
};

const MarketTable: React.FC<MarketTableProps> = props => (
  <Provider {...props}>
    <Table>
      <TableHeader />
      <TableBody />
    </Table>
  </Provider>
);

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
