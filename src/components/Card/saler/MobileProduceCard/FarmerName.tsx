import React from 'react';
import styled, { css } from 'styled-components';
import { WHITE, GRAY, NAVY } from '../../../../colors';
import ForwardBottom from '../../../Icons/ForwardBottom';

type Props = {
  name: string;
  producerNumber: string;
  open: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const styles: { [key: string]: React.CSSProperties } = {
  margin: {
    marginLeft: '1rem',
  },
  icon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  },
};

function FarmerName({ name, producerNumber, open, onClick }: Props) {
  return (
    <GutterButton onClick={onClick}>
      <div>{name}</div>
      <div style={styles.margin}>{producerNumber}</div>
      <Switching open={open} onClick={onClick}>
        <ForwardBottom styles={styles.icon} />
      </Switching>
    </GutterButton>
  );
}

const GutterButton = styled.button`
  font-size: 1rem;
  font-family: Hiragino Sans;
  font-weight: 500;
  display: flex;
  position: relative;
  width: inherit;
  min-height: 77px;
  background-color: ${WHITE};
  color: ${NAVY.default};
  border: none;
  border-bottom: 1px solid ${GRAY.default};
  padding: 0 30px;
  letter-spacing: 1.6px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const Switching = styled.button<{ open: boolean }>`
  position: absolute;
  right: 24px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition-duration: 0.2s;

  ${({ open }) =>
      open &&
      css`
        transform: rotate(180deg);
      `}
    :focus {
    outline: none;
  }
`;

export default React.memo(FarmerName);
