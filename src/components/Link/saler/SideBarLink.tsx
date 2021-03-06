import React from 'react';
import styled from 'styled-components';
import { getColorPreset } from '../../util';
import { GRAY, Color, ColorPreset, RED, WHITE } from '../../../colors';

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
  /** カスタムスタイル(css-in-js) */
  styles?: React.CSSProperties;
  /** カスタムスタイル(cssModules & styled-component) */
  className?: string;
  /** リンクのテキスト */
  children?: React.ReactNode;
};

const adjustPosition = (quantity: number) => {
  const { length } = String(quantity);
  let base = -10;
  if (length > 3) base -= (length - 3) * 4;

  return `${base}px`;
};

function SideBarLink({
  color = 'green',
  href,
  active = false,
  disabled = false,
  quantity,
  styles,
  className,
  children,
}: Props) {
  const colors = getColorPreset(color);

  return (
    <Container>
      <Anchor
        href={disabled ? undefined : href}
        colors={colors}
        active={active}
        disabled={disabled}
        style={styles}
        className={className}
      >
        {children}
      </Anchor>
      {quantity && <Circle quantity={quantity}>{quantity}</Circle>}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
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
const Circle = styled.div<{ quantity: number }>`
  position: absolute;
  display: inline-flex;
  height: 20px;
  min-width: 20px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  top: 15px;
  right: ${({ quantity }) => adjustPosition(quantity)};
  background-color: ${RED.default};
  color: ${WHITE};
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
Container.displayName = 'Container';
Anchor.displayName = 'Anchor';
Circle.displayName = 'Circle';

export default SideBarLink;
