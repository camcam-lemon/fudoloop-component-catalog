import React from 'react';

import MarketTable from '../../../components/Table/saler/MarketTable';

export default {
  title: 'Table/MarketTable',
  component: MarketTable,
};

const MOCK_DATA = [
  {
    id: '111123',
    name: 'ロメインレタス',
    standard: 'AM',
    totalAmount: 2400,
    prices: {
      row: 60,
      middle: null,
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
      middle: 123456789,
      high: 123456789,
    },
    comment: '節分が近くしばらく高値で売れそうです。ALよりもAMの方が高く売れそうです。',
  },
  {
    id: '42440394',
    name: 'なす',
    standard: null,
    totalAmount: null,
    prices: {
      row: null,
      middle: null,
      high: null,
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
