import { withArticlesState } from "../hocs/withArticlesState";
import { Articles as PArticles } from "../components/articles";
import { compose, lifecycle } from "recompose";
import { RouteComponentProps } from "react-router";

type RouteParams = {
  id: string;
};

export const Articles = compose(withArticlesState)(PArticles);
