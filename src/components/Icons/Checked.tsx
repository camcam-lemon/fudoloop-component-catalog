/* eslint-disable max-len */
import React from 'react';
import { Color, GREEN } from '../../colors';
import { getSvgColor } from '../util';

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
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
};

function Checked({
  color,
  disabled = false,
  fill = GREEN.default,
  size,
  styles,
  className,
}: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20px'}
      height={size || '20px'}
      viewBox="0 0 20 20"
      fill="none"
      style={styles}
      className={className}
    >
      <path
        fill={fillColor}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.01123 14.2736L15.5278 3L17.017 4.59736L6.57192 15.8273L5.01123 14.2736Z"
      />
      <path
        fill={fillColor}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.725 9.49902L8.16998 14.1052L6.57189 15.8269L2 11.2762L3.725 9.49902Z"
      />
    </svg>
  );
}

export default Checked;
