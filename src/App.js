import React, { useState } from "react";
import "./App.css";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Login from "./Login"; 
import Home from "./Home";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(!1);

  // Authentications
  const authorize = () => {
    const tokenExpiresAt = JSON.parse(localStorage.getItem("isLoggedIn"))
      .expiresAt;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (Date.parse(currentDate) < Date.parse(tokenExpiresAt)) return 1;
    return !1;
  };

  const login = () => {
    // set the state to true
    setLoggedIn(1);

    // set token for 1 day
    const dt = new Date();
    dt.setHours(dt.getHours() + 24);

    const data = {
      isLoggedIn: true,
      expiresAt: dt,
    };

    localStorage.setItem("isLoggedIn", JSON.stringify(data));
  };

  const logout = () => {
    setLoggedIn(!1);
    localStorage.removeItem("isLoggedIn");
  };

  // Private Functional Component
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn && authorize() ? (
            <Component {...props} logout={logout} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            isLoggedIn && authorize() ? <Redirect to="/app" /> : <Login login={login} />
          }
        />
        <PrivateRoute component={Home} path="/app" exact />
      </Switch>
    </Router>
  );
}

export default App;
