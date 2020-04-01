import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import TextField from '../../../../../TextField/MarketField';
import { ElipseText } from '../ElipseText';
import { NAVY } from '../../../../../../colors';
import { Event } from '../../../../../../@types/EventEmitter.d';

type Props = {
  open: boolean;
  name: string;
  standard?: string;
};

const BASE_MARGIN = 68;
const BREAK_WORD = 10;

function useTextField(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: Event['change']) => {
    e.stopPropagation();
    setValue(e.target.value);
  }, []);

  return {
    value,
    onChange,
  };
}

function useCalcTextFieldMargin(name: string) {
  const marginTop = useMemo(() => {
    const weight = Math.floor((name.length - 1) / BREAK_WORD);
    return BASE_MARGIN - 20 * weight;
  }, [name]);

  return { marginTop };
}

export const ProduceNameCell: React.FC<Props> = React.memo(({ open, name, standard }) => {
  const { value, onChange } = useTextField(standard || '');
  const marginTop = useCalcTextFieldMargin(name);

  if (open) {
    return (
      <Container>
        <ProduceName>
          <Label>作物名</Label>
          <Name>{name}</Name>
        </ProduceName>
        <TextField
          label="規格・ブランド名など"
          id="standard"
          width="152px"
          align="left"
          styles={marginTop}
          value={value}
          onChange={onChange}
        />
      </Container>
    );
  }

  return (
    <div>
      <div>{name}</div>
      {standard && (
        <ElipseText disabledPadding width={180}>
          （{standard}）
        </ElipseText>
      )}
    </div>
  );
});

const Container = styled.div`
  text-align: left;
`;
const ProduceName = styled.div`
  display: block;
  text-align: left;
`;
const Label = styled.div`
  font-size: 10px;
  color: ${NAVY.default};
  letter-spacing: -0.4px;
`;
const Name = styled.div`
  margin-left: 4px;
  width: 156px;
`;
