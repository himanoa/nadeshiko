import RssFeed from "./models/rssFeed";
import Article from "./models/article";
import Bookmark from "./models/bookmark";
import Tag from "./models/tag";
import Dexie from "dexie";

class NadeshikoDatabase extends Dexie {
  rssFeeds: Dexie.Table<RssFeed.IRssFeed, number>;
  articles: Dexie.Table<Article.IArticle, number>;
  bookmarks: Dexie.Table<Bookmark.IBookmark, number>;
  tags: Dexie.Table<Tag.ITag, number>;

  constructor() {
    super("NadeshikoDatabase");
    this.version(1).stores({
      ...RssFeed.scheme,
      ...Article.scheme,
      ...Bookmark.scheme,
      ...Tag.scheme
    });
  }
}

export default new NadeshikoDatabase();
