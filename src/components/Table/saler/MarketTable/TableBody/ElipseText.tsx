import styled from 'styled-components';

export const ElipseText = styled.div<{ width: number; disabledPadding?: boolean }>`
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: ${({ disabledPadding }) => (disabledPadding ? '0' : '0 4px')};
`;
