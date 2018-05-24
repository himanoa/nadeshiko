import Dexie from "dexie";
import { NadeshikoDatabase } from "../db";
import Tag from "../models/tag";

export class TagRepository {
  private _db: Dexie.Table<Tag, number>;
  get db(): Dexie.Table<Tag, number> {
    return this.db;
  }
  constructor(db = NadeshikoDatabase.instance) {
    this._db = db.tags;
  }
}
export default TagRepository;
