import { RssArticle } from "../types/rssArticle";
import { RssFeed } from "./rssFeed";

export interface Article {
  id?: number;
  rssFeedId: number;
  title: string;
  description: string;
  pubdate?: string;
  linkUrl?: string;
  isAlreadyRead: boolean;
}

export const scheme = {
  articles:
    "++id, rssFeedId, title, description,  pubdate, linkUrl, isAlreadyRead"
};

export const fromRssArticle = (feed: RssFeed, article: RssArticle): Article => {
  if (feed.id == null) {
    throw new Error("parse error");
  }
  return {
    rssFeedId: feed.id,
    title: article.title.getOrElse("No Title"),
    description: article.description.getOrElse("No Description"),
    pubdate: article.pubDate.fold(undefined, (s: string) => s),
    linkUrl: article.link.fold(undefined, (s: string) => s),
    isAlreadyRead: false
  };
};

export default Article;
