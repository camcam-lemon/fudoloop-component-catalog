import React from 'react';
import { NAVY } from '../../colors';

import GoodJobIcon from '../../components/Icons/GoodJob';

export default {
  title: 'Icon/了解',
  component: GoodJobIcon,
};

export const 了解アイコン = () => (
  <div style={{ backgroundColor: NAVY.default }}>
    <GoodJobIcon />
  </div>
);
