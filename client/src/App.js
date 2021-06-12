import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./store";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import PrivateRoute from "./components/routering/PrivateRoute";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});


function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else store.dispatch(loadUser());
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Switch>
            {/* <PrivateRoute path="/todolist" component={Body} /> */}
          </Switch>
        </Router>
      </Provider>
    </div>
    </ThemeProvider>
  );
}

export default App;
