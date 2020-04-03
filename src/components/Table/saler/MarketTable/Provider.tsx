/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from 'react';
import {
  useTable,
  MarketTableContext,
  Data,
  setDataList,
  openTableRow,
  closeTableRow,
  updateDataList,
} from './factory/useTable';
import {
  useEditableTable,
  EditableTableFormContext,
  EditableTableState,
  initialize,
  setFormValues,
} from './factory/useEditableTable';
import { Event } from '../../../../@types/EventEmitter.d';

type Props = {
  renderData?: Data[];
  onClickEdit?: (e: Event['click'], index: number) => void;
  onClickEditComplete?: (e: Event['click'], index: number, forms: EditableTableState) => void;
  onCancel?: (e: Event['click'] | Event['clickDiv'], index: number) => void;
};

function useAction({ renderData, onClickEdit, onClickEditComplete, onCancel }: Props) {
  const {
    tableUIState: { dataList, editable, editIndex },
    dispatch,
  } = useTable();
  const { forms, changeForm } = useEditableTable();

  useEffect(() => {
    dispatch(setDataList(renderData));
  }, [renderData]);

  useEffect(() => {
    if (editable && editIndex !== -1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const data = dataList.find((_, index) => index === editIndex)!;
      changeForm(setFormValues(data));
    }
  }, [editIndex, editable]);

  const onEdit = useCallback(
    (index: number) => (e: Event['click']) => {
      dispatch(openTableRow(index));
      if (onClickEdit) onClickEdit(e, index);
    },
    [onClickEdit],
  );

  const onComplete = (e: Event['click']) => {
    if (onClickEditComplete) onClickEditComplete(e, editIndex, forms);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(updateDataList(forms));
    changeForm(initialize());
    dispatch(closeTableRow());
  };

  const onClose = useCallback(
    (e: Event['click'] | Event['clickDiv']) => {
      if (onCancel) onCancel(e, editIndex);
      changeForm(initialize());
      dispatch(closeTableRow());
    },
    [onCancel, editIndex],
  );

  return {
    table: {
      tableUIState: {
        dataList,
        editable,
        editIndex,
      },
      action: {
        onEdit,
        onComplete,
        onClose,
      },
    },
    editableTable: {
      forms,
      changeForm,
    },
  };
}

export const Provider: React.FC<Props> = ({ children, ...props }) => {
  const { table, editableTable } = useAction(props);

  return (
    <MarketTableContext.Provider value={table}>
      <EditableTableFormContext.Provider value={editableTable}>
        {children}
      </EditableTableFormContext.Provider>
    </MarketTableContext.Provider>
  );
};
