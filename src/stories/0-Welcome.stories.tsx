import React from 'react';
import styled from 'styled-components';
import { NAVY } from '../colors';
import Fonts from '../fonts';

const Description = () => (
  <Article>
    <h1>コンポーネントカタログ</h1>
    <Note>fudoloop内で使用されているコンポーネントの一覧を記載しています。</Note>
    <Note>コンポーネントは全てReact + TypeScript + styled-componentsで構成。</Note>
  </Article>
);

export default {
  title: 'Welcome',
  component: Description,
};

export const ToStorybook = () => <Description />;

ToStorybook.story = {
  name: 'Fudoloopコンポーネントカタログ',
};

const Article = styled.article`
  ${Fonts['300']}
  margin-left: -144px;
  margin-top: -40px;
  display: block;
  color: ${NAVY.default};
  line-height: 1.4;
`;
const Note = styled.p`
  padding: 0;
  margin: 0.5rem 0;
`;
