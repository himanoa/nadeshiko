export interface Bookmark {
  id?: number;
  articleId: number;
  createdAt: number;
}

export const scheme = {
  rssFeeds: "id++, articleId, createdAt"
};
