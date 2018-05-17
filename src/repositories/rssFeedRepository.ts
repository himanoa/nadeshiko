import Dexie from "dexie";
import { NadeshikoDatabase } from "../db";
import RssFeed from "../models/rssFeed";

export class RssFeedRepository {
  private _table: Dexie.Table<RssFeed, number>;
  private tableName: string = "rssFeeds";
  public asyncAdd: (rssFeed: RssFeed) => Promise<number>;
  public toAsyncArray: () => Promise<RssFeed[]>;
  get table(): Dexie.Table<RssFeed, number> {
    return this._table;
  }
  constructor(db = NadeshikoDatabase.instance) {
    this._table = db.rssFeeds;
    console.dir(this);
    this.asyncAdd = async (rssFeed: RssFeed) => {
      return await this.table.add(rssFeed);
    };
    this.toAsyncArray = async () => await this.table.toArray();
  }
}
export default RssFeedRepository;
