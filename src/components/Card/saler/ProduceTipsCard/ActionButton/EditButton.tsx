import * as React from 'react';
import Button from '../../../../Button/saler/Base';

type Props = {
  onEdit: () => void;
};

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    width: '132px',
    height: '36px',
  },
};

export const EditButton: React.FC<Pick<Props, 'onEdit'>> = React.memo(({ onEdit }) => {
  return (
    <Button styles={styles.button} onClick={onEdit}>
      編集する
    </Button>
  );
});
