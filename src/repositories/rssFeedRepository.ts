import Dexie from "dexie";
import { NadeshikoDatabase } from "../db";
import RssFeed from "../models/rssFeed";

export class RssFeedRepository {
  private _db: Dexie.Table<RssFeed, number>;
  private tableName: string = "rssFeeds";
  get db(): Dexie.Table<RssFeed, number> {
    return this._db;
  }
  constructor(db = NadeshikoDatabase.instance) {
    this._db = db.rssFeeds;
  }
}
export default RssFeedRepository;
