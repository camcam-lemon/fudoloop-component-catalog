/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { safetyNumberToString } from '../util';

export type Shape = 'circle' | 'ellipse';

export type SpotLightProps = {
  shape?: Shape;
  top?: string | number;
  left?: string | number;
  size?: string | number;
};

const spotPosition = (shape: Shape, top: SpotLightProps['top'], left: SpotLightProps['left']) => {
  const topPos = safetyNumberToString(top);
  const leftPos = safetyNumberToString(left);
  return `${shape} at ${leftPos} ${topPos}`;
};

function SpotLight({
  shape = 'ellipse',
  left = 'center',
  top = 'center',
  size = '100px',
}: SpotLightProps) {
  const shapePositon = spotPosition(shape, top, left);
  return <Spot shape={shapePositon} size={size} />;
}

const Spot = styled.div<{ shape: string; size: string | number }>`
  position: absolute;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background: ${({ shape, size }) =>
    `radial-gradient(${shape}, transparent, transparent ${size}, rgba(0, 0, 0, 0.4) ${size}, rgba(0, 0, 0, 0.4))`};
  pointer-events: none;
`;

export default SpotLight;
