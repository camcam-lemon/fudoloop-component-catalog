import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import FarmerButton from '../components/Button/farmer/base';
import FamerFab from '../components/Button/farmer/fab/icon/Add';
import BaseButton from '../components/Button/shared/base';
import Fab from '../components/Button/shared/fab';
import SalerAdminButton from '../components/Button/saler-admin/base';

// export default {
//   title: 'Button',
//   component: Button,
// };

const styles: { [key: string]: React.CSSProperties } = {
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    margin: '0 1rem',
  },
};

const components = storiesOf('Button', module);
components
  .addDecorator(withKnobs)
  .addDecorator((withInfo as any)({ inline: true }))
  .add('Shared Base Button', () => (
    <>
      <BaseButton onClick={action('クリック')}>編集する</BaseButton>
      <BaseButton disabled>編集する</BaseButton>
    </>
  ))
  .add('Shared floating actioon button', () => (
    <>
      <Fab onClick={action('クリック')}>メッセージを送る</Fab>
      <Fab disabled>メッセージを送る</Fab>
    </>
  ))
  .add('Farmer Button', () => (
    <>
      <FarmerButton onClick={action('クリック')}>ログイン</FarmerButton>
      <FarmerButton disabled onClick={action('クリック')}>
        ログイン
      </FarmerButton>
    </>
  ))
  .add('Farmer Button custom color', () => (
    <div style={styles.flex}>
      <FarmerButton color="gray">Gray Color</FarmerButton>
      <div style={styles.margin} />
      <FarmerButton color="blue">Blue Color</FarmerButton>
      <div style={styles.margin} />
      <FarmerButton color="yellow">Yellow Color</FarmerButton>
    </div>
  ))
  .add('Farmer Fab', () => (
    <>
      <div>画面の右下にボタンがあります。</div>
      <FamerFab onClick={action('クリック')} />
    </>
  ))
  .add('Farmer Fab disabled', () => (
    <>
      <div>画面の右下にボタンがあります。</div>
      <FamerFab disabled />
    </>
  ))
  .add('Saler Admin Button', () => (
    <>
      <SalerAdminButton onClick={action('クリック')}>編集する</SalerAdminButton>
      <SalerAdminButton disabled onClick={action('クリック')}>
        編集する
      </SalerAdminButton>
    </>
  ));
