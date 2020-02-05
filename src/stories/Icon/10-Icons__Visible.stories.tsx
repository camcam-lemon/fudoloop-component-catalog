import React from 'react';
import { NAVY } from '../../colors';

import VisibleIcon from '../../components/Icons/Visible';

export default {
  title: 'Icon/表示',
  component: VisibleIcon,
};

export const 表示アイコン = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <VisibleIcon />
  </div>
);
