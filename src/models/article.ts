import { RssArticle } from "../types/rssArticle";
import { AtomArticle } from "../types/atomArticle";
import { YQLResult } from "../types/yql";

const getDate = (date?: string | [string, string]): string => {
  if (typeof date === "string") return date;
  if (date instanceof Array) return date[0];
  return "";
};

export const fromAtomArticle = (feedId: number, atom: AtomArticle): Article => {
  return {
    rssFeedId: feedId,
    title: atom.title.content || "No Title",
    description:
      atom.content.summary || atom.content.content || "No Description",
    pubdate: getDate(atom.published),
    pubdateSortAxis: +Date.parse(getDate(atom.published || atom.updated)),
    linkUrl: atom.link.href,
    isAlreadyRead: false
  };
};

export const fromRssArticle = (feedId: number, rss: RssArticle): Article => {
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
