import Dexie from "dexie";
import { NadeshikoDatabase } from "../db";
import Bookmark from "../models/bookmark";

export class BookmarkRepository {
  private _db: Dexie.Table<Bookmark, number>;
  get db(): Dexie.Table<Bookmark, number> {
    return this.db;
  }
  constructor(db = NadeshikoDatabase.instance) {
    this._db = db.bookmarks;
  }
}
export default BookmarkRepository;
