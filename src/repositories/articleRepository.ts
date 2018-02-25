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

  whereByRssFeedId(id: number): Dexie.Collection<Article, number> {
    return this.db.where("rssFeedId").equals(id);
  }
}
export default ArticleRepository;
