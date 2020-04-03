import React from 'react';

import { useState, useCallback } from '@storybook/addons';
import MarketTable, { MarketTableProps, Data } from '../../../components/Table/saler/MarketTable';
import { Vertical, Column } from '../../Container';

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

export const 市況テーブル = () => <MarketTable renderData={MOCK_DATA} />;

export const データがない時 = () => <MarketTable renderData={[]} />;

export const 組み込み = () => {
  const [dataList, setDataList] = useState(MOCK_DATA);
  const [targetData, setTargetData] = useState<Data | null>(null);
  const [editable, setEditable] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const onClickEdit = useCallback<MarketTableProps['onClickEdit']>(
    (e, index) => {
      e.stopPropagation();
      setEditable(prev => !prev);
      setEditIndex(index);
      setTargetData(dataList[index]);
    },
    [dataList],
  );
  const onClickEditComplete = useCallback<MarketTableProps['onClickEditComplete']>(
    (e, index, values) => {
      const { standard, totalAmount, row, middle, high, comment } = values;
      e.stopPropagation();
      setEditable(prev => !prev);
      setEditIndex(-1);
      setTargetData(null);

      const prevData = dataList.map((key, i) =>
        i === index
          ? {
              ...key,
              standard,
              totalAmount: Number(totalAmount),
              prices: {
                row: Number(row),
                middle: Number(middle),
                high: Number(high),
              },
              comment,
            }
          : key,
      );
      setDataList(prevData);
    },
    [dataList],
  );

  const onCancel = useCallback<MarketTableProps['onCancel']>((e, index) => {
    e.stopPropagation();
    setEditable(prev => !prev);
    setEditIndex(-1);
    setTargetData(null);
  }, []);

  return (
    <div>
      <Column>
        <div>モード：{editable ? '編集中' : '閲覧中'}</div>
        <div>編集行：{editIndex === -1 ? '未洗濯' : editIndex + 1}</div>
        <div>
          <div>選択されたデータ</div>
          <ul>
            <li>id: {targetData?.id}</li>
            <li>作物名: {targetData?.name}</li>
            <li>規格: {targetData?.standard}</li>
            <li>全体量: {targetData?.totalAmount}</li>
            <li>安値: {targetData?.prices.row}</li>
            <li>中値: {targetData?.prices.middle}</li>
            <li>高値: {targetData?.prices.high}</li>
            <li>傾向： {targetData?.comment}</li>
          </ul>
        </div>
      </Column>
      <MarketTable
        renderData={dataList}
        onClickEdit={onClickEdit}
        onClickEditComplete={onClickEditComplete}
        onCancel={onCancel}
      />
    </div>
  );
};
