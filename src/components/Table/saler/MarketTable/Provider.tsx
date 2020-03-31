/* eslint-disable import/no-cycle */
import React, { useState, useEffect, useCallback } from 'react';
import { MarketTableProps, Data } from '.';
import { Event } from '../../../../@types/EventEmitter.d';

export const MarketTableContext = React.createContext<ContextProps>(null as any);

type Props = {
  children: React.ReactNode;
} & MarketTableProps;

function useTable({ renderData, onClickEdit, onClickEditComplete }: MarketTableProps) {
  const [dataList, setDataList] = useState<Data[]>(renderData);
  const [editable, setEditable] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    setDataList(renderData);
  }, [renderData]);

  const onEdit = useCallback(
    (index: number) => (e: Event['click']) => {
      setEditable(true);
      setEditIndex(index);
      if (onClickEdit) onClickEdit(e, index);
    },
    [onClickEdit],
  );

  const onComplete = useCallback(
    (index: number) => (e: Event['click']) => {
      if (onClickEditComplete) onClickEditComplete(e, index);
      setEditIndex(-1);
      setEditable(false);
    },
    [onClickEditComplete],
  );

  const onCancel = useCallback(() => {
    setEditable(false);
    setEditIndex(-1);
  }, []);

  return {
    dataList,
    editable,
    editIndex,
    action: {
      onEdit,
      onComplete,
      onCancel,
    },
    update: {
      data: setDataList,
      editable: setEditable,
    },
  };
}

type ContextProps = ReturnType<typeof useTable>;

export const Provider: React.FC<Props> = ({ renderData, children }) => {
  const state = useTable({ renderData });

  return <MarketTableContext.Provider value={state}>{children}</MarketTableContext.Provider>;
};
