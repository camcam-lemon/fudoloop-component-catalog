import React from 'react';
import { NAVY } from '../../colors';

import Logo from '../../components/Icons/Logo';

export default {
  title: 'Icon/fudoloopロゴ',
  component: Logo,
};

export const fudoloopロゴ = () => (
  <div style={{ backgroundColor: NAVY.default }}>
    <Logo />
  </div>
);
