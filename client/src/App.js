import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./store";

import setAuthToken from "./utils/setAuthToken";
import Login from "./components/Pages/Login";
import PrivateRoute from "./components/routering/PrivateRoute";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Dashboard } from "./components/Pages/Dashboard";
import { LeggerName } from "./components/Pages/LeggerName";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#322f3d",
    },
    secondary: {
      main: "#6f6b7c",
    },
  },
});


function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/1" component={LeggerName} />
            {/* <PrivateRoute path="/2" component={Dashboard} />
            <PrivateRoute path="/3" component={Dashboard} />
            <PrivateRoute path="/4" component={Dashboard} /> */}
          </Switch>
        </Router>
      </Provider>
    </div>
    </ThemeProvider>
  );
}

export default App;
