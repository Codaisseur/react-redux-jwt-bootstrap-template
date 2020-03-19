import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignUp from "./pages/SignUp";

const Home = () => <h1>Home</h1>;
const Other = () => <h1>Other</h1>;

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
