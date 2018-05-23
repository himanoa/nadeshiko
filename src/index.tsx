import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Container, Columns, Column } from "bloomer";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import "font-awesome-webpack";

import { App } from "./components/app";
import { Sidebar } from "./containers/sidebar";
import { Articles } from "./containers/Articles";
import { NotFound } from "./components/notfound";
import createStore from "./createStore";

import { actionCreators as feed } from "./reducers/feed";
import { actionCreators as article } from "./reducers/article";

import "./styles/index.scss";

const rootElement: HTMLElement | null = document.getElementById("root");
const columnStyle: React.CSSProperties = {
  marginTop: "20px",
  overflowY: "scroll"
};

createStore().dispatch(feed.initialFeed());
const history = createHistory();
history.listen(function(location, action) {
  const { pathname } = location;
  const matched = pathname.match(/\/feed\/(\d+)\/articles/);
  if (matched) {
    createStore().dispatch(article.fetchArticles(parseInt(matched[1])));
  }
});
ReactDOM.render(
  <Router history={history}>
    <Provider store={createStore()}>
      <Columns
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <Column isSize={2} style={columnStyle}>
          <Sidebar />
        </Column>
        <Column
          isSize={10}
          style={{ ...columnStyle, ...{ marginLeft: "2rem" } }}
        >
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
