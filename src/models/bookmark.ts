import * as db from "../db";

export namespace Bookmark {
  export interface IBookmark {
    id?: number;
    articleId: number;
    createdAt: number;
  }

  export const scheme = {
    bookmarks: "++id, articleId, createdAt"
  };
}

export default Bookmark;
