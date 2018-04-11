import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Columns, Column } from "bloomer";

import { App } from "./components/app";
import { Sidebar } from "./containers/sidebar";
import { NotFound } from "./components/notfound";

const rootElement: HTMLElement | null = document.getElementById("root");

if (Worker) {
  const worker = new Worker("rssWorker.bundle.js");
  worker.postMessage({
    payload: { type: "start", urlHost: "https://google.com" }
  });
  const worker2 = new Worker("rssWorker.bundle.js");
  worker2.postMessage({
    payload: { type: "start", urlHost: "https://foobar.com" }
  });
}

ReactDOM.render(
  <Router>
    <Columns style={{ "margin-top": "20px", "margin-left": "20px" }}>
      <Column isSize={2}>
        <Sidebar />
      </Column>
      <Column>
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Column>
    </Columns>
  </Router>,
  rootElement
);
