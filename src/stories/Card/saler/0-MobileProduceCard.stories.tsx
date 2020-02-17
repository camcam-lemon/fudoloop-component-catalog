import React from 'react';
import { GRAY } from '../../../colors';
import { Column, Vertical } from '../../Container';

import MobileProduceCard, { Report } from '../../../components/Card/saler/MobileProduceCard';

export default {
  title: 'Card/saler/MobileProduceCard',
  component: MobileProduceCard,
};

const Data: Report[] = [
  {
    name: '田中ファーム',
    producerNumber: '020030',
    today: null,
    tomorrow: null,
    comment: `かゆい かゆい スコットーきた
ひどいかおなんで ころし
うまかっ  です。`,
  },
  {
    name: '飼育員の日記',
    producerNumber: '000004',
    today: null,
    tomorrow: null,
  },
];

export const デフォルト = () => (
  <Column center styles={{ backgroundColor: GRAY.default, padding: '1rem' }}>
    <MobileProduceCard report={Data[0]} />
    <Vertical />
    <MobileProduceCard report={Data[1]} />
  </Column>
);
