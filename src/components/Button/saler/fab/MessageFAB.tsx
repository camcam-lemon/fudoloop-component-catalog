import React from 'react';
import styled from 'styled-components';
import MessageIcon from '../../../Icons/Message';
import { Color, ColorPreset, GRAY, OVERLAY } from '../../../../colors';
import Fonts from '../../../../fonts';
import { Event } from '../../../../@types/EventEmitter.d';
import { getColorPreset } from '../../../util';

export type MessageFABProps = {
  /** ボタンの色 */
  color?: Color;
  /** 使用可否 */
  disabled?: boolean;
  /** カスタムスタイル */
  styles?: React.CSSProperties;
  /** svgに指定するスタイル(cssModules)
   * styled関数の継承にも対応している
   */
  className?: string;
  /** クリック時に実行する関数 */
  onClick?: (e: Event['click']) => void;
};

function MessageFAB({
  color = 'green',
  disabled = false,
  styles,
  className,
  onClick,
  ...props
}: MessageFABProps) {
  const colors = getColorPreset(color);

  return (
    <Button
      colors={colors}
      disabled={disabled}
      style={styles}
      className={className}
      onClick={onClick}
      {...props}
    >
      <Wrapper>
        <MessageIcon size="22px" fill="currentColor" />
        <Text>メッセージを送る</Text>
      </Wrapper>
    </Button>
  );
}

const Button = styled.button<{ colors: ColorPreset }>`
  ${Fonts[600]}
  width: 120px;
  height: 54px;
  font-size: 0.875rem;
  position: relative;
  padding: 0 10px;
  background-color: ${({ colors }) => colors.default};
  color: ${({ colors }) => colors.font};
  border: none;
  border-radius: 6px;
  letter-spacing: -0.35px;
  box-shadow: 1px 2px 4px 0 ${OVERLAY['50%']};
  cursor: pointer;

  :disabled {
    background-color: ${GRAY.default};
    color: ${GRAY.hover};
    cursor: default;
  }

  :hover {
    background-color: ${({ colors, disabled }) => (disabled ? GRAY.default : colors.hover)};
  }
  :active {
    background-color: ${({ colors, disabled }) => (disabled ? GRAY.default : colors.press)};
  }
  :focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Text = styled.div`
  width: 70px;
  margin-left: 10px;
  text-align: left;
`;

export default MessageFAB;
