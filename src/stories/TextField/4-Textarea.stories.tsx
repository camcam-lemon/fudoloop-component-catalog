import React from 'react';
import { useState, useCallback } from '@storybook/addons';
import { Vertical, Column } from '../Container';
import { Event } from '../../@types/EventEmitter.d';

import Textarea from '../../components/TextField/Textarea';

export default {
  title: 'TextField/Textarea',
  component: Textarea,
};

function useTextarea(initialValue: string): [string, (e: Event['changeTextArea']) => void] {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: Event['changeTextArea']) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange];
}

export const デフォルト = () => (
  <Column>
    <Textarea />
    <Vertical />
    <Textarea placeholder="プレースホルダー" />
    <Vertical />
    <Textarea disabled value="使えないよ" />
  </Column>
);

export const カスタムカラー = () => (
  <Column>
    <Textarea value="緑色だよ" color="green" />
    <Vertical />
    <Textarea value="青色だよ" color="blue" />
    <Vertical />
    <Textarea value="黄色だよ" color="yellow" />
    <Vertical />
    <Textarea value="グレーだよ" color="gray" />
  </Column>
);

export const 組み込み = () => {
  const [value, onChange] = useTextarea('初めまして');

  return (
    <>
      <Textarea styles={{ margin: '0 10px', width: '150px' }} value={value} onChange={onChange} />
      <div style={{ width: '150px', whiteSpace: 'nowrap' }}>{value}</div>
    </>
  );
};
