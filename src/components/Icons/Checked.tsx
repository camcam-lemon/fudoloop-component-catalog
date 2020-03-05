/* eslint-disable max-len */
import React from 'react';
import { Color, GREEN } from '../../colors';
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

function Checked({
  color,
  disabled = false,
  fill = GREEN.default,
  size,
  styles,
  className,
}: IconProps) {
  const fillColor = getSvgColor(disabled, fill, color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '17px'}
      height={size || '13px'}
      viewBox="0 0 17 13"
      style={styles}
      className={className}
    >
      <path
        fill={fillColor}
        fillRule="evenodd"
        d="M14.422.207a.683.683 0 0 0-.98 0L6.318 7.478a.683.683 0 0 1-.98 0L2.806 4.894a.682.682 0 0 0-.98 0L.204 6.552a.717.717 0 0 0 0 1l5.134 5.241c.271.276.71.276.98 0l9.73-9.93a.716.716 0 0 0 0-1L14.422.208z"
      />
    </svg>
  );
}

export default Checked;
