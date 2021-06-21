import * as loaderActionTypes from "../actionTypes/loaderActionTypes";

export const start =
  () =>
  (
    dispatch: (arg0: { type: string }) => void,
    getState: () => { loader: { count: any } }
  ) => {
    const {
      loader: { count },
    } = getState();

    if (count === 0) {
      // console.log("#################################Start loader#################################")
      // Nprogress.start();
      return;
    }

    dispatch({
      type: loaderActionTypes.LOADER_START,
    });
  };

export const stop =
  () =>
  (
    dispatch: (arg0: { type: string }) => void,
    getState: () => { loader: { count: any } }
  ) => {
    const {
      loader: { count },
    } = getState();

    if (count === 1) {
      // console.log('#################################Stop loader#################################');
      // Nprogress.done();
      return;
    }

    dispatch({
      type: loaderActionTypes.LOADER_STOP,
    });
  };
