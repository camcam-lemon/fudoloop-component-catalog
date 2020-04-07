import React from 'react';
import styled from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TableComponent from './TableComponent';

addDecorator(storyFn => <Container>{storyFn()}</Container>);
addDecorator(
  withInfo({
    inline: true,
    TableComponent,
  }),
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
