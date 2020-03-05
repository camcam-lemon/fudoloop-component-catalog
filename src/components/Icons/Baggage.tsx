/* eslint-disable max-len */
import React from 'react';
import { Color, WHITE } from '../../colors';
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

function Baggage({
  color,
  disabled = false,
  fill = WHITE,
  size = '30px',
  styles,
  className,
}: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 23"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={styles}
      className={className}
    >
      <title>Baggage</title>
      <desc>Created with Sketch.</desc>
      <g fill="none" fillRule="evenodd">
        <path
          stroke={fillColor}
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M.901 4.413L8.73 1.636l12.172 3.777-7 4.21z"
        />
        <path
          stroke={fillColor}
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.901 9.455l7-4.042v10.684l-7 5.316zM.901 14.125l13 7.288V9.623l-13-5.21z"
        />
        <path
          fill={fillColor}
          d="M16.593 7.962l1.612-1.052v4.782l-.385-.433-.419.741h-.54l-.268.913zM6.102 2.641L18.078 6.91l-1.485.878L4.69 3.193z"
        />
      </g>
    </svg>
  );
}

export default Baggage;
