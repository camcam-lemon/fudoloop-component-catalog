/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { MarketTableProps, Data } from '.';

export const MarketTableContext = React.createContext<ContextProps>(null as any);

type Props = {
  renderData: MarketTableProps['renderData'];
  children: React.ReactNode;
};

function useTable({ renderData }: MarketTableProps) {
  const [dataList, setDataList] = useState<Data[]>(renderData);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    setDataList(renderData);
  }, [renderData]);

  return {
    dataList,
    editable,
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
