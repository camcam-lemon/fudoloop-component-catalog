import React from 'react';
import styled from 'styled-components';
import { NAVY } from '../../../../colors';

type Props = {
  comment: string;
};

function Comment({ comment }: Props) {
  return (
    <Container>
      <Text>{comment}</Text>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 30px 30px 20px;
`;
const Text = styled.div`
  font-family: Hiragino Sans;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: -0.4px;
  color: ${NAVY.default};
  word-wrap: break-word;
`;

export default React.memo(Comment);
