import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import GoodJobIcon from '../../Icons/GoodJob';
import { Color, ColorPreset, GRAY } from '../../../colors';
import Fonts from '../../../fonts';
import { Event } from '../../../@types/EventEmitter.d';
import { getColorPreset } from '../../util';

export type RagerButtonProps = {
  /** ボタンの色 */
  color?: Color;
  /** 使用可否 */
  disabled?: boolean;
  /** 一度押すと強制的に使用不能にする
   * disabledと併用した場合、そちらが優先される
   */
  once?: boolean;
  /** カスタムスタイル */
  styles?: React.CSSProperties;
  /** クリック時に実行する関数 */
  onClick?: (e: Event['click']) => void;
};

function useButton({
  once,
  disabled,
  onClick: onPClick,
}: Pick<RagerButtonProps, 'once' | 'disabled' | 'onClick'>) {
  const [clicked, setClicked] = useState(false);
  const onClick = useCallback(
    (e: Event['click']) => {
      e.stopPropagation();
      if (once) setClicked(true);
      if (onPClick) onPClick(e);
    },
    [onPClick, once],
  );

  useEffect(() => {
    setClicked(!!disabled);
  }, [disabled]);

  return { clicked, onClick };
}

function RagerButton({
  color = 'green',
  disabled = false,
  once = true,
  onClick: onPClick,
}: RagerButtonProps) {
  const colors = getColorPreset(color);
  const { clicked, onClick } = useButton({ once, disabled, onClick: onPClick });

  return (
    <Button colors={colors} disabled={clicked} onClick={onClick}>
      <Text color={colors.font} clicked={clicked}>
        {clicked ? '了解しました' : '了解する'}
      </Text>
      {!clicked && <RagerIcon fill="currentColor" />}
    </Button>
  );
}

const Button = styled.button<{ colors: ColorPreset; disabled: boolean }>`
  ${Fonts[500]};
  position: relative;
  display: inline-flex;
  font-size: 0.875rem;
  width: 120px;
  height: 40px;
  background: radial-gradient(
    circle 32px at 20px,
    white 50%,
    ${({ colors }) => colors.default} 50%
  );
  color: ${({ colors }) => colors.default};
  border: 1px solid ${({ colors }) => colors.default};
  border-radius: 20px;
  letter-spacing: -0.35px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background: radial-gradient(
      circle 32px at 20px,
      white 50%,
      ${({ colors, disabled }) => (disabled ? GRAY.default : colors.hover)} 50%
    );
    color: ${({ colors }) => colors.hover};
  }

  :active {
    background: radial-gradient(
      circle 32px at 20px,
      white 50%,
      ${({ colors, disabled }) => (disabled ? GRAY.default : colors.press)} 50%
    );
    color: ${({ colors }) => colors.press};
  }

  :disabled {
    background: ${GRAY.hover};
    color: ${GRAY.default};
    border: ${GRAY.default};
    cursor: default;
  }

  :focus {
    outline: none;
  }
`;
const Text = styled.div<{ clicked: boolean; color: string }>`
  position: ${({ clicked }) => (clicked ? 'initial' : 'absolute')};
  left: ${({ clicked }) => (clicked ? 'unset' : '47px')};
  color: ${({ color, clicked }) => (clicked ? GRAY.default : color)};
`;
const RagerIcon = styled(GoodJobIcon)`
  position: absolute;
  left: 9px;
`;

export default RagerButton;
