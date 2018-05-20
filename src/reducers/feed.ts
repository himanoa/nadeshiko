import { Action, ErrorAction } from "./index";
import { RssFeed } from "../models/rssFeed";

export const POST_FEED = "feed/post";
export const POST_FEED_SUCCESS = "feed/postSuccess";
export const POST_FEED_FAITAL = "feed/postFaital";
export const INITIAL_FEED = "feed/initial";

export type FeedPayloadUnion = PostFeedPayload | PostFeedSuccessPayload;

export type PostFeedSuccessPayload = {
  feeds: RssFeed[];
};

export interface PostFeedPayload {
  name: string;
  url: string;
  updateInterval: number;
}

export const actionCreators = {
  postFeed: (
    name: string,
    url: string,
    updateInterval: number
  ): Action<PostFeedPayload> => {
    return {
      type: POST_FEED,
      payload: {
        name,
        url,
        updateInterval
      }
    };
  },
  postFeedSuccess: (feeds: RssFeed[]): Action<PostFeedSuccessPayload> => {
    return {
      type: POST_FEED_SUCCESS,
      payload: {
        feeds
      }
    };
  },
  initialFeed: () => ({ type: INITIAL_FEED, payload: {} })
};

export type State = {
  feeds: RssFeed[];
};

export const initialState: State = { feeds: [] };

export const reducer = (
  state: State = initialState,
  action: Action<PostFeedSuccessPayload>
): State => {
  switch (action.type) {
    case POST_FEED_SUCCESS: {
      return {
        feeds: action.payload.feeds
      };
    }
    default: {
      return state;
    }
  }
};

export default actionCreators;
