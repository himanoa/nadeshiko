import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Columns, Column } from "bloomer";
import { Provider } from "react-redux";
import "font-awesome-webpack";

import { App } from "./components/app";
import { Sidebar } from "./containers/sidebar";
import { Articles } from "./containers/Articles";
import { NotFound } from "./components/notfound";

import createStore from "./createStore";
import { actionCreators as feed } from "./reducers/feed";

import "./styles/index.scss";

const rootElement: HTMLElement | null = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Provider store={createStore()}>
      <Columns style={{ marginTop: "20px", marginLeft: "20px" }}>
        <Column isSize={2}>
          <Sidebar />
        </Column>
        <Column>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/feed/:id/articles" component={Articles} />
            <Route component={NotFound} />
          </Switch>
        </Column>
      </Columns>
    </Provider>
  </Router>,
  rootElement
);

createStore().dispatch(
  feed.postFeed("himanoa", "https://blog.himanoa.net/rss", 2000)
);
