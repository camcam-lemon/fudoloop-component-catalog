import React from 'react';
import { useState, useCallback } from '@storybook/addons';
import Button from '../../components/Button/shared/Base';
import { Event } from '../../@types/EventEmitter.d';

import ConfirmModal from '../../components/Modal/ConfirmModal';

export default {
  title: 'Modal/ConfirmModal',
  component: ConfirmModal,
};

function useModal() {
  const [open, setOpen] = useState(false);
  const onHandleModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      setOpen(prev => !prev);
    },
    [],
  );

  return [open, onHandleModal] as const;
}

export const 確認モーダル = () => {
  const [clicked, setClicked] = useState(false);
  const [open, onHandleModal] = useModal();
  const onDone = useCallback(
    (e: Event['click']) => {
      onHandleModal(e);
      setClicked(true);
    },
    [onHandleModal],
  );

  return (
    <>
      <Button onClick={onHandleModal}>設定する</Button>
      {clicked && <div>設定を保存しました。</div>}
      <ConfirmModal
        open={open}
        title="設定しますか"
        description="確定すると元に戻せません。"
        buttonText="確定"
        onOuterClick={onHandleModal}
        onCancel={onHandleModal}
        onDone={onDone}
      />
    </>
  );
};
