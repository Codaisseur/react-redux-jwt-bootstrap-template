import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { appLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

const Home = () => <h1>Home</h1>;
const Other = () => <h1>Other</h1>;

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(appLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        {isLoading ? <Loading /> : null}
        <Route exact path="/" component={Home} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
