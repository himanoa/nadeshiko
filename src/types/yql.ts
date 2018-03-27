import { RssArticle } from "./rssArticle";

export type YQLRssResponse = {
  count: number;
  created: string;
  lang: string;
  results: {
    item: RssArticle;
  };
};
