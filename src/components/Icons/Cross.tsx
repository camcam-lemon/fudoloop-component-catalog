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
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
};

function Cross({ color, disabled = false, fill = WHITE, size, styles, className }: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      style={styles}
      className={className}
    >
      <g id="OvalContainer">
        <g id="CrossIcon">
          <path
            fill={fillColor}
            id="Rectangle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 15.3042L15.2635 3L17 4.74339L4.81993 17L3 15.3042Z"
          />
          <path
            fill={fillColor}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.6958 3L17 15.2635L15.2566 17L3 4.81993L4.6958 3Z"
          />
        </g>
      </g>
    </svg>
  );
}

export default Cross;
