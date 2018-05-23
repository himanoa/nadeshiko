import { RssArticle } from "./rssArticle";
import { AtomArticle } from "./atomArticle";

export type YQLResult =
  | {
      item: RssArticle[];
      entry: undefined;
    }
  | {
      entry: AtomArticle[];
      item: undefined;
    };
export type YQLRssResponse = {
  count: number;
  created: string;
  lang: string;
  results: YQLResult;
};
