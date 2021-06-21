// import { push } from "react-router-redux";
import * as loaderActions from "../actions/loaderAction";
// import { useSnackbar } from "notistack";
// import fp from "lodash/fp";

// const getErrorMessage = fp.get("response.data.message");
const apiMiddleware =
  ({ dispatch }: any) =>
  (next: (arg0: any) => any) =>
  (action: {
    api: any;
    types: any;
    query?: any;
    hideErrorNotification?: any;
  }) => {
    if (!action.api || !action.types) {
      return next(action);
    }
    const {
      api,
      types: [START, SUCCESS, ERROR],
      query,
      hideErrorNotification,
    } = action;

    dispatch({
      type: START,
      query,
    });

    dispatch(loaderActions.start());

    return api(query)
      .then((response: { data: { statusCode: number }; status: number }) => {
        dispatch(loaderActions.stop());

        if (
          response &&
          response.data &&
          response.status >= 200 &&
          (response.data.statusCode < 400 || !response.data.statusCode)
        ) {
          dispatch({
            type: SUCCESS,
            payload: response.data,
          });
          // console.warn(response.data);

          return {
            payload: response.data,
            query,
            responseStatus: response.status,
          };
        } else if (response.data.statusCode === 401) {
          // dispatch(authActions.logout());
          // dispatch(push("/login"));

          throw { response };
        } else {
          throw (
            (response && response.data && { response }) || {
              response: { data: { message: "Что-то не так!" } },
            }
          );
        }
      })
      .catch((error: { requestData: any; response: { status: number } }) => {
        dispatch({
          type: ERROR,
          error,
          query,
        });

        dispatch(loaderActions.stop());

        if (!hideErrorNotification) {
          // notification.open({
          //     type: "error",
          //     message: "error",
          //     description: (error.response && error.response.data && error.response.data.message) || error.message
          // });
        }

        error.requestData = query;
        if (error.response && error.response && error.response.status === 401) {
          // dispatch(authActions.logout());
        }

        throw error;
      });
  };

export default apiMiddleware;
