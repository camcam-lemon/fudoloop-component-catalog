import React from 'react';
import { action } from '@storybook/addon-actions';
import { Margin } from '../../Container';

import Button from '../../../components/Button/saler/Base';

export default {
  title: 'Button/saler/Base',
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
    <Margin />
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
