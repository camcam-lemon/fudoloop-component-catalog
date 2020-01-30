import React from 'react';
import { action } from '@storybook/addon-actions';
import { Margin } from '../../Container';

import Button from '../../../components/Button/shared/Base';

export default {
  title: 'Button/shared/Base',
  component: Button,
};

export const デフォルト = () => (
  <>
    <Button onClick={action('clicked')}>編集する</Button>
    <Margin />
    <Button disabled>編集する</Button>
  </>
);
