import { RssFeed, scheme as rssFeedScheme } from "./models/rssFeed";
import { Article, scheme as articleScheme } from "./models/article";
import { Bookmark, scheme as bookmarkScheme } from "./models/bookmark";
import { Tag, scheme as tagScheme } from "./models/tag";
import Dexie from "dexie";

let instance;
export class NadeshikoDatabase extends Dexie {
  public rssFeeds: Dexie.Table<RssFeed, number>;
  public articles: Dexie.Table<Article, number>;
  public bookmarks: Dexie.Table<Bookmark, number>;
  public tags: Dexie.Table<Tag, number>;

  public static get instance(): NadeshikoDatabase {
    if (instance) {
      instance = new NadeshikoDatabase();
    }
    return instance;
  }
  private constructor() {
    super("NadeshikoDatabase");
    this.version(1).stores({
      ...rssFeedScheme,
      ...articleScheme,
      ...bookmarkScheme,
      ...tagScheme
    });
  }
}

export default NadeshikoDatabase.instance;
