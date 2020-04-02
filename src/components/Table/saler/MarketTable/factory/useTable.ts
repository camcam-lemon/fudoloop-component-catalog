import { createContext, useReducer } from 'react';
import { Event } from '../../../../../@types/EventEmitter.d';

export interface Data {
  id: string;
  name: string;
  standard?: string;
  totalAmount?: number;
  prices: {
    row?: number;
    middle?: number;
    high?: number;
  };
  comment: string;
}

export type TableState = {
  dataList: Data[];
  editable: boolean;
  editIndex: number;
};

export const initialState: TableState = {
  dataList: [],
  editable: false,
  editIndex: -1,
};

type ContextProps = {
  tableUIState: TableState;
  action: {
    onEdit: (index: number) => (e: Event['click']) => void;
    onComplete: (e: Event['click']) => void;
    onClose: (e: Event['click'] | Event['clickDiv']) => void;
  };
};

export const MarketTableContext = createContext<ContextProps>(null as any);

export const setDataList = (payload: Data[] = []) =>
  ({
    type: 'SET_DATA_LIST',
    payload,
  } as const);
export const updateDataList = (payload: {
  standard: string;
  totalAmount: string;
  row: string;
  middle: string;
  high: string;
  comment: string;
}) =>
  ({
    type: 'UPDATE_DATA_LIST',
    payload,
  } as const);
export const openTableRow = (payload: number, callback?: () => void) =>
  ({
    type: 'OPEN_TABLE_ROW',
    payload,
    callback,
  } as const);
export const closeTableRow = () =>
  ({
    type: 'CLOSE_TABLE_ROW',
  } as const);

type Action = ReturnType<
  typeof setDataList | typeof updateDataList | typeof openTableRow | typeof closeTableRow
>;

export const tableUIState: React.Reducer<TableState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_DATA_LIST': {
      return { ...state, dataList: action.payload };
    }
    case 'UPDATE_DATA_LIST': {
      const { standard, totalAmount, row, middle, high, comment } = action.payload;
      const data = state.dataList.map((key, index) =>
        index === state.editIndex
          ? {
              ...key,
              standard,
              totalAmount: Number(totalAmount),
              prices: {
                row: Number(row),
                middle: Number(middle),
                high: Number(high),
              },
              comment,
            }
          : key,
      );
      return { ...state, dataList: data };
    }
    case 'OPEN_TABLE_ROW': {
      return { ...state, editable: true, editIndex: action.payload };
    }
    case 'CLOSE_TABLE_ROW': {
      return { ...state, editable: false, editIndex: -1 };
    }
    default: {
      const _: never = action;
      return state;
    }
  }
};

export function useTable() {
  const [state, dispatch] = useReducer(tableUIState, initialState);

  return { tableUIState: state, dispatch };
}
