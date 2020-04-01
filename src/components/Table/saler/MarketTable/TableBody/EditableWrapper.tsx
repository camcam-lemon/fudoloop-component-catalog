/* eslint-disable import/no-cycle */
import React from 'react';
import styled, { css } from 'styled-components';
import { GRAY, WHITE, OVERLAY } from '../../../../../colors';
import { IconCell } from './IconCell';
import { ProduceNameCell } from './ProduceNameCell';
import { EditableCell } from './EditableCell';
import { EditableCommentCell } from './EditableCommentCell';

type Props = {
  open: boolean;
  editable: boolean;
  index: number;
  name: string;
  standard?: string;
  totalAmount?: number;
  row?: number;
  middle?: number;
  high?: number;
  comment: string;
};

const placeholder =
  '市況に関係する情報は生産者さんの参考になります\n売れ行きのいい規格、今後の値段予想、病気情報など';

export const EditableWrapper: React.FC<Props> = ({
  open,
  editable,
  index,
  name,
  standard,
  totalAmount,
  row,
  middle,
  high,
  comment,
}) => {
  console.log({ editable });
  return (
    <>
      <Tr open={open} editable={editable}>
        <Td icon rowSpan={2}>
          <IconCell open={open} index={index} />
        </Td>
        <Td rowSpan={2} open={open} width={180}>
          <ProduceNameCell open={open} name={name} standard={standard} />
        </Td>
        <Td open={open}>
          <EditableCell
            open={open}
            value={totalAmount}
            label="入荷量"
            id="total-amount"
            placeholder="0"
          />
        </Td>
        <Td open={open}>
          <EditableCell open={open} value={row} label="安値" id="price-row" placeholder="0" />
        </Td>
        <Td open={open}>
          <EditableCell open={open} value={middle} label="中値" id="price-middle" placeholder="0" />
        </Td>
        <Td open={open}>
          <EditableCell open={open} value={high} label="高値" id="price-high" placeholder="0" />
        </Td>
      </Tr>
      <Tr second open={open} editable={editable}>
        <Td second open={open} colSpan={4}>
          <EditableCommentCell
            open={open}
            value={comment}
            label="傾向"
            id="comment"
            placeholder={placeholder}
          />
        </Td>
      </Tr>
    </>
  );
};

type CssProps = {
  second?: boolean;
};
type CssProps2 = {
  icon?: boolean;
};

const Tr = styled.tr<{ second?: boolean; open: boolean; editable: boolean }>`
  box-sizing: border-box;
  height: 32px;
  background-color: ${({ open, editable }) => (editable && !open ? OVERLAY['30%'] : 'inherit')};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  ${({ open }) =>
    open &&
    css<CssProps>`
      height: ${({ second }) => (second ? '152px' : '64px')};
      background-color: ${WHITE};
    `}
`;
const Td = styled.td<{ icon?: boolean; open?: boolean; second?: boolean; width?: number }>`
  box-sizing: border-box;
  border: 1px solid ${GRAY.hover};
  width: ${({ width }) => width || 100}px;
  vertical-align: middle;
  text-align: ${({ second }) => (second ? 'left' : 'center')};

  ${({ open }) =>
    open &&
    css<CssProps2>`
      vertical-align: ${({ icon }) => (icon ? 'middle' : 'top')};
      padding: 4px;
    `}
`;
