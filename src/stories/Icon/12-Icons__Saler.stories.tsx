import React from 'react';
import { NAVY } from '../../colors';

import SalerIcon from '../../components/Icons/Saler';

export default {
  title: 'Icon/卸',
  component: SalerIcon,
};

export const 卸アイコン = () => (
  <div style={{ backgroundColor: NAVY.press }}>
    <SalerIcon />
  </div>
);
