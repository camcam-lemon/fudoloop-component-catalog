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

function Vegitable({ color, disabled = false, fill, size = '30px', styles, className }: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={styles}
      className={className}
    >
      <title>vegetable</title>
      <desc>Created with Sketch.</desc>
      <g id="vegetableIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="27" height="27" />
        <g id="vegitable" transform="translate(7.000000, 7.000000)" fill={fillColor}>
          <g id="vegetable_icon">
            <polygon
              id="Rectangle-Copy"
              points="12.7972526 1.55019169 13.4477224 2.43277666 11.54581 4.00551764 11.0502119 3.42159492"
            />
            <polygon
              id="Rectangle-Copy-2"
              points="13.5522645 2.65793235 14 3.53096292 11.8931963 4.74469167 11.674736 4.22343046"
            />
            <polygon
              id="Rectangle-Copy"
              points="11.769306 0.611307598 12.6572667 1.27515267 10.9573902 3.26420905 10.3160507 2.7360112"
            />
            <polygon
              id="Rectangle-Copy-2"
              points="10.7589871 0 11.5302223 0.482964414 10.1578157 2.60172101 9.47411333 2.21496897"
            />
            <path
              d="M5.66923113,3.32717922 C7.42434383,1.56598326 9.35786544,2.15106289 10.5910167,3.32717922 C11.8985566,4.57424362 12.4052822,6.52319754 10.5910167,8.40069893 C7.06570296,12.0488868 5.2484644,14 3.51864429,14 C2.92468519,14 1.88288196,13.7855479 1.0885762,13.7253614 C0.636562687,13.6911112 -1.234568e-13,14 -1.234568e-13,14 C-1.234568e-13,14 0.469629763,13.6131297 0.469629763,13.1390807 C0.469629763,12.4190728 0.232911396,11.5004376 0.232911396,10.8408415 C0.232911396,8.46924351 2.0531303,6.95581355 5.66923113,3.32717922 Z"
              id="Oval"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Vegitable;
