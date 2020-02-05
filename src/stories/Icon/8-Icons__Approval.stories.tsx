import React from 'react';
import { NAVY } from '../../colors';

import ApprovalIcon from '../../components/Icons/Approval';

export default {
  title: 'Icon/使用可能',
  component: ApprovalIcon,
};

export const 使用可能アイコン = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <ApprovalIcon />
  </div>
);
