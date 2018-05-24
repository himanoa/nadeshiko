import * as React from "react";

import { Article } from "./article";
import { Article as ArticleModel } from "../models/article";

const unorderedList = { height: "100vh" };
const getArticle = (article): JSX.Element => {
  return (
    <li key={article.id} style={{ paddingBottom: "15px", paddingTop: "15px" }}>
      <Article {...article} />
    </li>
  );
};
export const Articles = props => (
  <div style={{ marginRight: "2rem" }}>
    <ul style={unorderedList}>{props.currentArticles.map(getArticle)}</ul>
  </div>
);
