import React from 'react';
import { NAVY } from '../../colors';

import VegitableIcon from '../../components/Icons/Vegitable';

export default {
  title: 'Icon/Vegitable',
  component: VegitableIcon,
};

export const 設定アイコン = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <VegitableIcon />
  </div>
);
