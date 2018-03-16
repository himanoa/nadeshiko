import axios from "axios";
import { YQLRssResponse } from "../types/yql";
let timer;
const url: string =
  "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20%3D%20'https%3A%2F%2Fblog.himanoa.net%2Frss'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
onmessage = function(e) {
  if (e.data.payload != undefined) {
    console.dir("poe");
    timer = setInterval(async function() {
      const page: YQLRssResponse = await axios.get(url);
      console.dir(page);
    }, 1000);
  }
};
