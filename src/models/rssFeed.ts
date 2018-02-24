export interface RSSFeed {
  id?: number;
  name: string;
  url: string;
  updateInterval: number;
}

export default {
  rssFeeds: "++id, name, url, updateInterval"
};
