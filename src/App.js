import React from "react";

import { Switch, Route } from "react-router-dom";

import "./Style.css";
import "./App.css";
import Home from "./components/page/Home";
import About from "./components/page/About";
import DashBoard from "./components/page/DashBoard";
import Service from "./components/page/Service";
import Portfolio from "./components/page/Portfolio";
import Skill from "./components/page/Skill";
import Blog from "./components/page/Blog";
import Contact from "./components/page/Contact";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/DashBoard" exact component={DashBoard} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Service" component={Service} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Skill" component={Skill} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <DashBoard />
      </Switch>
    </div>
  );
}

export default App;
