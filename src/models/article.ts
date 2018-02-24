export interface Article {
  id?: number;
  rssFeedId: number;
  title: string;
  description: string;
  author: string;
  guid: string;
  pubdate: string;
  link_url: string;
}

export const scheme = {
  articles:
    "id++, rssFeedId, title, description, author, guid, pubdate, link_url"
};
