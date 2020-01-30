import React from 'react';
import { NAVY } from '../../colors';

import InformationIcon from '../../components/Icons/Information';

export default {
  title: 'Icon',
  component: InformationIcon,
};

export const デフォルト = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <InformationIcon />
  </div>
);

export const 使用不可カラー = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <InformationIcon disabled />
  </div>
);

export const fudoloopカラー = () => (
  <div style={{ backgroundColor: NAVY.dark }}>
    <InformationIcon color="green" />
    <InformationIcon color="blue" />
    <InformationIcon color="gray" />
    <InformationIcon color="yellow" />
  </div>
);

export const サイズ変更 = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: NAVY.dark,
    }}
  >
    <InformationIcon size="40px" />
    <InformationIcon size="20px" />
  </div>
);

export const カスタムカラー = () => (
  <>
    <InformationIcon fill="indigo" />
    <InformationIcon fill="#00008B" />
  </>
);
