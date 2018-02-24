export interface Bookmark {
  id?: number;
  articleId: number;
  createdAt: number;
}

export default {
  bookmarks: "id++, articleId, createdAt"
};
