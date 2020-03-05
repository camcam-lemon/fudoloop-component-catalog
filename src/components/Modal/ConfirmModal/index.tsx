import React, { useCallback } from 'react';
import Button from '../../Button/saler/Base';
import { Overlay, Container, Contents, ModalTitle, ModalDiscription } from '../BasedStyle';
import { Event } from '../../../@types/EventEmitter.d';

export type ConfirmModalProps = {
  /** モーダルの開閉値 */
  open: boolean;
  /** タイトル */
  title?: React.ReactNode;
  /** 説明文 */
  description?: React.ReactNode;
  /** Yesボタンのテキスト */
  buttonText?: string;
  /** モーダルの外側をクリックした時に実行される関数 */
  onOuterClick?: (e: Event['clickDiv']) => void;
  /** キャンセルボタンをクリックした時に実行される関数 */
  onCancel?: (e: Event['click']) => void;
  /** Yesボタンを押した時に実行される関数 */
  onDone?: (e: Event['click']) => void;
};

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    width: '120px',
    height: '40px',
    margin: '0.5rem',
  },
  actionArea: {
    display: 'inline-flex',
  },
};

function ConfirmModal({
  open,
  title = '',
  description = '',
  buttonText = '',
  onOuterClick,
  onCancel,
  onDone,
}: ConfirmModalProps) {
  const onStopBubbling = useCallback((e: Event['clickDiv']) => {
    e.stopPropagation();
  }, []);

  if (!open) return null;

  return (
    <Overlay>
      <Container onClick={onOuterClick}>
        <Contents onClick={onStopBubbling}>
          <ModalTitle>{title}</ModalTitle>
          <ModalDiscription>{description}</ModalDiscription>
          <div style={styles.actionArea}>
            <Button color="gray" styles={styles.button} onClick={onCancel}>
              キャンセル
            </Button>
            <Button styles={styles.button} onClick={onDone}>
              {buttonText}
            </Button>
          </div>
        </Contents>
      </Container>
    </Overlay>
  );
}

export default ConfirmModal;
