import React from 'react';
import { action } from '@storybook/addon-actions';
import { Margin } from '../../Container';

import Button from '../../../components/Button/farmer/Base';

export default {
  title: 'Button/farmer/Base',
  component: Button,
};

export const デフォルト = () => (
  <>
    <Button onClick={action('clicked')}>ログイン</Button>
    <Margin />
    <Button disabled>ログイン</Button>
  </>
);

export const カスタムカラー = () => (
  <>
    <Button color="green" onClick={action('clicked')}>
      Green Button
    </Button>
    <Margin />
    <Button color="blue" onClick={action('clicked')}>
      Blue Button
    </Button>
    <Margin />
    <Button color="gray" onClick={action('clicked')}>
      Gray Button
    </Button>
    <Margin />
    <Button color="yellow" onClick={action('clicked')}>
      Yellow Button
    </Button>
  </>
);
