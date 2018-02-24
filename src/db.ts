import { RssFeed, scheme as rssFeedScheme } from "./models/rssFeed";
import { Article, scheme as articleScheme } from "./models/article";
import { Bookmark, scheme as bookmarkScheme } from "./models/bookmark";
import { Tag, scheme as tagScheme } from "./models/tag";
import Dexie from "dexie";

class NadeshikoDatabase extends Dexie {
  rssFeeds: Dexie.Table<RssFeed, number>;
  articles: Dexie.Table<Article, number>;
  bookmarks: Dexie.Table<Bookmark, number>;
  tags: Dexie.Table<Tag, number>;

  constructor() {
    super("NadeshikoDatabase");
    this.version(1).stores({
      ...articleScheme,
      ...articleScheme,
      ...bookmarkScheme,
      ...tagScheme
    });
  }
}

export default new NadeshikoDatabase();
