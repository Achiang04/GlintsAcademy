import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import { PageHome } from "./component/page_home";
import { PageAdd } from "./component/page_add";
import { PageEdit } from "./component/page_edit";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
        <Route exact path="/">
          <PageHome />
        </Route>
        <Route path="/todo/add">
          <PageAdd />
        </Route>
        <Route path="/todo/edit">
          <PageEdit />
        </Route>
      </Switch>
    </div>
  );
}
