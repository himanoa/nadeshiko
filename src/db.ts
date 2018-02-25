import { RssFeed, scheme as rssFeedScheme } from "./models/rssFeed";
import { Article, scheme as articleScheme } from "./models/article";
import { Bookmark, scheme as bookmarkScheme } from "./models/bookmark";
import { Tag, scheme as tagScheme } from "./models/tag";
import Dexie from "dexie";

export class NadeshikoDatabase extends Dexie {
  public rssFeeds: Dexie.Table<RssFeed, number>;
  public articles: Dexie.Table<Article, number>;
  public bookmarks: Dexie.Table<Bookmark, number>;
  public tags: Dexie.Table<Tag, number>;
  private static _instance: NadeshikoDatabase;

  public static get instance(): NadeshikoDatabase {
    if (!this._instance) {
      this._instance = new NadeshikoDatabase();
    }
    return this._instance;
  }
  private constructor() {
    super("NadeshikoDatabase");
    this.version(1).stores({
      ...articleScheme,
      ...articleScheme,
      ...bookmarkScheme,
      ...tagScheme
    });
  }
}

export default NadeshikoDatabase.instance;
