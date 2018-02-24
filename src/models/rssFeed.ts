export interface RSSFeed {
  id?: number;
  name: string;
  url: string;
  updateInterval: number;
}

export const scheme = {
  rssFeeds: "id++, name, url, updateInterval"
};
