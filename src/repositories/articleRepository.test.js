global.indexedDB = require("fake-indexeddb");
global.IDBCursor = require("fake-indexeddb/lib/FDBCursor");
global.IDBCursorWithValue = require("fake-indexeddb/lib/FDBCursorWithValue");
global.IDBDatabase = require("fake-indexeddb/lib/FDBDatabase");
global.IDBFactory = require("fake-indexeddb/lib/FDBFactory");
global.IDBIndex = require("fake-indexeddb/lib/FDBIndex");
global.IDBKeyRange = require("fake-indexeddb/lib/FDBKeyRange");
global.IDBObjectStore = require("fake-indexeddb/lib/FDBObjectStore");
global.IDBOpenDBRequest = require("fake-indexeddb/lib/FDBOpenDBRequest");
global.IDBRequest = require("fake-indexeddb/lib/FDBRequest");
global.IDBTransaction = require("fake-indexeddb/lib/FDBTransaction");
global.IDBVersionChangeEvent = require("fake-indexeddb/lib/FDBVersionChangeEvent");

const { ArticleRepository } = require("./articleRepository");

describe("ArticleRepository", () => {
  describe("#whereByRssFeedId", () => {
    it("is equal []", async () => {
      await expect(
        new ArticleRepository().whereByRssFeedId(0).toArray()
      ).resolves.toEqual([]);
    });
    it("is result.length  == 1", async () => {
      const ar = new ArticleRepository();
      await ar.db.put({
        rssFeedId: 0,
        title: "title",
        description: "de",
        author: "a",
        guid: "as",
        pubdate: "asd",
        linkUrl: "asd",
        isAlreadyRead: true
      });
      expect(
        (await new ArticleRepository().whereByRssFeedId(0).toArray()).length
      ).toEqual(1);
    });
  });
});
