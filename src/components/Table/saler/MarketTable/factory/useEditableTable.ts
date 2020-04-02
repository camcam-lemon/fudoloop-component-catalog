import { createContext, useReducer } from 'react';
import { Data } from './useTable';

export type EditableTableState = {
  standard: string;
  totalAmount: string;
  row: string;
  middle: string;
  high: string;
  comment: string;
};

export const initialState: EditableTableState = {
  standard: '',
  totalAmount: '',
  row: '',
  middle: '',
  high: '',
  comment: '',
};

export const EditableTableFormContext = createContext<ContextProps>(null as any);

const parseString = (values: Data) => {
  const standard = values.standard || '';
  const totalAmount = values.totalAmount ? String(values.totalAmount) : '';
  const row = values.prices.row ? String(values.prices.row) : '';
  const middle = values.prices.middle ? String(values.prices.middle) : '';
  const high = values.prices.high ? String(values.prices.high) : '';
  const comment = values.comment || '';

  return { standard, totalAmount, row, middle, high, comment };
};

function init(values?: EditableTableState) {
  return values || initialState;
}

export const setFormValues = (payload: Data) =>
  ({
    type: 'SET_FORM_VALUES',
    payload,
  } as const);

export const changeFormValue = (payload: { prop: keyof EditableTableState; value: string }) =>
  ({
    type: 'CHANGE_FORM_VALUE',
    payload,
  } as const);
export const initialize = (payload?: {
  standard: string;
  totalAmount: string;
  row: string;
  middle: string;
  high: string;
  comment: string;
}) =>
  ({
    type: 'INITIALIZE',
    payload,
  } as const);

type Action = ReturnType<typeof setFormValues | typeof changeFormValue | typeof initialize>;

export const editableTableUIState: React.Reducer<EditableTableState, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_FORM_VALUES': {
      return parseString(action.payload);
    }
    case 'CHANGE_FORM_VALUE': {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    case 'INITIALIZE': {
      return init(action.payload);
    }
    default: {
      const _: never = action;
      return state;
    }
  }
};

export function useEditableTable() {
  const [state, dispatch] = useReducer(editableTableUIState, initialState, init);

  return { forms: state, changeForm: dispatch };
}

type ContextProps = ReturnType<typeof useEditableTable>;
