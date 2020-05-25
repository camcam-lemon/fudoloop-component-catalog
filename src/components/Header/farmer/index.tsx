import React from 'react';
import styled from 'styled-components';
import { NAVY, WHITE } from '../../../colors';
import Fonts from '../../../fonts';
import ForwardLeftIcon from '../../Icons/ForwardLeft';
import CrossIcon from '../../Icons/Cross';
import { Event } from '../../../@types/EventEmitter.d';

export type Icon = 'close' | 'back';

export type HeaderProps = {
  icon?: Icon;
  onClick?: (e: Event['click']) => void;
  children?: React.ReactNode;
};

const getIcon = (icon: HeaderProps['icon']) => {
  switch (icon) {
    case 'back': {
      return <ForwardLeftIcon fill={WHITE} />;
    }
    case 'close': {
      return <CrossIcon fill={WHITE} />;
    }
    default: {
      return null;
    }
  }
};

function Header({ icon = 'back', onClick, children }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <Button onClick={onClick}>{getIcon(icon)}</Button>
        <Title>{children}</Title>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  ${Fonts['300']}
  position: fixed;
  width: 100%;
  top: 0;
  left: auto;
  right: 0;
  z-index: 1000;
  background-color: ${NAVY.press};
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  min-height: 54px;
  padding: 0 10px;
  color: ${WHITE};
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  display: inline-flex;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 10px;
  background: unset;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
const Title = styled.div`
  letter-spacing: -0.4px;
`;

export default Header;
