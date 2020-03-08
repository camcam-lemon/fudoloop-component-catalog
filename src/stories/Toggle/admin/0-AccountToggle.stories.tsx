import React from 'react';
import { useState, useCallback } from '@storybook/addons';
import { Margin } from '../../Container';
import { Event } from '../../../@types/EventEmitter.d';

import Toggle from '../../../components/Toggle/admin/AccountToggle';

export default {
  title: 'Toggle/admin/AccountToggle',
  component: Toggle,
};

function useToggle(): [boolean, (e: Event['change']) => void] {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback((e: Event['change']) => {
    setChecked(e.target.checked);
  }, []);

  return [checked, onChange];
}

export const デフォルト = () => (
  <>
    <Toggle />
    <Margin />
    <Toggle disabled />
  </>
);

export const カスタムカラー = () => (
  <>
    <Toggle color="green" />
    <Margin />
    <Toggle color="blue" />
    <Margin />
    <Toggle color="yellow" />
    <Margin />
    <Toggle color="gray" />
  </>
);

export const 組み込み = () => {
  const [checked, onChange] = useToggle();
  const account = checked ? '使用可能' : '使用不能';

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Toggle styles={{ margin: '10px' }} checked={checked} onChange={onChange} />
      <div>Aさんのアカウントは{account}です</div>
    </div>
  );
};
