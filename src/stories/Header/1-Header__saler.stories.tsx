import React from 'react';
import { action } from '@storybook/addon-actions';

import Header from '../../components/Header/saler';

export default {
  title: 'Header/saler',
  component: Header,
};

export const ダッシュボードページ = () => (
  <>
    <div>ページ上部にヘッダーがあります</div>
    <div style={{ width: '500px' }}>
      <Header
        current="report"
        saler="六本木大同青果"
        user="橋下勝"
        onVegitable={action('clicked')}
        onInformation={action('clicked')}
        onSetting={action('clicked')}
        onLogout={action('clicked')}
      />
    </div>
  </>
);

export const 利用状況ページ = () => (
  <>
    <div>ページ上部にヘッダーがあります</div>
    <div style={{ width: '500px' }}>
      <Header
        current="information"
        saler="六本木大同青果"
        user="橋下勝"
        onVegitable={action('clicked')}
        onInformation={action('clicked')}
        onSetting={action('clicked')}
        onLogout={action('clicked')}
      />
    </div>
  </>
);

export const アドミンページ = () => (
  <>
    <div>ページ上部にヘッダーがあります</div>
    <div style={{ width: '500px' }}>
      <Header
        current="setting"
        saler="六本木大同青果"
        user="橋下勝"
        onVegitable={action('clicked')}
        onInformation={action('clicked')}
        onSetting={action('clicked')}
        onLogout={action('clicked')}
      />
    </div>
  </>
);
