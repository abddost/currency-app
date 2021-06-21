import * as currencyTypes from "../actionTypes/currencyActionTypes";
import { list, convert } from "../../api/currencyApi";
import { AxiosResponse } from "axios";

export const getCurrencies =
  (params?: any) =>
  (
    dispatch: (arg0: {
      api: (query: any) => Promise<AxiosResponse<any>>;
      types: any[];
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
      query: params,
    });
  };

export const convertCurrency =
  (params: any) =>
  (
    dispatch: (arg0: {
      api: (query: any) => Promise<AxiosResponse<any>>;
      types: any[];
      query: any;
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
