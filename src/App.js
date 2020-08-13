import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import AltaGasto from "./pages/AltaGasto";
import ListaGasto from "./pages/ListaGasto";
import Notification from "./components/notifications/Notification";

import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0460a9",
    },
    secondary: {
      main: "#fcaf18",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, Helvetica, sans-serif",
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/alta-gastos" component={AltaGasto} />
            <Route path="/lista-gastos" component={ListaGasto} />
            <PrivateRoute path="/" component={Layout} />
          </Switch>
          <Notification></Notification>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
