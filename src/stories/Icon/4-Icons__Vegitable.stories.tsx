import React from 'react';
import { NAVY } from '../../colors';

import VegitableIcon from '../../components/Icons/Vegitable';

export default {
  title: 'Icon/野菜',
  component: VegitableIcon,
};

export const 設定アイコン = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <VegitableIcon />
  </div>
);
