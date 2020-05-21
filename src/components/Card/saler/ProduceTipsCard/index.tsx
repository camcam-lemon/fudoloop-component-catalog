import * as React from 'react';
import styled from 'styled-components';
import { TipsForm } from './TipsForm';
import { ActionButton } from './ActionButton';
import { WHITE } from '../../../../colors';
import { Event } from '../../../../@types/EventEmitter.d';

export type ProduceTipsCardProps = {
  /** TIPSが未登録か否かの真偽値 */
  unregisterd?: boolean;
  /** TIPSの内容 */
  tips?: string;
  /** お知らせするボタンに渡す関数 */
  onNotification?: () => void;
};

function useLocalTips(pTips?: string, unregisterd?: boolean) {
  const initialValue = React.useMemo(() => {
    if (unregisterd) return '';
    return pTips || '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [tips, setTips] = React.useState(initialValue);
  const [formValue, setFormValue] = React.useState(tips);

  React.useEffect(() => {
    setFormValue(tips);
    setTips(tips);
  }, [tips, unregisterd]);

  const onChangeTips = React.useCallback((e: Event['changeTextArea']) => {
    setFormValue(e.target.value);
  }, []);

  const onUpdate = React.useCallback(() => {
    setTips(formValue);
  }, [formValue]);
  const onUndo = React.useCallback(() => {
    setTips(tips);
    setFormValue(tips);
  }, [tips]);

  return {
    tips,
    formValue,
    onChangeTips,
    onUpdate,
    onUndo,
  };
}

function useEditable(pUnregisterd?: boolean) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [unregisterd, setRegisterd] = React.useState(!!pUnregisterd);

  React.useEffect(() => {
    setIsEdit(!!pUnregisterd);
  }, [pUnregisterd]);

  const onHandleEdit = React.useCallback(() => {
    setIsEdit(prev => !prev);
  }, []);

  return {
    isEdit,
    unregisterd,
    onHandleEdit,
    setRegisterd,
  };
}

const ProduceTipsCard: React.FC<ProduceTipsCardProps> = ({
  unregisterd: pUnregisterd,
  tips: pTips,
  onNotification: pNotification,
}) => {
  const { tips, formValue, onChangeTips, onUpdate, onUndo } = useLocalTips(pTips, pUnregisterd);
  const { isEdit, unregisterd, onHandleEdit, setRegisterd } = useEditable(pUnregisterd);

  const onCancel = React.useCallback(() => {
    onHandleEdit();
    onUndo();
  }, [onHandleEdit, onUndo]);
  const onNotification = React.useCallback(() => {
    if (pNotification) pNotification();
    onUpdate();
    onHandleEdit();
    setRegisterd(false);
  }, [onHandleEdit, onUpdate, pNotification, setRegisterd]);

  return (
    <Container>
      <TipsForm tips={tips} formValue={formValue} isEdit={isEdit} onChangeTips={onChangeTips} />
      <ActionButton
        unregisterd={unregisterd}
        isEdit={isEdit}
        onEdit={onHandleEdit}
        onCancel={onCancel}
        onNotification={onNotification}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  height: 188px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${WHITE};
`;

export default ProduceTipsCard;
