import React from 'react';
import { NAVY } from '../../colors';

import BanIcon from '../../components/Icons/Ban';

export default {
  title: 'Icon/使用禁止',
  component: BanIcon,
};

export const 使用禁止アイコン = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <BanIcon />
  </div>
);
