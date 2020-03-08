import React from 'react';
import { useState, useCallback } from '@storybook/addons';
import { Vertical, Column } from '../Container';
import { Event } from '../../@types/EventEmitter.d';

import DatePicker from '../../components/TextField/DatePicker';

export default {
  title: 'TextField/DatePicker',
  component: DatePicker,
};

function useDatePicker(initialValue: string): [string | Date, (e: Event['change']) => void] {
  const [value, setValue] = useState<Date | string>(initialValue);
  const onChange = useCallback((e: Event['change']) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange];
}

export const デフォルト = () => (
  <>
    <DatePicker />
    <DatePicker disabled />
  </>
);

export const カスタムカラー = () => (
  <Column>
    <DatePicker value="緑色だよ" color="green" />
    <Vertical />
    <DatePicker value="青色だよ" color="blue" />
    <Vertical />
    <DatePicker value="黄色だよ" color="yellow" />
    <Vertical />
    <DatePicker value="グレーだよ" color="gray" />
  </Column>
);

export const 組み込み = () => {
  const [value, onChange] = useDatePicker('2018-2-1');

  return (
    <>
      <DatePicker styles={{ margin: '0 10px', width: '150px' }} value={value} onChange={onChange} />
      <div style={{ width: '150px', whiteSpace: 'nowrap' }}>{value}</div>
    </>
  );
};
