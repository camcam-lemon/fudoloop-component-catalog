import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { WHITE } from '../../../../colors';
import FarmerName from './FarmerName';
import TodayProduce from './TodayProduce';
import TomorrowProduce from './TomorrowProduce';
import Comment from './Comment';

export type Report = {
  name: string;
  producerNumber: string;
  today: any;
  tomorrow: any;
  comment?: string;
};

export type MobileProduceCardProps = {
  report: Report;
};

function MobileProduceCard({
  report: { name, producerNumber, today, tomorrow, comment },
}: MobileProduceCardProps) {
  const [open, setOpen] = useState(false);
  const onHnadleForward = useCallback((e: any) => {
    e.stopPropagation();
    setOpen(prev => !prev);
  }, []);

  return (
    <Card>
      <FarmerName
        name={name}
        producerNumber={producerNumber}
        open={open}
        onClick={onHnadleForward}
      />
      <TransitionContainer open={open}>
        <TodayProduce yet={!today} />
        <TomorrowProduce yet={!tomorrow} hasComment={!!comment} />
        {comment && <Comment comment={comment} />}
      </TransitionContainer>
    </Card>
  );
}

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 344px;
  height: auto;
  min-height: auto;
  background-color: ${WHITE};
`;

const TransitionContainer = styled.div<{ open: boolean }>`
  width: inherit;
  height: 0;
  min-height: 0;
  margin: 0;
  padding-bottom: 0;
  overflow: hidden;
  opacity: 0;
  transition-duration: 0.3s;

  ${({ open }) =>
    open &&
    css`
      height: auto;
      opacity: 1;
      padding-bottom: 20px;
      transition: padding-bottom 0.3s ease-out, opacity 1s linear;
    `};
`;

export default MobileProduceCard;
