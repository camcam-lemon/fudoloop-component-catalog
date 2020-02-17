import React from 'react';
import { getSvgColor } from '../util';
import { Color, NAVY } from '../../colors';

export type IconProps = {
  /** fufoloopのカラープリセット
   * 省略した場合は#FFFFFFが指定される
   * */
  color?: Color;
  /** アイコンの使用可否
   * trueの場合、colorプリセットやfill値が無視されてdisabledカラーになる
   */
  disabled?: boolean;
  /** アイコンのカスタムカラー */
  fill?: string;
  /** アイコンのサイズ */
  size?: string | number;
  /** svgに指定するスタイル */
  styles?: React.CSSProperties;
};

function ForwardBottom({ color, disabled = false, fill = NAVY.default, size, styles }: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '14'}
      height={size || '8px'}
      viewBox="0 0 14 8"
      style={styles}
    >
      <path
        fill={fillColor}
        fillRule="evenodd"
        d="M306 34.035L307.5 32.535 314 39.035 307.5 45.535 306 44.035 311 39.035z"
        transform="rotate(90 176 -129.965)"
      />
    </svg>
  );
}

export default ForwardBottom;
