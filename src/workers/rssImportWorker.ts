import axios from "axios";
import { YQLRssResponse } from "../types/yql";
import { fromRssArticle } from "../models/article";
import { ArticleRepository } from "../repositories/articleRepository";
import { RssFeedRepository } from "../repositories/rssFeedRepository";

let timer;

const articleRepository = new ArticleRepository();
const rssFeedRepository = new RssFeedRepository();

const q = url => `select * from rss where url in ('${url}')`;
onmessage = function(e) {
  console.dir(e);
  if (e.data.payload && e.data.payload.type === "start") {
    setInterval(async function() {
      const response = await axios.get(
        `https://query.yahooapis.com/v1/public/yql?q=${q(
          e.data.payload.urlHost
        )}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
      );
      console.dir(response);
      const feed: YQLRssResponse = response.data.query;
      const articles = feed.results.item.map(article =>
        fromRssArticle(e.data.payload.id, article)
      );
      articleRepository.importFeed(e.data.payload.id, articles);
    }, e.data.payload.interval);
  }
};
