import React from 'react';
import { NAVY } from '../../colors';

import LogoutIcon from '../../components/Icons/Logout';

export default {
  title: 'Icon/ログアウト',
  component: LogoutIcon,
};

export const ログアウトアイコン = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <LogoutIcon />
  </div>
);
