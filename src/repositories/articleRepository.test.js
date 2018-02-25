require("./testHelper");
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
