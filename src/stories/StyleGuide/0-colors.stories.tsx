import React from 'react';
import styled from 'styled-components';

import { WHITE, NAVY, RED, GRAY, GREEN, BLUE, YELLOW, OVERLAY } from '../../colors';

export default {
  title: 'スタイルガイド',
};

export const カラープリセット = () => {
  return (
    <>
      <Container>
        <div>NAVYカラー</div>
        <Box color={WHITE} bgColor={NAVY.default}>
          {NAVY.dark}
        </Box>
        <Box color={WHITE} bgColor={NAVY.hover}>
          {NAVY.hover}
        </Box>
        <Box color={WHITE} bgColor={NAVY.dark}>
          {NAVY.dark}
        </Box>
      </Container>
      <Container>
        <div>GREENカラー</div>
        <Box color={WHITE} bgColor={GREEN.default}>
          {GREEN.default}
        </Box>
        <Box color={WHITE} bgColor={GREEN.hover}>
          {GREEN.hover}
        </Box>
        <Box color={WHITE} bgColor={GREEN.press}>
          {GREEN.press}
        </Box>
      </Container>
      <Container>
        <div>BLUEカラー</div>
        <Box color={WHITE} bgColor={BLUE.default}>
          {BLUE.default}
        </Box>
        <Box color={WHITE} bgColor={BLUE.hover}>
          {BLUE.hover}
        </Box>
        <Box color={WHITE} bgColor={BLUE.press}>
          {BLUE.press}
        </Box>
      </Container>
      <Container>
        <div>YELLOWカラー</div>
        <Box color={NAVY.default} bgColor={YELLOW.default}>
          {YELLOW.default}
        </Box>
        <Box color={NAVY.default} bgColor={YELLOW.hover}>
          {YELLOW.hover}
        </Box>
        <Box color={NAVY.default} bgColor={YELLOW.press}>
          {YELLOW.press}
        </Box>
      </Container>
      <Container>
        <div>GRAYカラー</div>
        <Box color={NAVY.default} bgColor={GRAY.default}>
          {GRAY.default}
        </Box>
        <Box color={NAVY.default} bgColor={GRAY.hover}>
          {GRAY.hover}
        </Box>
        <Box color={NAVY.default} bgColor={GRAY.press}>
          {GRAY.press}
        </Box>
      </Container>
      <Container>
        <div>OVERLAYカラー</div>
        <Box color={NAVY.dark} bgColor={OVERLAY['10%']}>
          {OVERLAY['10%']}
        </Box>
        <Box color={NAVY.dark} bgColor={OVERLAY['30%']}>
          {OVERLAY['30%']}
        </Box>
        <Box color={NAVY.dark} bgColor={OVERLAY['50%']}>
          {OVERLAY['50%']}
        </Box>
      </Container>
      <Container>
        <div>REDカラー</div>
        <Box color={WHITE} bgColor={RED.default}>
          {RED.default}
        </Box>
      </Container>
      <Container>
        <div>WHITEカラー</div>
        <Box border color={NAVY.dark} bgColor={WHITE}>
          {NAVY.dark}
        </Box>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  height: 332px;
`;

const Box = styled.div<{ color: string; bgColor: string; border?: boolean }>`
  font-size: 1.275rem;
  width: 400px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  border: ${({ border }) => (border ? `1px solid ${NAVY.default}` : 'unset')};
  margin: 16px 0;
  box-sizing: border-box;
`;
