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
  /** svgに指定するスタイル(cssModules)
   * styled関数の継承にも対応している
   */
  className?: string;
};

function Cross({
  color,
  disabled = false,
  fill = WHITE,
  size = '13px',
  styles,
  className,
}: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 13 13"
      style={styles}
      className={className}
    >
      <path
        fill={fillColor}
        fillRule="evenodd"
        d="M6.5 8l-5 5L0 11.5l5-5-5-5L1.5 0l5 5 5-5L13 1.5l-5 5 5 5-1.5 1.5-5-5z"
      />
    </svg>
  );
}

export default Cross;
