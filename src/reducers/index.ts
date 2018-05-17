import { combineReducers } from "redux";
import { reducer as feed, State as FeedState } from "./feed";

export type RootState = {
  feed: FeedState;
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

export default combineReducers({ feed });
