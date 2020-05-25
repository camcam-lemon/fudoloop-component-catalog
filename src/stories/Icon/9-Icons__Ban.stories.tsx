import React from 'react';
import { NAVY, RED } from '../../colors';

import DeleteIcon from '../../components/Icons/Delete';

export default {
  title: 'Icon/ゴミ箱',
  component: DeleteIcon,
};

export const ゴミ箱アイコン = () => (
  <div style={{ backgroundColor: NAVY.press }}>
    <DeleteIcon />
    <DeleteIcon fill={RED.default} />
  </div>
);
