import axios from "axios";
import { YQLRssResponse } from "../types/yql";

const url: string =
  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20'https%3A%2F%2Fblog.himanoa.net%2Frss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
export interface RssFeed {
  id?: number;
  name: string;
  url: string;
  updateInterval: number;
  updatedAt?: number;
}

export const importFeed = async () => axios.get(url);
export const scheme = {
  rssFeeds: "++id, name, url, updateInterval, updatedAt"
};
export const fromYQLRssResponseToRssFeed = (rss: YQLRssResponse) => {};
export default RssFeed;
