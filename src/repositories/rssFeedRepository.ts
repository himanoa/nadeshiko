import Dexie from "dexie";
import { NadeshikoDatabase } from "../db";
import RssFeed from "../models/rssFeed";

export class RssFeedRepository {
  private _table: Dexie.Table<RssFeed, number>;
  get table(): Dexie.Table<RssFeed, number> {
    return this._table;
  }
  constructor(db = NadeshikoDatabase.instance) {
    this._table = db.rssFeeds;
    this.add = this.add.bind(this);
    this.toArray = this.toArray.bind(this);
    this.resolve = this.resolve.bind(this);
  }
  async add(rssFeed: RssFeed): Promise<number> {
    return this.table.add(rssFeed);
  }
  async toArray(): Promise<RssFeed[]> {
    return this.table.toArray();
  }
  async resolve(id: number): Promise<RssFeed> {
    const result = await this._table.where({ id }).first();
    if (result != null) {
      return result;
    } else {
      throw new Error(`Not found ${id}`);
    }
  }
}
export default RssFeedRepository;
