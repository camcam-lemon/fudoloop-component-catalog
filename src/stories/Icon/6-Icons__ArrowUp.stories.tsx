import React from 'react';
import { NAVY } from '../../colors';

import ArrowUpIcon from '../../components/Icons/ArrowUp';

export default {
  title: 'Icon/上矢印',
  component: ArrowUpIcon,
};

export const 上矢印アイコン = () => (
  <div style={{ backgroundColor: NAVY.press }}>
    <ArrowUpIcon color="green" />
  </div>
);
