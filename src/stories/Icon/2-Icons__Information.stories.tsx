import React from 'react';
import { NAVY } from '../../colors';

import InformationIcon from '../../components/Icons/Information';

export default {
  title: 'Icon/情報',
  component: InformationIcon,
};

export const 情報アイコン = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <InformationIcon />
  </div>
);
