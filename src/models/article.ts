import { rssArticle } from "../types/rssArticle";

export interface Article {
  id?: number;
  rssFeedId: number;
  title: string;
  description: string;
  author: string;
  guid: string;
  pubdate: string;
  linkUrl: string;
  isAlreadyRead: boolean;
}

export const scheme = {
  articles:
    "++id, rssFeedId, title, description, author, guid, pubdate, linkUrl, isAlreadyRead"
};

export default Article;
