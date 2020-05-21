import * as React from 'react';
import { EditButton } from './EditButton';
import { NotificationButton } from './NotificationButton';

type Props = {
  unregisterd: boolean;
  isEdit: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onNotification?: () => void;
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '12px',
  },
};

export const ActionButton: React.FC<Props> = React.memo(
  ({ unregisterd, isEdit, onEdit, onCancel, onNotification }) => {
    return (
      <div style={styles.container}>
        {!unregisterd && !isEdit ? (
          <EditButton onEdit={onEdit} />
        ) : (
          <NotificationButton
            unregisterd={unregisterd}
            onCancel={onCancel}
            onNotification={onNotification}
          />
        )}
      </div>
    );
  },
);
