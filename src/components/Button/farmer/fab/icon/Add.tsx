import React from 'react';
import styled from 'styled-components';
import { YELLOW, OVERLAY, GRAY, NAVY } from '../../../../../colors';

type Props = {
  /** 使用可否 */
  disabled?: boolean;
  /** クリック時に実行する関数 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**ボタンのテキスト */
  //   buttonProps?: JSX.IntrinsicElements['button'];
};

function Add({ disabled, onClick, ...props }: Props) {
  return (
    <Button onClick={onClick} disabled={disabled} {...props}>
      <Vertical disabled={disabled} />
      <Horizontal disabled={disabled} />
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  width: 55px;
  height: 55px;
  right: 20px;
  bottom: 10px;
  font-family: Hiragino Sans;
  font-size: 1rem;
  background-color: ${YELLOW.default};
  color: ${NAVY.dark};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 1px 2px 4px 0 ${OVERLAY['50%']};
  z-index: 10;

  :disabled {
    background-color: ${GRAY.default};
    color: ${GRAY.hover};
    cursor: default;
  }

  :active {
    background-color: ${YELLOW.press};
  }
  :focus {
    outline: none;
  }
`;
const Vertical = styled.div<{ disabled?: boolean }>`
  position: absolute;
  width: 5px;
  height: 30px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: ${({ disabled }) => (disabled ? GRAY.hover : NAVY.dark)};
  border: none;
`;
const Horizontal = styled.div<{ disabled?: boolean }>`
  position: absolute;
  width: 30px;
  height: 5px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: ${({ disabled }) => (disabled ? GRAY.hover : NAVY.dark)};
  border: none;
`;
Button.displayName = 'Button';
Vertical.displayName = 'Vertical';
Horizontal.displayName = 'Horizontal';

export default Add;
