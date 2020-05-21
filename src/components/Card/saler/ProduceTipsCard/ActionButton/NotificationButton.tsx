import * as React from 'react';
import Button from '../../../../Button/saler/Base';

type Props = {
  unregisterd?: boolean;
  onCancel: () => void;
  onNotification?: () => void;
};

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    width: '132px',
    height: '36px',
  },
  cancelButton: {
    width: '132px',
    height: '36px',
    marginRight: '20px',
  },
};

export const NotificationButton: React.FC<Props> = ({ unregisterd, onCancel, onNotification }) => {
  return (
    <>
      {!unregisterd && (
        <Button styles={styles.cancelButton} color="gray" onClick={onCancel}>
          キャンセル
        </Button>
      )}
      <Button styles={styles.button} onClick={onNotification}>
        お知らせする
      </Button>
    </>
  );
};
