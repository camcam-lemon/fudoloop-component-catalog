import React from 'react';
import styled from 'styled-components';
import { GRAY, NAVY } from '../../../../colors';

type Props = {
  yet: boolean;
};

function TodayProduce({ yet }: Props) {
  return (
    <Container>
      <Date>2020/02/17(月)</Date>
      {yet && <Yet>報告がまだ届いていません</Yet>}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 20px 30px 20px;
  border-bottom: 1px solid ${GRAY.default};
  box-sizing: border-box;
`;
const Date = styled.div`
  font-family: Hiragino Sans;
  font-weight: 300;
  font-size: 0.8rem;
  color: ${GRAY.press};
  margin-bottom: 20px;
`;
const Yet = styled.div`
  font-family: Hiragino Sans;
  font-weight: 300;
  font-size: 0.8rem;
  letter-spacing: -0.35px;
  color: ${NAVY.default};
`;

export default React.memo(TodayProduce);
