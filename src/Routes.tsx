import React from "react";
import { Route, Switch } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Currencies from "./pages/Currencies";
import MainPage from "./pages/MainPage";

export const Routes = () => {
  return (
    <RootLayout>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/currencies" component={Currencies} />
      </Switch>
    </RootLayout>
  );
};
