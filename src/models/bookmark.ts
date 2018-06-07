export interface Bookmark {
  id?: number;
  articleId: number;
  createdAt: number;
}

export const scheme = {
  bookmarks: "++id, articleId, createdAt"
};

export default Bookmark;
