import { withArticlesState } from "../hocs/withArticlesState";
import { Articles as PArticles } from "../components/articles";
import { compose, lifecycle } from "recompose";
import { RouteComponentProps } from "react-router";

type RouteParams = {
  id: string;
};

export const Articles = compose(
  withArticlesState,
  lifecycle({
    componentWillReceiveProps: function(
      nextProps: RouteComponentProps<RouteParams, any> & any
    ) {
      if (this.props.match.params.id !== nextProps.match.params.id) {
        console.dir(
          this.props.actions.fetchArticles(nextProps.match.params.id)
        );
      }
    }
  })
)(PArticles);
