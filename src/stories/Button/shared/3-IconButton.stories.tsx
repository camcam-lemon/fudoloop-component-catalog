import React from 'react';
import { action } from '@storybook/addon-actions';
import { Margin } from '../../Container';

import IconButton from '../../../components/Button/shared/IconButton';
import InfomationIcon from '../../../components/Icons/Information';
import SettingIcon from '../../../components/Icons/Setting';
import VegitableIcon from '../../../components/Icons/Vegitable';
import LogoutIcon from '../../../components/Icons/Logout';
import { NAVY, WHITE } from '../../../colors';

export default {
  title: 'Button/shared/IconButton',
  component: IconButton,
};

export const デフォルト = () => (
  <div style={{ backgroundColor: NAVY.default, display: 'inherit' }}>
    <IconButton fontColor={WHITE} onClick={action('clicked')}>
      <InfomationIcon />
      利用状況
    </IconButton>
    <Margin />
    <IconButton fontColor={WHITE} onClick={action('clicked')}>
      利用状況
      <InfomationIcon />
    </IconButton>
    <Margin />
    <IconButton disabled>
      <InfomationIcon disabled />
      利用状況
    </IconButton>
  </div>
);

export const テキストボタン = () => (
  <div style={{ backgroundColor: NAVY.default, display: 'inherit' }}>
    <IconButton fontColor={WHITE} onClick={action('clicked')}>
      <InfomationIcon />
      利用状況
    </IconButton>
    <Margin />
    <IconButton color="blue" onClick={action('clicked')}>
      <SettingIcon />
      設定
    </IconButton>
    <Margin />
    <IconButton color="green" onClick={action('clicked')}>
      <VegitableIcon />
      入荷予定量
    </IconButton>
    <Margin />
    <IconButton color="yellow" fontColor={WHITE} onClick={action('clicked')}>
      <LogoutIcon />
      ログアウト
    </IconButton>
  </div>
);

export const コンテインボタン = () => (
  <>
    <IconButton variant="contained" onClick={action('clicked')}>
      <InfomationIcon />
      利用状況
    </IconButton>
    <Margin />
    <IconButton variant="contained" color="blue" onClick={action('clicked')}>
      <SettingIcon />
      設定
    </IconButton>
    <Margin />
    <IconButton variant="contained" color="green" onClick={action('clicked')}>
      <VegitableIcon />
      入荷予定量
    </IconButton>
    <Margin />
    <IconButton variant="contained" color="yellow" onClick={action('clicked')}>
      <LogoutIcon />
      ログアウト
    </IconButton>
  </>
);

export const アウトラインボタン = () => (
  <div
    style={{
      display: 'inherit',
      height: '50px',
      backgroundColor: NAVY.default,
      alignItems: 'center',
    }}
  >
    <IconButton variant="outlined" fontColor={WHITE} onClick={action('clicked')}>
      <InfomationIcon />
      利用状況
    </IconButton>
    <Margin />
    <IconButton variant="outlined" color="blue" onClick={action('clicked')}>
      <SettingIcon />
      設定
    </IconButton>
    <Margin />
    <IconButton variant="outlined" color="green" onClick={action('clicked')}>
      <VegitableIcon />
      入荷予定量
    </IconButton>
    <Margin />
    <IconButton variant="outlined" color="yellow" fontColor={WHITE} onClick={action('clicked')}>
      <LogoutIcon />
      ログアウト
    </IconButton>
  </div>
);
