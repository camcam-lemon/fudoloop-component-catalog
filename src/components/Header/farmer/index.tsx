import React from 'react';
import styled from 'styled-components';
import { NAVY, WHITE, Color } from '../../../colors';
import Fonts from '../../../fonts';
// import IconButton from '../../Button/shared/IconButton';
import { Event } from '../../../@types/EventEmitter.d';
import ForwardLeftIcon from '../../Icons/ForwardLeft';
import CrossIcon from '../../Icons/Cross';
import { getColorPreset } from '../../util';

export type Icon = 'close' | 'back';

export type HeaderProps = {
  color?: Color;
  icon: Icon;

  onClick: (e: Event['click']) => void;
  children?: React.ReactNode;
};

const styles: React.CSSProperties = {
  margin: 0,
  padding: 0,
  background: 'unset',
  border: 'none',
  position: 'absolute',
  left: '10px',
};

const getIcon = (icon: HeaderProps['icon'], onClick: HeaderProps['onClick']) => {
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
        <button style={styles}>{getIcon(icon, onClick)}</button>
        <Title>{children}</Title>
      </Wrapper>

      <>{/* <CrossIcon /> */}</>
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
  background-color: ${NAVY.dark};
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
  width: 24px;
  height: 24px;
`;
const Title = styled.div`
  letter-spacing: -0.4px;
`;

export default Header;
