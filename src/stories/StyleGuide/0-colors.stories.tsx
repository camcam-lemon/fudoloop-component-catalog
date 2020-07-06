import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/saler/Base';

import { WHITE, NAVY, RED, GRAY, GREEN, BLUE, YELLOW, OVERLAY } from '../../colors';

export default {
  title: 'スタイルガイド',
};

export const 色の組み合わせ = () => {
  return (
    <div>
      <div>ボタンの配色</div>
      <div>ボタンの色はGREEN, BLUE, GRAY, NAVYの中から使っています。</div>
      <div>GREENカラーを例にとると</div>
      <Block>
        <Container>
          <div>GREENカラー</div>
          <Box color={WHITE} bgColor={GREEN.default}>
            default color
          </Box>
          <Box color={WHITE} bgColor={GREEN.hover}>
            hover color
          </Box>
          <Box color={WHITE} bgColor={GREEN.press}>
            press color
          </Box>
        </Container>
      </Block>
      <div>としています。</div>
      <div>色の濃さに応じてdefault,hover,pressを定義してます。</div>
      <div>基本的に濃くなりますが、NAVYのみhoverカラーが薄くなっています。</div>
      <div>また、各配色に対してテキストのカラーも決まっています。</div>
      <Block>
        <Button color="green" styles={{ marginRight: '1rem' }}>
          GREEN
        </Button>
        <Button color="blue">BLUE</Button>
      </Block>
      <Block>
        <Button color="yellow" styles={{ marginRight: '1rem' }}>
          YELLOW
        </Button>
        <Button color="gray">GRAY</Button>
      </Block>
      <div>disabledのデザインは全て共通です。</div>
      <Block>
        <Button color="green" disabled>
          disabled
        </Button>
      </Block>
      <div>disabled時の色の組み合わせは</div>
      <pre>
        <code>background-color: #58b947; color: #95a5a6;</code>
      </pre>
      <div>となっております。</div>
      <div>inputやcheckboxなどもdisabledの色の組み合わせは同じですが、一部例外があります。</div>
    </div>
  );
};

export const カラープリセット = () => {
  return (
    <>
      <Container>
        <div>NAVYカラー</div>
        <Box color={WHITE} bgColor={NAVY.default}>
          {NAVY.press}
        </Box>
        <Box color={WHITE} bgColor={NAVY.hover}>
          {NAVY.hover}
        </Box>
        <Box color={WHITE} bgColor={NAVY.press}>
          {NAVY.press}
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
        <Box color={NAVY.press} bgColor={OVERLAY['10%']}>
          {OVERLAY['10%']}
        </Box>
        <Box color={NAVY.press} bgColor={OVERLAY['30%']}>
          {OVERLAY['30%']}
        </Box>
        <Box color={NAVY.press} bgColor={OVERLAY['50%']}>
          {OVERLAY['50%']}
        </Box>
      </Container>
      <Container>
        <div>REDカラー</div>
        <Box color={WHITE} bgColor={RED.default}>
          {RED.default}
        </Box>
        <Box color={WHITE} bgColor={RED.hover}>
          {RED.hover}
        </Box>
        <Box color={WHITE} bgColor={RED.press}>
          {RED.press}
        </Box>
      </Container>
      <Container>
        <div>WHITEカラー</div>
        <Box border color={NAVY.press} bgColor={WHITE}>
          {NAVY.press}
        </Box>
      </Container>
    </>
  );
};

const Block = styled.div`
  display: block;
  text-align: center;
  margin: 1rem;
`;

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
