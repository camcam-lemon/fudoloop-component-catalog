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

function Delete({ color, disabled = false, fill, size = '30px', styles }: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 33"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={styles}
    >
      <title>Apprval</title>
      <desc>Created with Sketch.</desc>
      <g id="Delete" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="delete_icon">
          <path
            d="M9.11688312,26.2222222 C9.11688312,27.75 10.4493506,29 12.0779221,29 L23.9220779,29 C25.5506494,29 26.8831169,27.75 26.8831169,26.2222222 L26.8831169,9.55555556 L9.11688312,9.55555556 L9.11688312,26.2222222 Z M28.3636364,5.38888889 L23.1818182,5.38888889 L21.7012987,4 L14.2987013,4 L12.8181818,5.38888889 L7.63636364,5.38888889 L7.63636364,8.16666667 L28.3636364,8.16666667 L28.3636364,5.38888889 Z"
            id="Shape"
            fill={fillColor}
            fillRule="nonzero"
          />
          <polygon id="Path" points="0 0 36 0 36 33 0 33" />
        </g>
      </g>
    </svg>
  );
}

export default Delete;
