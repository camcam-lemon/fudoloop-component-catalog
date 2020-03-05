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

function Logout({ color, disabled = false, fill, size = '30px', styles, className }: IconProps) {
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
      <title>logout</title>
      <desc>Created with Sketch.</desc>
      <g id="logout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="27" height="27" />
        <g
          id="logout_icon"
          transform="translate(7.000000, 6.000000)"
          fill={fillColor}
          fillRule="nonzero"
        >
          <path
            d="M12,5.50100438 L11.9580521,10.9580521 L6.47641764,11 L7.84228242,9.64021501 L4,5.80530954 L6.81070592,3 L10.6565571,6.83846734 L12,5.50100438 Z"
            id="Rectangle-3"
            fillRule="nonzero"
            transform="translate(8.000000, 7.000000) rotate(-45.000000) translate(-8.000000, -7.000000) "
          />
          <path
            d="M12.5,12.5 L3,12.5 C2.17157288,12.5 1.5,11.8284271 1.5,11 L1.50082993,2.97120348 L1.5100666,2.82569246 C1.59749534,2.07295965 2.23658968,1.5 3,1.5 L12.5,1.5 L12.5,1 C12.5,0.723857625 12.2761424,0.5 12,0.5 L1,0.5 C0.723857625,0.5 0.5,0.723857625 0.5,1 L0.5,13 C0.5,13.2761424 0.723857625,13.5 1,13.5 L12,13.5 C12.2761424,13.5 12.5,13.2761424 12.5,13 L12.5,12.5 Z"
            id="Combined-Shape"
            stroke={fillColor}
          />
        </g>
      </g>
    </svg>
  );
}

export default Logout;
