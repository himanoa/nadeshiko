import { RssArticle } from "../types/rssArticle";
import { RssFeed } from "./rssFeed";

export interface Article {
  id?: number;
  rssFeedId: number;
  title: string;
  description: string;
  pubdate?: string;
  linkUrl: string;
  isAlreadyRead: boolean;
}

export const scheme = {
  articles:
    "++id, rssFeedId, title, description,  pubdate, isAlreadyRead, &linkUrl"
};

export const fromRssArticle = (
  feedId: number,
  article: RssArticle
): Article => {
  if (feedId == null) {
    throw new Error("parse error");
  }
  return {
    rssFeedId: feedId,
    title: article.title || "No Title",
    description: article.description || "No Description",
    pubdate: article.pubDate || undefined,
    linkUrl: article.link,
    isAlreadyRead: false
  };
};

export default Article;
