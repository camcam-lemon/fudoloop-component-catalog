import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

// type Props = {} & JSX.IntrinsicElements["button"];

// function Button({ children, ...props }: Props) {
//   return (
//     <button style={{ color: "red", backgroundColor: "blue" }} {...props}>
//       {children}
//     </button>
//   );
// }

export default {
  title: 'CustomTSButton',
  component: Button,
};

export const Text = () => <Button onClick={action('done')}>click me!</Button>;
export const Green = () => <Button style={{ backgroundColor: 'green' }}>green</Button>;
