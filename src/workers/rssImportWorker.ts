import axios from "axios";
import { YQLRssResponse } from "../types/yql";
let timer;
const q = "select * from rss where url in ('https://blog.himanoa.net/rss')";
onmessage = function(e) {
  if (e.data.payload != undefined) {
    console.dir("poe");
    timer = setTimeout(async function() {
      const page: YQLRssResponse = (await axios.get(
        "https://query.yahooapis.com/v1/public/yql",
        {
          params: {
            q,
            format: "json"
          }
        }
      )).data.query;
      console.dir(page);
    }, 1000);
  }
};
