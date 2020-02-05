/* eslint-disable max-len */
import React from 'react';
import { RED, Color } from '../../colors';
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

function Ban({ color, disabled = false, fill = RED.default, size = '30px', styles }: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={styles}
    >
      <title>Ban</title>
      <desc>Created with Sketch.</desc>
      <g id="Ban" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Ban_icon">
          <circle id="Oval" stroke={fillColor} fill="#FFFFFF" cx="12" cy="12" r="12" />
          <g id="バツ" transform="translate(5.000000, 6.000000)" fill={fillColor}>
            <polygon
              id="Rectangle"
              points="0 11.4253257 11.3875128 0 13 1.61885786 1.68993245 13"
            />
            <polygon
              id="Rectangle"
              transform="translate(6.978872, 6.500000) scale(-1, 1) translate(-6.978872, -6.500000) "
              points="0.478871628 11.4253257 11.8663844 0 13.4788716 1.61885786 2.16880408 13"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Ban;
