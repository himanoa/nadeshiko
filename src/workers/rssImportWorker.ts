import axios from "axios";
import { YQLRssResponse } from "../types/yql";
let timer;
onmessage = function(e) {
  if (e.data.payload != undefined) {
    console.dir("poe");
    timer = setInterval(async function() {
      const page: YQLRssResponse = await axios.get(url);
      console.dir(page);
    }, 1000);
  }
};
