import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Columns, Column } from "bloomer";

import { App } from "./components/app";
import { Sidebar } from "./components/sidebar";

const rootElement: HTMLElement | null = document.getElementById("root");

if (Worker) {
  const worker = new Worker("rssWorker.bundle.js");
  worker.postMessage({ payload: { type: "start" } });
}

ReactDOM.render(
  <Router>
    <Container>
      <Columns isCentered>
        <Column isSize="1/3">
          <Sidebar />
        </Column>
        <Column>
          <Route path="/" component={App} />
        </Column>
      </Columns>
    </Container>
  </Router>,
  rootElement
);
