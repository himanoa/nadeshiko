export interface Bookmark {
  id?: number;
  articleId: number;
  createdAt: number;
}

export default {
  rssFeeds: "id++, articleId, createdAt"
};
