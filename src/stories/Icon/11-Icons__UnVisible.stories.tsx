import React from 'react';
import { NAVY } from '../../colors';

import UnvisibleIcon from '../../components/Icons/Unvisible';

export default {
  title: 'Icon/非表示',
  component: UnvisibleIcon,
};

export const 非表示アイコン = () => (
  <div style={{ backgroundColor: NAVY.press }}>
    <UnvisibleIcon />
  </div>
);
