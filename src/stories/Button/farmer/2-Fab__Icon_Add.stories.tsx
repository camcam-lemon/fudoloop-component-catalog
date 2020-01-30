import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../../../components/Button/farmer/fab/Icon/Add';

export default {
  title: 'Button/farmer/Fab/Icon/Add',
  component: Button,
};

export const デフォルト = () => (
  <>
    <div>画面の右下にボタンが表示されています。</div>
    <Button onClick={action('clicked')} />
  </>
);

export const 使用不可 = () => (
  <>
    <div>画面の右下にボタンが表示されています。</div>
    <Button disabled />
  </>
);

export const カスタムポジション = () => (
  <>
    <Button right={150} />
    <Button bottom={80} />
    <Button right="150px" bottom="80px" />
    <Button right={20} left={20} bottom={40} />
  </>
);
