import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from '../../components/Header/farmer';

export default {
  title: 'Header/farmer',
  component: Header,
};

export const デフォルト = () => (
  <>
    <div>ページ上部にヘッダーがあります</div>
    <div style={{ width: '500px' }}>
      <Header onClick={action('clicked')}>確認</Header>
    </div>
  </>
);

export const クローズアイコン = () => (
  <>
    <div>ページ上部にヘッダーがあります</div>
    <div style={{ width: '500px' }}>
      <Header onClick={action('clicked')} icon="close">
        メッセージ
      </Header>
    </div>
  </>
);
