import React from 'react';
import styled from 'styled-components';
import { GRAY, NAVY } from '../../../../colors';

type Props = {
  yet: boolean;
  hasComment?: boolean;
};

function TomorrowProduce({ yet, hasComment }: Props) {
  return (
    <Container hasComment={hasComment}>
      <Date>2020/02/18(火)</Date>
      {yet && <Yet>報告がまだ届いていません</Yet>}
      {!hasComment && <Link href="https:hoge">直近の報告</Link>}
    </Container>
  );
}

const Container = styled.div<Pick<Props, 'hasComment'>>`
  padding: ${({ hasComment }) => (hasComment ? '20px 20px 30px 20px' : '20px 20px 0 20px')};
  border-bottom: ${({ hasComment }) => (hasComment ? `1px solid ${GRAY.default}` : 'unset')};
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
const Link = styled.a`
  font-family: Hiragino Sans;
  font-weight: 300;
  font-size: 0.8rem;
  display: inline-block;
  margin-top: 20px;
  line-height: 1.43;
  letter-spacing: -0.52px;
  color: ${NAVY.default};
  text-decoration: underline;
`;

export default React.memo(TomorrowProduce);
