import * as React from "react";

import { Article } from "./article";
import { Article as ArticleModel } from "../models/article";

export const Articles = props => (
  <ul>
    {props.currentArticles.map(article => {
      return (
        <li
          key={article.id}
          style={{ paddingBottom: "15px", paddingTop: "15px" }}
        >
          <Article {...article} />
        </li>
      );
    })}
  </ul>
);
