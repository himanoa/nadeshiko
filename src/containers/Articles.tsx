import { compose, lifecycle } from "recompose";

import createStore from "../createStore";
import { withArticlesState } from "../hocs/withArticlesState";
import { Articles as PArticles } from "../components/articles";
import { actionCreators as article } from "../reducers/article";

const initializeComponent = () => {
  const { pathname } = window.location;
  const matched = pathname.match(/\/feed\/(\d+)\/articles/);
  if (matched) {
    createStore().dispatch(article.fetchArticles(parseInt(matched[1], 10)));
  }
};

export const Articles = compose(
  withArticlesState,
  lifecycle({
    componentDidMount: initializeComponent
  })
)(PArticles);
