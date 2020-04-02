import styled from 'styled-components';
import { OVERLAY } from '../../../../../../colors';

export const IconButton = styled.button`
  right: 24px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    box-shadow: 0 0 0 10px ${OVERLAY['10%']}, 0 0 0 20px ${OVERLAY['10%']} inset;
  }
  :active {
    box-shadow: 0 0 0 10px ${OVERLAY['30%']}, 0 0 0 20px ${OVERLAY['30%']} inset;
  }

  :disabled {
    box-shadow: unset;
    pointer-events: none;
  }

  :focus {
    outline: none;
  }
`;
