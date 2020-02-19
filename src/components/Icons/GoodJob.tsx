/* eslint-disable max-len */
import React from 'react';
import { getSvgColor } from '../util';
import { Color, GREEN } from '../../colors';

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
  /** svgに指定するスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** svgに指定するスタイル(cssModules)
   * styled関数の継承にも対応している
   */
  className?: string;
};

function GoodJob({
  color,
  disabled = false,
  fill = GREEN.default,
  size = '22px',
  styles,
  className,
}: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22 22"
      style={styles}
      className={className}
    >
      <g fill={fillColor} fillRule="evenodd">
        <rect width="5" height="12" y="9" rx="1" />
        <path d="M7 19.933V9.985a5 5 0 01.86-2.804l3.053-4.507a5 5 0 01.11-.155L12.453.57a1 1 0 011.44-.18l.475.388a2 2 0 01.714 1.811l-.118.878a5 5 0 01-.314 1.198l-.472 1.178a1 1 0 00.928 1.372h5.13l.285.09a2 2 0 011.366 2.21l-.618 4.001a10 10 0 01-1.23 3.487l-.867 1.495a5 5 0 01-4.368 2.493l-6.812-.058a1 1 0 01-.992-1z" />
      </g>
    </svg>
  );
}

export default GoodJob;
