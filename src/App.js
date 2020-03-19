import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";

const Home = () => <h1>Home</h1>;
const Other = () => <h1>Other</h1>;

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/other" component={Other} />
      </Switch>
    </div>
  );
}

export default App;
