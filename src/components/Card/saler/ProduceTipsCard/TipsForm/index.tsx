import * as React from 'react';
import styled from 'styled-components';
import Textarea from '../../../../TextField/Textarea';
import Fonts from '../../../../../fonts';
import { Event } from '../../../../../@types/EventEmitter.d';

type Props = {
  tips: string;
  formValue: string;
  isEdit?: boolean;
  onChangeTips: (e: Event['changeTextArea']) => void;
};

const placeholder = `お知らせしたい情報を入力してください。（140文字まで）

統一したい似姿について、気をつけてほしいこと、流行りそうな病気など`;

export const TipsForm: React.FC<Props> = React.memo(({ tips, formValue, isEdit, onChangeTips }) => {
  if (isEdit)
    return <Textarea value={formValue} placeholder={placeholder} onChange={onChangeTips} />;

  return <TipsText>{tips}</TipsText>;
});

const TipsText = styled.div`
  ${Fonts.input.textField}
  box-sizing: border-box;
  vertical-align: middle;
  width: 560px;
  height: 100px;
  padding: 4px 12px;
`;
