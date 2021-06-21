import { combineReducers } from "redux";
import currency from "./currencyReducer";
import loader from "./loaderReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  currency,
  loader,
});
