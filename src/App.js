import React from "react";
import "./styles.css";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import RouterItem from "./RouterItem";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={RouterItem} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/project" component={Project} />
        </Switch>
      </main>
    </div>
  );
}
