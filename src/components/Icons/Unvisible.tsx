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
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
};

function Unvisible({ color, disabled = false, fill, size = '30px', styles, className }: IconProps) {
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
      className={className}
    >
      <title>vegetable</title>
      <desc>Created with Sketch.</desc>
      <g id="Unvisible" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="unvisible_icon">
          <g id="baseline-visibility_off-24px">
            <path
              d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
              id="Shape"
            />
            <path
              d="M12,7 C14.76,7 17,9.24 17,12 C17,12.65 16.87,13.26 16.64,13.83 L19.56,16.75 C21.07,15.49 22.26,13.86 22.99,12 C21.26,7.61 16.99,4.5 11.99,4.5 C10.59,4.5 9.25,4.75 8.01,5.2 L10.17,7.36 C10.74,7.13 11.35,7 12,7 Z M2,4.27 L4.28,6.55 L4.74,7.01 C3.08,8.3 1.78,10.02 1,12 C2.73,16.39 7,19.5 12,19.5 C13.55,19.5 15.03,19.2 16.38,18.66 L16.8,19.08 L19.73,22 L21,20.73 L3.27,3 L2,4.27 Z M7.53,9.8 L9.08,11.35 C9.03,11.56 9,11.78 9,12 C9,13.66 10.34,15 12,15 C12.22,15 12.44,14.97 12.65,14.92 L14.2,16.47 C13.53,16.8 12.79,17 12,17 C9.24,17 7,14.76 7,12 C7,11.21 7.2,10.47 7.53,9.8 L7.53,9.8 Z M11.84,9.02 L14.99,12.17 L15.01,12.01 C15.01,10.35 13.67,9.01 12.01,9.01 L11.84,9.02 Z"
              id="Shape"
              fill={fillColor}
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Unvisible;
