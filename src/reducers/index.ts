import { combineReducers } from "redux";
import { reducer as feed, State as FeedState } from "./feed";

export type RootState = {
  feed: FeedState;
};
export default combineReducers({ feed });
