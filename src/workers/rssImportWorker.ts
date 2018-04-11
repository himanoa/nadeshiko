import axios from "axios";
import { YQLRssResponse } from "../types/yql";
import { fromRssArticle } from "../models/article";
let timer;
const q = "select * from rss where url in ('https://blog.himanoa.net/rss')";
onmessage = function(e) {
  if (e.data.payload != undefined) {
    setTimeout(async function() {
      console.dir(e.data.payload.urlHost);
    }, 1000);
  }
};
