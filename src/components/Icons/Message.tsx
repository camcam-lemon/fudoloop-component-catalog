/* eslint-disable max-len */
import React from 'react';
import { getSvgColor } from '../util';
import { Color, WHITE } from '../../colors';

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
  /** svgに指定するスタイル(cssModules)
   * styled関数の継承にも対応している
   */
  className?: string;
};

function Cross({
  color,
  disabled = false,
  fill = WHITE,
  size = '24px',
  styles,
  className,
}: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={styles}
      className={className}
    >
      <path
        fill={fillColor}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.8 2H18.2C19.19 2 20 2.81 20 3.8V14.6C20 15.59 19.19 16.4 18.2 16.4H5.6L2 20L2.009 3.8C2.009 2.81 2.81 2 3.8 2ZM5.6 12.8H16.4V11H5.6V12.8ZM16.4 10.1H5.6V8.3H16.4V10.1ZM5.6 7.4H16.4V5.6H5.6V7.4Z"
      />
    </svg>
  );
}

export default Cross;
