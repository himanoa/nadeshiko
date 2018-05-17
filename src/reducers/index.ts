import { combineReducers } from "redux";
import { reducer as feed, State as FeedState } from "./feed";
import { reducer as article, State as ArticleState } from "./article";

export type RootState = {
  feed: FeedState;
  article: ArticleState;
};

export type Action<Payload> = {
  type: string;
  payload: Payload;
};

export type ErrorAction = {
  type: string;
  payload: Error;
  error: true;
};

export default combineReducers({ feed, article });
