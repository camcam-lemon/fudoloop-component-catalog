import React from 'react';

import MarketTable, { MarketTableProps } from '../../../components/Table/saler/MarketTable';

export default {
  title: 'Table/MarketTable',
  component: MarketTable,
};

const MOCK_DATA: MarketTableProps['renderData'] = [
  {
    id: '111123',
    name: 'ロメインレタスジュニアJr.',
    standard: 'AM',
    totalAmount: 2400,
    prices: {
      row: 60,
      middle: undefined,
      high: 120,
    },
    comment: '高値で持ち合いそうです。',
  },
  {
    id: '4232323',
    name: 'ブラウンマッシュルーム・ムッシュシャンピニオン',
    standard: 'とても長すぎて表示しきれないブランド',
    totalAmount: 123456789,
    prices: {
      row: 123456789,
      middle: undefined,
      high: 123456789,
    },
    comment: '節分が近くしばらく高値で売れそうです。ALよりもAMの方が高く売れそうです。',
  },
  {
    id: '42440394',
    name: 'なす',
    standard: undefined,
    totalAmount: undefined,
    prices: {
      row: undefined,
      middle: undefined,
      high: undefined,
    },
    comment: '',
  },
];

export const 市況テーブル = () => (
  <div
    style={{
      background: 'black',
      width: '800px',
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      height: '300px',
    }}
  >
    <MarketTable renderData={MOCK_DATA} />
  </div>
);
