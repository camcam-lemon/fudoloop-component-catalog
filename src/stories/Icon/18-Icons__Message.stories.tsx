import React from 'react';
import { NAVY } from '../../colors';

import MessageIcon from '../../components/Icons/Message';

export default {
  title: 'Icon/メッセージ',
  component: MessageIcon,
};

export const メッセージアイコン = () => (
  <div style={{ backgroundColor: NAVY.default }}>
    <MessageIcon />
  </div>
);
