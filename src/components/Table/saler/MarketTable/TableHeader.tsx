import React from 'react';
import styled from 'styled-components';
import { NAVY, WHITE } from '../../../../colors';
import Fonts from '../../../../fonts';

export const TableHeader: React.FC = React.memo(() => (
  <THead>
    <Tr>
      <Th rowSpan={2} width={75}>
        編集
      </Th>
      <Th rowSpan={2} width={180}>
        <div>
          <div>作物名</div>
          <div>（規格・ブランド名）</div>
        </div>
      </Th>
      <Th width={100}>入荷量</Th>
      <Th width={100}>安値</Th>
      <Th width={100}>中値</Th>
      <Th width={100}>高値</Th>
    </Tr>
    <Tr second>
      <Th colSpan={4}>傾向</Th>
    </Tr>
  </THead>
));

const THead = styled.thead`
  ${Fonts['600']}
  font-size: 16px;
  letter-spacing: -0.4px;
  color: ${WHITE};
  background-color: ${NAVY.dark};
  border: unset;
`;
const Tr = styled.tr<{ second?: boolean }>`
  border-top: ${({ second }) => (second ? `1px solid ${WHITE}` : 'unset')};
`;

const Th = styled.th<{ first?: boolean; last?: boolean; width?: number }>`
  padding: 0;
  width: ${({ width }) => width}px;
  height: 32px;
  border-right: ${({ last }) => (last ? 'unset' : `1px solid ${WHITE}`)};
  box-sizing: border-box;
`;
