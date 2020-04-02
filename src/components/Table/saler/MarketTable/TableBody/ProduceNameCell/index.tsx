import React, { useCallback, useMemo, useContext } from 'react';
import styled from 'styled-components';
import { EditableTableFormContext, changeFormValue } from '../../factory/useEditableTable';
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

function useTextField() {
  const {
    forms: { standard },
    changeForm,
  } = useContext(EditableTableFormContext);
  const onChange = useCallback(
    (e: Event['change']) => {
      e.stopPropagation();
      changeForm(changeFormValue({ prop: 'standard', value: e.target.value }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    value: standard,
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
  const { value, onChange } = useTextField();
  const marginTop = useCalcTextFieldMargin(name);
  console.log('render');

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
