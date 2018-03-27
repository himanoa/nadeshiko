import { option } from "fp-ts";

export type RssArticle = {
  title: option.Option<string>;
  link: option.Option<string>;
  pubDate: option.Option<string>;
  description: option.Option<string>;
  date: option.Option<string>;
};
