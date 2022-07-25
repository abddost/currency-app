import * as currencyTypes from "../actionTypes/currencyActionTypes";
import { list, convert } from "../../api/currencyApi";
import { AxiosResponse } from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

type Param = {
  amount: string;
  from: string;
  to: string;
}

export const getCurrencies =
  () =>
  (
    dispatch: (arg0: {
      api: (query: any) => Promise<AxiosResponse<any>>;
      types: string[];
      query: any;
    }) => void
  ) => {
    dispatch({
      api: list,
      types: [
        currencyTypes.LOAD_CURRENCY_LIST_START,
        currencyTypes.LOAD_CURRENCY_LIST_SUCCESS,
        currencyTypes.LOAD_CURRENCY_LIST_ERROR,
      ],
      query: {},
    });
  };

export const convertCurrency =
  (params: Param): ThunkAction<void, unknown, unknown, AnyAction> =>
  (
    dispatch: (arg0: {
      api: (query: Param) => Promise<AxiosResponse<Param>>;
      types: string[];
      query: Param;
    }) => void
  ) => {
    console.error(params);

    dispatch({
      api: convert,
      types: [
        currencyTypes.CONVERT_CURRENCY_LIST_START,
        currencyTypes.CONVERT_CURRENCY_LIST_SUCCESS,
        currencyTypes.CONVERT_CURRENCY_LIST_ERROR,
      ],
      query: params,
    });
  };
