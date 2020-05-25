import React from 'react';
import { NAVY } from '../../colors';

import SettingIcon from '../../components/Icons/Setting';

export default {
  title: 'Icon/設定',
  component: SettingIcon,
};

export const 設定アイコン = () => (
  <div style={{ backgroundColor: NAVY.press }}>
    <SettingIcon />
  </div>
);
