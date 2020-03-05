/* eslint-disable max-len */
import React from 'react';
import { BLUE, Color } from '../../colors';
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

function Approval({
  color,
  disabled = false,
  fill = BLUE.default,
  size = '30px',
  styles,
  className,
}: IconProps) {
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
      <title>Apprval</title>
      <desc>Created with Sketch.</desc>
      <g id="Approval" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Icon_Approval">
          <circle id="Oval" stroke={fillColor} fill="#FFFFFF" cx="12" cy="12" r="12" />
          <g id="Check" transform="translate(4.000000, 5.000000)" fill={fillColor}>
            <polygon
              id="Rectangle"
              points="3.26056419 11.4253257 14.648077 0 16.2605642 1.61885786 4.95049664 13"
            />
            <polygon
              id="Rectangle"
              points="1.86785453 6.58697071 6.68093663 11.2551937 4.95049664 13 -1.22257759e-12 8.38807602"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Approval;
