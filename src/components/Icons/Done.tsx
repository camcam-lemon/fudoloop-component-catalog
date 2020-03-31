/* eslint-disable max-len */
import React from 'react';
import { Color, BLUE } from '../../colors';
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

function Edit({
  color,
  disabled = false,
  fill = BLUE.default,
  size = '24px',
  styles,
  className,
}: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      className={className}
    >
      <path
        d="M9.00016 16.1701L4.83016 12.0001L3.41016 13.4101L9.00016 19.0001L21.0002 7.00009L19.5902 5.59009L9.00016 16.1701Z"
        fill={fillColor}
      />
    </svg>
  );
}

export default Edit;
