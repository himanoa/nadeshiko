import * as React from "react";

import { Article } from "./article";
import { Article as ArticleModel } from "../models/article";

export const Articles = props => (
  <ul>
    {props.currentArticles.map(article => {
      return (
        <li key={article.id}>
          <Article {...article} />
        </li>
      );
    })}
  </ul>
);
