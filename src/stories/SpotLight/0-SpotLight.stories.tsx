import React from 'react';
import Button from '../../components/Button/shared/Base';

import SpotLight from '../../components/SpotLight';

export default {
  title: 'SpotLight',
  component: SpotLight,
};

export const デフォルト = () => (
  <>
    <SpotLight />
    <Button style={{ marginTop: '20px', marginLeft: '7px' }}>ここだよ</Button>
  </>
);

export const カスタムポジション = () => <SpotLight shape="circle" top={70} left="145px" />;

export const サイズ変更 = () => (
  <>
    <SpotLight size="50px" />
    <div style={{ marginTop: '25px', marginLeft: '10px' }}>ここだよ</div>
  </>
);
