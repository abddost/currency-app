import createNextState from "immer";

export function createReducer(
  initialState: any,
  actionsMap: { [x: string]: any }
) {
  return function (state = initialState, action: { type: string | number }) {
    return createNextState(state, (draft: any) => {
      const caseReducer = actionsMap[action.type];

      if (caseReducer) {
        return caseReducer(draft, action);
      }

      return draft;
    });
  };
}
