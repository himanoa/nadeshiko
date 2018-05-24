import Dexie from "dexie";

import { NadeshikoDatabase } from "../db";
import { Article } from "../models/article";

export class ArticleRepository {
  private _db: Dexie.Table<Article, number>;
  private tableName: string = "articles";
  public importFeed: (feedId: number, articles: Article[]) => Promise<boolean>;
  public whereByRssFeedIdCount: (feedId: number) => Promise<number>;
  public asyncWhereByRssFeedId: (feedId: number) => Promise<Article[]>;
  get db(): Dexie.Table<Article, number> {
    return this._db;
  }
  constructor() {
    this._db = NadeshikoDatabase.instance.articles;
    this.importFeed = async (
      feedId: number,
      articles: Article[]
    ): Promise<boolean> => {
      return NadeshikoDatabase.instance.transaction("rw", this.db, async () => {
        const beforePutCount = await this.whereByRssFeedIdCount(feedId);
        await this.db.bulkPut(articles).catch(e => {
          if (e.name !== "BulkError") {
            Promise.reject(e);
          }
        });
        const afterPutCount = await this.whereByRssFeedIdCount(feedId);
        if (afterPutCount === beforePutCount) return true;
        return false;
      });
    };
    this.whereByRssFeedIdCount = (id: number): Promise<number> => {
      return this.db
        .where("rssFeedId")
        .equals(id)
        .count();
    };
    this.asyncWhereByRssFeedId = async (id: number): Promise<Article[]> => {
      return this.db
        .where("rssFeedId")
        .equals(id)
        .reverse()
        .sortBy("pubdateSortAxis");
    };
  }
}
export default ArticleRepository;
