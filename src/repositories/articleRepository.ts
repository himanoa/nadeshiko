import Dexie from "dexie";

import { NadeshikoDatabase } from "../db";
import Article from "../models/article";

export class ArticleRepository {
  private _db: Dexie.Table<Article, number>;
  private tableName: string = "articles";
  get db(): Dexie.Table<Article, number> {
    return this._db;
  }
  constructor() {
    this._db = NadeshikoDatabase.instance.articles;
  }

  async importFeed(feedId: number, articles: Article[]): Promise<boolean> {
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
  }
  whereByRssFeedIdCount(id: number): Promise<number> {
    return this.db
      .where("rssFeedId")
      .equals(id)
      .count();
  }
  async asyncWhereByRssFeedId(
    id: number
  ): Promise<Dexie.Collection<Article, number>> {
    return await this.db.where("rssFeedId").equals(id);
  }
  whereByRssFeedId(id: number): Dexie.Collection<Article, number> {
    return this.db.where("rssFeedId").equals(id);
  }
}
export default ArticleRepository;
