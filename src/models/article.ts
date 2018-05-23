import { RssArticle } from "../types/rssArticle";
import { AtomArticle } from "../types/atomArticle";
import { RssFeed } from "./rssFeed";
import { YQLResult } from "../types/yql";

export const fromAtomArticle = (feedId: number, atom: AtomArticle): Article => {
  if (feedId == null) {
    throw new Error("Feed id is empty");
  }
  return {
    rssFeedId: feedId,
    title: atom.title || "No Title",
    description:
      atom.content.summary || atom.content.content || "No Description",
    pubdate: atom.published[0] || "",
    pubdateSortAxis: +Date.parse(atom.published[0] || ""),
    linkUrl: atom.link.href,
    isAlreadyRead: false
  };
};

export const fromRssArticle = (feedId: number, rss: RssArticle): Article => {
  if (feedId == null) {
    throw new Error("Feed id is empty");
  }
  return {
    rssFeedId: feedId,
    title: rss.title || "No Title",
    description: rss.description || "No Description",
    pubdate: rss.pubDate || "",
    pubdateSortAxis: +Date.parse(rss.pubDate || ""),
    linkUrl: rss.link,
    isAlreadyRead: false
  };
};

export const generateArticles = (rowFeed: YQLResult, id: number): Article[] => {
  if (rowFeed.item) {
    return rowFeed.item.map(rssArticle => fromRssArticle(id, rssArticle));
  } else if (rowFeed.entry) {
    return rowFeed.entry.map(atomArticle => fromAtomArticle(id, atomArticle));
  } else {
    throw new Error("item and entry is undefined");
  }
};

export interface Article {
  id?: number;
  rssFeedId: number;
  title: string;
  description: string;
  pubdate: string;
  pubdateSortAxis: number;
  linkUrl: string;
  isAlreadyRead: boolean;
}

export const scheme = {
  articles:
    "++id, rssFeedId, title, description,  pubdate, pubdateSortAxis, isAlreadyRead, &linkUrl"
};
