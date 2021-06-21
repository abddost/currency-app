import React from "react";
import { Provider } from "react-redux";
import { Routes } from "./Routes";
import { configReduxStore } from "./redux/configReduxStore";

function App() {
  const { store } = configReduxStore();

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
