import React from 'react';
import { useState, useCallback } from '@storybook/addons';
import { Vertical, Column } from '../Container';
import { Event } from '../../@types/EventEmitter.d';

import TextField from '../../components/TextField/Base';

export default {
  title: 'TextField/Base',
  component: TextField,
};

function useTextField(initialValue: string): [string, (e: Event['change']) => void] {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: Event['change']) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange];
}

export const デフォルト = () => (
  <Column>
    <TextField />
    <Vertical />
    <TextField placeholder="プレースホルダー" />
    <Vertical />
    <TextField disabled />
  </Column>
);

export const カスタムカラー = () => (
  <Column>
    <TextField value="緑色だよ" color="green" />
    <Vertical />
    <TextField value="青色だよ" color="blue" />
    <Vertical />
    <TextField value="黄色だよ" color="yellow" />
    <Vertical />
    <TextField value="グレーだよ" color="gray" />
  </Column>
);

export const 入力形式 = () => (
  <Column>
    <div>type: text</div>
    <TextField type="text" />
    <Vertical />
    <div>type: number</div>
    <TextField type="number" />
    <Vertical />
    <div>type: password</div>
    <TextField type="password" />
  </Column>
);

export const 組み込み = () => {
  const [value, onChange] = useTextField('初めまして');

  return (
    <>
      <TextField styles={{ margin: '0 10px', width: '150px' }} value={value} onChange={onChange} />
      <div style={{ width: '150px', whiteSpace: 'nowrap' }}>{value}</div>
    </>
  );
};
