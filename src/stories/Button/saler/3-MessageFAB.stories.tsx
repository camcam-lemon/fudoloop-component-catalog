import React from 'react';
import { action } from '@storybook/addon-actions';
import { Margin } from '../../Container';

import Button from '../../../components/Button/saler/fab/MessageFAB';

export default {
  title: 'Button/saler/fab/MessageFAB',
  component: Button,
};

export const デフォルト = () => (
  <>
    <Button onClick={action('clicked')} />
    <Margin />
    <Button disabled />
  </>
);

export const カスタムカラー = () => (
  <>
    <Margin />
    <Button color="green" onClick={action('clicked')} />
    <Margin />
    <Button color="blue" onClick={action('clicked')} />
    <Margin />
    <Button color="yellow" onClick={action('clicked')} />
    <Margin />
    <Button color="gray" onClick={action('clicked')} />
  </>
);
