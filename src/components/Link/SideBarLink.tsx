import React from 'react';
import styled from 'styled-components';
import { getColorPreset } from '../util';
import { GRAY, Color, ColorPreset, RED, WHITE } from '../../colors';

type Props = {
  /** リンクエリアの色 */
  color?: Color;
  /** URL */
  href: string;
  /** ハイライトさせるかいなかの真偽値 */
  active?: boolean;
  /** 使用可否 */
  disabled?: boolean;
  /** 新着報告件数 */
  quantity?: number;
  /** リンクのテキスト */
  children?: React.ReactNode;
};

function SideBarLink({
  color = 'green',
  href,
  active = false,
  disabled = false,
  quantity,
  children,
}: Props) {
  const colors = getColorPreset(color);

  return (
    <div style={{ position: 'relative' }}>
      <Anchor
        href={disabled ? undefined : href}
        colors={colors}
        active={active}
        disabled={disabled}
      >
        {children}
      </Anchor>
      {quantity && <Circle>{quantity}</Circle>}
    </div>
  );
}

const Anchor = styled.a<{ colors: ColorPreset; active: boolean; disabled: boolean }>`
  display: inline-block;
  width: 216px;
  height: 44px;
  padding: 0px 20px 0px 30px;
  margin: 5px 0;
  line-height: 44px;
  vertical-align: middle;
  background-color: ${({ colors, active, disabled }) =>
    disabled || !active ? 'unset' : colors.hover};
  color: ${({ colors, active, disabled }) => (disabled || !active ? GRAY.hover : colors.font)};
  border-radius: 36px;
  text-decoration: none;
  letter-spacing: -0.4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  :hover {
    background-color: ${({ colors, disabled }) => (disabled ? 'unset' : colors.press)};
    color: ${({ colors, disabled }) => (disabled ? GRAY.hover : colors.font)};
  }
`;
const Circle = styled.div`
  position: absolute;
  display: inline-flex;
  height: 20px;
  min-width: 20px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  top: 15px;
  right: -10px;
  background-color: ${RED.default};
  color: ${WHITE};
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
Anchor.displayName = 'Anchor';

export default SideBarLink;
