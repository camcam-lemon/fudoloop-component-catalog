import React from 'react';
import styled from 'styled-components';
import { NAVY } from '../../../colors';
import IconButton from '../../Button/shared/IconButton';
import ForwardLeftIcon from '../../Icons/ForwardLeft';
import CrossIcon from '../../Icons/Cross';

export type HeaderProps = {};

function Header({}: HeaderProps) {
  return (
    <Container>
      <Wrapper>{/* <IconButton></IconButton> */}</Wrapper>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: auto;
  right: 0;
  z-index: 1000;
  background-color: ${NAVY.dark};
`;
const Wrapper = styled.div`
  min-height: 54px;
  padding: 0 10px;
`;

export default Header;
