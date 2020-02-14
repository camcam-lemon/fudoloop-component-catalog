import React from 'react';
import { NAVY } from '../../../colors';

import Link from '../../../components/Link/SideBarLink';

export default {
  title: 'Link/サイドバー',
  component: Link,
};

export const デフォルト = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: NAVY.default }}>
    <Link href="#link--サイドバーリンク">きゅうり</Link>
    <Link href="#link--サイドバーリンク">たまねぎ</Link>
    <Link href="#link--サイドバーリンク">だいこんは</Link>
    <Link href="#link--サイドバーリンク">スティックセニョール</Link>
    <Link href="#link--サイドバーリンク">ブラウンマッシュルーム・ムッシュシャンピニオン</Link>
  </div>
);

export const カスタムカラー = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: NAVY.default }}>
    <Link href="#link--サイドバーリンク">きゅうり</Link>
    <Link href="#link--サイドバーリンク" color="blue">
      たまねぎ
    </Link>
    <Link href="#link--サイドバーリンク" color="gray">
      だいこんは
    </Link>
    <Link href="#link--サイドバーリンク" color="yellow">
      スティックセニョール
    </Link>
  </div>
);

export const 新着報告件数 = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: NAVY.default }}>
    <Link href="#link--サイドバーリンク" quantity={2}>
      きゅうり
    </Link>
    <Link href="#link--サイドバーリンク" quantity={10} color="blue">
      たまねぎ
    </Link>
    <Link href="#link--サイドバーリンク" quantity={100} color="gray">
      だいこんは
    </Link>
    <Link href="#link--サイドバーリンク" quantity={1000} color="yellow">
      スティックセニョール
    </Link>
    <Link href="#link--サイドバーリンク" quantity={10000}>
      きゃべつ
    </Link>
    <Link href="#link--サイドバーリンク" quantity={999999}>
      ピーマン
    </Link>
  </div>
);

export const 選択時 = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: NAVY.default }}>
    <Link href="#link--サイドバーリンク" active>
      きゅうり
    </Link>
    <Link href="#link--サイドバーリンク">たまねぎ</Link>
    <Link href="#link--サイドバーリンク" active color="blue">
      だいこんは
    </Link>
    <Link href="#link--サイドバーリンク" color="blue">
      さくらんぼ
    </Link>
    <Link href="#link--サイドバーリンク" active color="gray">
      だいこんは
    </Link>
    <Link href="#link--サイドバーリンク" color="gray">
      万願寺とうがらし
    </Link>
    <Link href="#link--サイドバーリンク" active color="yellow">
      スティックセニョール
    </Link>
  </div>
);

export const 使用不可 = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: NAVY.default }}>
    <Link href="#link--サイドバーリンク" disabled>
      きゅうり
    </Link>
    <Link href="#link--サイドバーリンク" active disabled color="blue">
      たまねぎ
    </Link>
    <Link href="#link--サイドバーリンク" disabled color="gray">
      だいこんは
    </Link>
    <Link href="#link--サイドバーリンク" disabled color="yellow">
      スティックセニョール
    </Link>
  </div>
);
