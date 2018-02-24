export interface Bookmark {
  id?: number;
  article_id: number;
  created_at: number;
}

export const scheme = {
  rssFeeds: "id++, article_id, created_at"
};
