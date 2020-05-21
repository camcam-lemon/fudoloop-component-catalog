import React from 'react';
import { GRAY } from '../../../colors';

import ProduceTipsCard from '../../../components/Card/saler/ProduceTipsCard';

export default {
  title: 'Card/saler/ProduceTipsCard',
  component: ProduceTipsCard,
};

const styles: React.CSSProperties = {
  width: '700px',
  height: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: GRAY.default,
};
export const デフォルト = () => (
  <div style={styles}>
    <ProduceTipsCard tips="hoge" />
  </div>
);

export const 未登録時 = () => (
  <div style={styles}>
    <ProduceTipsCard unregisterd tips="hoge" />
  </div>
);
