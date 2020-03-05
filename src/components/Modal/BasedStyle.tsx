import styled, { keyframes } from 'styled-components';
import Fonts from '../../fonts';
import { OVERLAY, WHITE, NAVY } from '../../colors';

const feadIn = keyframes`
  0% {
      display: none;
      opacity: 0;
  }
  5% {
      display: block;
      opacity: 0;
  }
  100% {
      display: block;
      opacity: 1;
  }
`;

export const Overlay = styled.div`
  ${Fonts['500']}
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  position: fixed;
  overflow-y: scroll;
  touch-action: none;
  background-color: ${OVERLAY['30%']};
  -webkit-tap-highlight-color: transparent;
  animation: 0.3s ${feadIn} ease-in;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  white-space: pre-line;
`;
export const Contents = styled.div`
  position: absolute;
  display: flex;
  width: 50%;
  min-width: min-content;
  height: fit-content;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 24px;
  background-color: ${WHITE};
  color: ${NAVY.default};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2001;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ModalTitle = styled.div`
  font-size: 1.275rem;
`;
export const ModalDiscription = styled.div`
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;
