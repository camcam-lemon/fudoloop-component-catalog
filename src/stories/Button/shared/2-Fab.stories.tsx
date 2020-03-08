import React from 'react';
import { action } from '@storybook/addon-actions';
import { Margin } from '../../Container';

import Button from '../../../components/Button/shared/Fab';

export default {
  title: 'Button/shared/Fab',
  component: Button,
};

const styles: React.CSSProperties = {
  width: '216px',
  height: '40px',
};

export const デフォルト = () => (
  <>
    <Button onClick={action('clicked')} styles={styles}>
      メッセージを送信する
    </Button>
    <Margin />
    <Button disabled styles={styles}>
      メッセージを送信する
    </Button>
  </>
);

export const カスタムカラー = () => (
  <>
    <Button color="green" onClick={action('clicked')}>
      Green Fab
    </Button>
    <Margin />
    <Button color="blue" onClick={action('clicked')}>
      Blue Fab
    </Button>
    <Margin />
    <Button color="gray" onClick={action('clicked')}>
      Gray Fab
    </Button>
    <Margin />
    <Button color="yellow" onClick={action('clicked')}>
      Yellow Fab
    </Button>
  </>
);
