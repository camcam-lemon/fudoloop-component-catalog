import React from 'react';
import { useState, useCallback } from '@storybook/addons';
import { Vertical, Column } from '../Container';
import { Event } from '../../@types/EventEmitter.d';

import TextField from '../../components/TextField/MarketField';

export default {
  title: 'TextField/MarketField',
  component: TextField,
};

function useTextField(
  initialValue: string,
): [string, (e: Event['change'] | Event['changeTextArea']) => void] {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: Event['change'] | Event['changeTextArea']) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange];
}

const placeholder =
  '市況に関係する情報は生産者さんの参考になります\n売れ行きのいい規格、今後の値段予想、病気情報など';

export const デフォルト = () => (
  <Column>
    <TextField />
    <Vertical />
    <TextField label="入荷量" id="default-text" placeholder="0" />
    <Vertical />
    <TextField multline label="複数行" align="left" placeholder="複数業入力" width="400px" />
    <Vertical />
    <TextField
      disabled
      label="使用不可"
      id="default-disabled"
      placeholder="使えません"
      width="100px"
    />
  </Column>
);

export const カスタムカラー = () => (
  <Column>
    <TextField label="緑色だよ" id="green" color="green" />
    <Vertical />
    <TextField label="青色だよ" id="blue" color="blue" />
    <Vertical />
    <TextField label="黄色だよ" id="yellow" color="yellow" />
    <Vertical />
    <TextField label="グレーだよ" id="gray" color="gray" />
  </Column>
);

export const 複数行 = () => (
  <Column>
    <TextField multline label="multline" id="base" align="left" />
    <Vertical />
    <TextField multline label="右入力" id="right" />
    <Vertical />
    <TextField
      multline
      label="傾向"
      id="custom-size"
      placeholder={placeholder}
      width="400px"
      height="60px"
      align="left"
    />
  </Column>
);

export const 組み込み = () => {
  const [value, onChange] = useTextField('');

  return (
    <>
      <TextField label="入荷量" id="received" value={value} placeholder="0" onChange={onChange} />
      <div style={{ width: '150px', marginTop: '14px', marginLeft: '40px', whiteSpace: 'nowrap' }}>
        {value}
      </div>
    </>
  );
};
