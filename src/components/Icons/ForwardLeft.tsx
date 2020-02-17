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

function ForwardLeft({ color, disabled = false, fill = NAVY.default, size, styles }: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '8px'}
      height={size || '13px'}
      viewBox="0 0 8 13"
      style={styles}
    >
      <path fill={fillColor} fillRule="evenodd" d="M8 11.5L6.5 13 0 6.5 6.5 0 8 1.5l-5 5z" />
    </svg>
  );
}

export default ForwardLeft;
