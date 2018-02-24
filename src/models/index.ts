import * as article from "./article";
import * as rssFeed from "./rssFeed";
import * as bookmark from "./bookmark";
import * as tag from "./tag";

export default { ...article, ...rssFeed, ...bookmark, ...tag };
