import * as React from "react";

import { Article } from "./article";
import { Article as ArticleModel } from "../models/article";

export const Articles = props => (
  <div style={{ marginRight: "2rem" }}>
    <ul
      style={{
        height: "100vh"
      }}
    >
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
  </div>
);
