import Dexie from "dexie";
import { NadeshikoDatabase } from "../db";
import RssFeed from "../models/rssFeed";

export class RssFeedRepository {
  public asyncAdd: (rssFeed: RssFeed) => Promise<number>;
  public toAsyncArray: () => Promise<RssFeed[]>;

  private _table: Dexie.Table<RssFeed, number>;
  get table(): Dexie.Table<RssFeed, number> {
    return this._table;
  }
  constructor(db = NadeshikoDatabase.instance) {
    this._table = db.rssFeeds;
    this.asyncAdd = async (rssFeed: RssFeed) => {
      return this.table.add(rssFeed);
    };
    this.toAsyncArray = async () => this.table.toArray();
  }
}
export default RssFeedRepository;
