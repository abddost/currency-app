import { createReducer } from "../../utils/storeUtils";

import * as currencyTypes from "../actionTypes/currencyActionTypes";

const initialState = {
  list: {},
  item: {},
};

const reducers = {
  [currencyTypes.LOAD_CURRENCY_LIST_SUCCESS](
    state: { list: any; item: any },
    action: { payload: any }
  ) {
    state.list = action.payload;
    state.item = {};
  },

  [currencyTypes.LOAD_CURRENCY_LIST_ERROR](state: { list: never[] }) {
    state.list = [];
  },

  [currencyTypes.CONVERT_CURRENCY_LIST_SUCCESS](
    state: { item: any },
    action: { payload: { data: any } }
  ) {
    state.item = action.payload;
  },

  [currencyTypes.CONVERT_CURRENCY_LIST_ERROR](state: { item: {} }) {
    state.item = {};
  },
};

export default createReducer(initialState, reducers);
