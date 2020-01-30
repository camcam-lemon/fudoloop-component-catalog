import React from 'react';
import styled from 'styled-components';
import { GRAY, Color, OVERLAY, ColorPreset } from '../../../colors';
import { getButtonColorPreset, getFontColor, variantBgColor, incompleteNode } from '../../util';

export type Variant = 'contained' | 'outlined' | 'text';

export type IconButtonProps = {
  /** fudoloopカラー */
  color?: Color;
  /** テキストのカラー
   * 指定するとアイコンの色も変わる
   */
  fontColor?: string;
  /** 使用可否 */
  disabled?: boolean;
  /** ボタンの種別
   * text : 背景透過でボーダー無しのボタン
   * outlined : 背景透過でボーダー有りのボタン
   * contained : 背景とシャドウ有りのボタン
   */
  variant?: Variant;
  /** クリック時に実行する関数 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** ボタンに表示する要素 */
  children?: React.ReactNode;
};

const forceEditSvgFillColor = (fontColor?: string, children?: React.ReactNode) => {
  if (!children) return null;
  if (!Array.isArray(children)) {
    if (incompleteNode(children)) return children;
    const obj = { ...(children as React.ReactElement) };
    return {
      ...obj,
      props: { ...obj.props, fill: obj.props.fontColor || fontColor },
    };
  }
  return children.map(node => {
    if (incompleteNode(node)) return node;
    const obj = { ...(node as React.ReactElement) };
    return {
      ...obj,
      props: { ...obj.props, fill: obj.props.fontColor || fontColor },
    };
  });
};

function IconButton({
  color = 'gray',
  fontColor: pFC,
  disabled = false,
  variant = 'text',
  onClick,
  children,
}: IconButtonProps) {
  const colors = getButtonColorPreset(color);
  const fontColor = pFC || getFontColor(color);

  return (
    <Button
      colors={colors}
      fontColor={fontColor}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      <Flex>{forceEditSvgFillColor(fontColor, children)}</Flex>
    </Button>
  );
}

type StyledProps = {
  colors: ColorPreset;
  fontColor: string;
  disabled: boolean;
  variant: Variant;
};

const Flex = styled.div`
  height: inherit;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<StyledProps>`
  font-family: Hiragino Sans;
  font-size: 0.8rem;
  min-width: 110px;
  height: 44px;
  background-color: ${({ variant, colors, disabled }) =>
    variantBgColor({ type: 'default', colors, variant, disabled })};
  color: ${({ fontColor }) => fontColor};
  border: ${({ variant, colors }) =>
    variant === 'outlined' ? `1px solid ${colors.default}` : 'none'};
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
  box-shadow: ${({ variant }) =>
    variant === 'contained' ? `0 2px 4px ${OVERLAY['50%']}` : 'unset'};

  :disabled {
    background-color: ${({ variant }) => (variant === 'contained' ? GRAY.default : 'unset')};
    color: ${GRAY.hover};
    cursor: initial;
  }

  :hover {
    background-color: ${({ colors, disabled, variant }) =>
      variantBgColor({ type: 'hover', colors, variant, disabled })};
  }
  :active {
    background-color: ${({ colors, disabled, variant }) =>
      variantBgColor({ type: 'press', colors, variant, disabled })};
  }

  :focus {
    outline: none;
  }
`;

export default IconButton;
