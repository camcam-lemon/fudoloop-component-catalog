import React from 'react';
import { NAVY } from '../../colors';

import BaggageIcon from '../../components/Icons/Baggage';

export default {
  title: 'Icon/荷物',
  component: BaggageIcon,
};

export const 荷物アイコン = () => (
  <div style={{ backgroundColor: NAVY.press }}>
    <BaggageIcon />
  </div>
);
