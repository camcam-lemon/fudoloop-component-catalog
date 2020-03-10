import React from 'react';
import { Vertical, Column } from '../Container';

import LoginTextField from '../../components/TextField/Login';
import { NAVY, WHITE } from '../../colors';

export default {
  title: 'TextField/LoginTextField',
  component: LoginTextField,
};

export const デフォルト = () => (
  <div style={{ backgroundColor: NAVY.default, width: '100%', height: '300px' }}>
    <Column center>
      <Vertical />
      <div>
        <div style={{ color: WHITE }}>ログインID</div>
        <LoginTextField />
      </div>
      <Vertical />
      <div>
        <div style={{ color: WHITE }}>パスワード</div>
        <LoginTextField type="password" />
      </div>
    </Column>
  </div>
);
