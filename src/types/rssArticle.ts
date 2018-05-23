import { Article } from "../models/article";

export type RssArticle = {
  title?: string;
  link: string;
  pubDate?: string;
  description?: string;
  date?: string;
};
