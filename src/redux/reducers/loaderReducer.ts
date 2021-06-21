import * as loaderActionTypes from "../actionTypes/loaderActionTypes";
import { createReducer } from "../../utils/storeUtils";

const initState = {
  count: 0,
};

const reducers = {
  [loaderActionTypes.LOADER_START](state: { count: number }) {
    state.count += 1;
  },
  [loaderActionTypes.LOADER_STOP](state: { count: number }) {
    state.count -= 1;
  },
};

export default createReducer(initState, reducers);
