import React from 'react';

type Props = {
  /** 表示するテキスト */
  text: string;
  /**
   * true: テキスト表示 false: テキスト非表示
   * @default false
   */
  flag?: boolean;
  /** ボタンを押した時のイベントハンドラ */
  action(): void;
} & JSX.IntrinsicElements['button'];

function Button({ children, ...props }: Props) {
  return (
    <button style={{ color: 'red', backgroundColor: 'blue' }} {...props}>
      {children}
    </button>
  );
}

export default Button;
