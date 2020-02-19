import React from 'react';
import { action } from '@storybook/addon-actions';
import { useState } from '@storybook/addons';
import { Margin } from '../../Container';

import RagerButton from '../../../components/Button/saler/RagerButton';

export default {
  title: 'Button/saler/RagerButton',
  component: RagerButton,
};

export const デフォルト = () => (
  <>
    <RagerButton onClick={action('clicked')} />
    <Margin />
    <RagerButton onClick={action('clicked')} />
    <Margin />
    <RagerButton onClick={action('clicked')} />
    <Margin />
    <RagerButton onClick={action('clicked')} disabled />
  </>
);

export const カスタムカラー = () => (
  <>
    <RagerButton color="green" onClick={action('clicked')} />
    <Margin />
    <RagerButton color="blue" onClick={action('clicked')} />
    <Margin />
    <RagerButton color="yellow" onClick={action('clicked')} />
    <Margin />
    <RagerButton color="gray" onClick={action('clicked')} />
  </>
);

export const 何度も押せる = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '1rem' }}>何回でも押せるよ： {count1}</div>
        <RagerButton once={false} onClick={() => setCount1(prev => prev + 1)} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '1rem' }}>5回押せるよ： {count2}</div>
        <RagerButton
          once={false}
          disabled={count2 > 4}
          onClick={() => setCount2(prev => prev + 1)}
        />
      </div>
    </>
  );
};

// export const カスタムポジション = () => (
//   <>
//     <Button right={150} />
//     <Button bottom={80} />
//     <Button right="150px" bottom="80px" />
//     <Button right={20} left={20} bottom={40} />
//   </>
// );
