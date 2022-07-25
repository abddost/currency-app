import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { configReduxStore } from "./redux/configReduxStore";
import LoaderSpinner from "./components/LoaderSpinner";

function App() {
  const { store } = configReduxStore();

  const Routes = lazy(() =>
    import("./Routes").then(({ Routes }) => ({ default: Routes }))
  );

  return (
    <Provider store={store}>
      <Suspense fallback={() => <LoaderSpinner />}>
        <Routes />
      </Suspense>
    </Provider>
  );
}

export default App;
