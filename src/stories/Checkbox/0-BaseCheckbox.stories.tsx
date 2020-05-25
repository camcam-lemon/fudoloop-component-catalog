import React from 'react';
import { useState, useCallback } from '@storybook/addons';
import { NAVY } from '../../colors';
import { Column, Margin, Vertical } from '../Container';

import Checkbox from '../../components/Checkbox/Base';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const デフォルト = () => (
  <>
    <Checkbox />
    <Margin />
    <Checkbox>予定は未定</Checkbox>
    <Margin />
    <Checkbox disabled>使えません</Checkbox>
  </>
);

export const 組み込み = () => {
  const [checked, setChecked] = useState(true);
  const onCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }, []);

  return (
    <div style={{ width: '300px' }}>
      <Checkbox checked={checked} onChange={onCheck}>
        メロンは好き？
      </Checkbox>
      <Vertical />
      <div>{checked ? '僕も好きだよ' : '嫌いなんだね...'}</div>
    </div>
  );
};

export const カスタムカラー = () => (
  <Column>
    <div>お好きな色は何色？</div>
    <Vertical />
    <Checkbox>グリーンかしら？</Checkbox>
    <Vertical />
    <Checkbox color="blue">ブルーかしら?</Checkbox>
    <Vertical />
    <Checkbox color="yellow">イエローかしら?</Checkbox>
    <Vertical />
    <Checkbox color="gray" styles={{ backgroundColor: NAVY.press }}>
      グレーかしら?
    </Checkbox>
  </Column>
);

export const カスタムサイズ = () => (
  <Column>
    <Checkbox size="10px">めちゃくちゃ小さいよ</Checkbox>
    <Vertical />
    <Checkbox>標準サイズよ</Checkbox>
    <Vertical />
    <Checkbox size="40px">少し大きいよ</Checkbox>
    <Vertical />
    <Checkbox size="77px">特大サイズよ</Checkbox>
  </Column>
);

export const 余白の指定 = () => (
  <Column>
    <div>お好きな間合いはどちら？</div>
    <Vertical />
    <Checkbox space={0}>0px</Checkbox>
    <Vertical />
    <Checkbox space="20px">20px</Checkbox>
  </Column>
);
