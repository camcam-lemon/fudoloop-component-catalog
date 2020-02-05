/* eslint-disable max-len */
import React from 'react';
import { Color } from '../../colors';
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
};

function ArrowUp({ color, disabled = false, fill, size = '30px', styles }: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={styles}
    >
      <title>arrowUp</title>
      <desc>Created with Sketch.</desc>
      <g id="arrowUp_icon" stroke="none" strokeWidth="1" fillRule="evenodd">
        <path
          d="M11.8673437,0.446910574 L21.8816692,10.461236 C22.2721935,10.8517603 22.2721935,11.4849253 21.8816692,11.8754496 C21.6978318,12.059287 21.449625,12.1643011 21.1896694,12.1682287 L15.326,12.256 L15.3266226,27 C15.3266226,27.5522847 14.8789073,28 14.3266226,28 L7.46341449,28 C6.91112974,28 6.46341449,27.5522847 6.46341449,27 L6.463,12.39 L0.853769993,12.4754772 C0.301548268,12.4838205 -0.152879502,12.04292 -0.16122284,11.4906982 C-0.165308598,11.2202735 -0.0596846841,10.9597254 0.131556263,10.7684845 L10.4531302,0.446910574 C10.8436545,0.0563862822 11.4768195,0.0563862822 11.8673437,0.446910574 Z"
          id="Combined-Shape"
          fill={fillColor}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default ArrowUp;
