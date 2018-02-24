import article from "./article";
import rssFeed from "./rssFeed";
import bookmark from "./bookmark";
import tag from "./tag";

export const scheme = { ...article, ...rssFeed, ...bookmark, ...tag };
