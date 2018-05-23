import axios from "axios";
import { YQLRssResponse } from "../types/yql";
import { generateArticles } from "../models/article";
import { ArticleRepository } from "../repositories/articleRepository";
import { RssFeedRepository } from "../repositories/rssFeedRepository";

let timer;

const articleRepository = new ArticleRepository();
const rssFeedRepository = new RssFeedRepository();

const q = url => `select * from feed where url in ('${url}')`;
const fetchRSS = async function(e) {
  const response = await axios.get(
    `https://query.yahooapis.com/v1/public/yql?q=${q(
      e.data.payload.urlHost
    )}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
  );
  const feed: YQLRssResponse = response.data.query;
  articleRepository.importFeed(
    e.data.payload.id,
    generateArticles(feed.results, e.data.payload.id)
  );
};
onmessage = function(e) {
  if (e.data.payload && e.data.payload.type === "start") {
    fetchRSS(e);
    setInterval(fetchRSS.bind(this, e), e.data.payload.interval);
  }
};
