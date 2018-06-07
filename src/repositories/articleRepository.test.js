require("./testHelper");
const { ArticleRepository } = require("./articleRepository");

describe("ArticleRepository", () => {
  describe("#importFeed", () => {
    it("is equal true", async () => {
      const ar = new ArticleRepository();
      await ar.db.put({
        rssFeedId: 3,
        title: "sad",
        description: "akdsjnajsdf",
        author: "akdsfjsadf",
        guid: "jdafajskdf",
        pubdate: "jfasjdhfsaoidf",
        linkUrl: "asasdlaskd",
        isAlreadyRead: true
      });
      await expect(new ArticleRepository().importFeed(3, [])).resolves.toEqual(
        true
      );
    });
  });
  describe("#whereByRssFeedIdCount", () => {
    it("is equal 0", async () => {
      await expect(
        new ArticleRepository().whereByRssFeedIdCount(1)
      ).resolves.toEqual(0);
    });
    it("is result == 1", async () => {
      const ar = new ArticleRepository();
      await ar.db.put({
        rssFeedId: 1,
        title: "title",
        description: "de",
        author: "a",
        guid: "as",
        pubdate: "asd",
        linkUrl: "asd",
        isAlreadyRead: true
      });
      expect(await new ArticleRepository().whereByRssFeedIdCount(1)).toEqual(1);
    });
  });

  describe("#asyncWhereByRssFeedId", () => {
    it("is equal []", async () => {
      await expect(
        new ArticleRepository().asyncWhereByRssFeedId(0)
      ).resolves.toEqual([]);
    });
    it("is result.length  == 1", async () => {
      const ar = new ArticleRepository();
      await ar.db.put({
        rssFeedId: 0,
        title: "dsafsajdfsadf",
        description: "de",
        author: "a",
        guid: "as",
        pubdate: "adsajdsfjf",
        linkUrl: "asdasd",
        isAlreadyRead: true
      });
      expect(
        (await new ArticleRepository().asyncWhereByRssFeedId(0)).length
      ).toEqual(1);
    });
  });
});
