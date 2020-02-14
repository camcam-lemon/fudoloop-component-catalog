import React from 'react';
import { GRAY } from '../../../../colors';

import Link from '../../../../components/Link/farmer/ProduceLink';

export default {
  title: 'Link/farmer/ProduceLink',
  component: Link,
};

export const デフォルト = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: GRAY.default }}>
    <Link href="#link-farmer-producelink--デフォルト" margin="65px">
      きゅうり
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" margin="65px">
      たまねぎ
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" margin="65px">
      だいこんは
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" margin="65px">
      スティックセニョール
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" margin="65px">
      ブラウンマッシュルームムッシュシャンピニオン
    </Link>
  </div>
);

export const 報告済み = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: GRAY.default }}>
    <Link href="#link-farmer-producelink--デフォルト" reported margin="65px">
      きゅうり
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported margin="65px">
      たまねぎ
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" margin="65px">
      だいこんは
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported margin="65px">
      スティックセニョール
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported margin="65px">
      ブラウンマッシュルームムッシュシャンピニオン
    </Link>
  </div>
);

export const 卸が了解を押した = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: GRAY.default }}>
    <Link href="#link-farmer-producelink--デフォルト" reported readed margin="65px">
      きゅうり
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported readed margin="65px">
      たまねぎ
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" readed margin="65px">
      だいこんは
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported readed margin="65px">
      スティックセニョール
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported readed margin="65px">
      ブラウンマッシュルームムッシュシャンピニオン
    </Link>
  </div>
);

export const 卸からメッセージが届いた = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: GRAY.default }}>
    <Link href="#link-farmer-producelink--デフォルト" message margin="65px">
      きゅうり
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported message margin="65px">
      たまねぎ
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" message margin="65px">
      だいこんは
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported readed message margin="65px">
      スティックセニョール
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" reported readed message margin="65px">
      ブラウンマッシュルームムッシュシャンピニオン
    </Link>
  </div>
);

export const 使用不可 = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: GRAY.default }}>
    <Link href="#link-farmer-producelink--デフォルト" disabled margin="65px">
      きゅうり
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" disabled margin="65px">
      たまねぎ
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" disabled margin="65px">
      だいこんは
    </Link>
    <Link href="#link-farmer-producelink--デフォルト" disabled margin="65px">
      スティックセニョール
    </Link>
  </div>
);
