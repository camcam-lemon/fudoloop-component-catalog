import React from 'react';
import { NAVY } from '../../colors';

import CrossIcon from '../../components/Icons/Cross';

export default {
  title: 'Icon/閉じる',
  component: CrossIcon,
};

export const 閉じるアイコン = () => (
  <div style={{ backgroundColor: NAVY.default }}>
    <CrossIcon />
  </div>
);
