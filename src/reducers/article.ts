import { Action, ErrorAction } from "./index";
import { RssFeed } from "../models/rssFeed";
import { Article } from "../models/article";

export const FETCH_ARTICLES = "article/fetch";
export const FETCH_ARTICLES_SUCCESS = "article/fetchSuccess";
export const FETCH_ARTICLES_FAITAL = "article/fetchFaital";

export type FetchArticlesPayload = {
  feedId: number;
};
export type FetchArticlesSuccessPayload = {
  feedId: number;
  feeds: RssFeed[];
};

export const actionCreators = {
  fetchArticles: (feedId: number): Action<FetchArticlesPayload> => {
    return {
      type: FETCH_ARTICLES,
      payload: {
        feedId
      }
    };
  },
  fetchArticlesSuccess: (
    feedId: number,
    feeds: RssFeed[]
  ): Action<FetchArticlesSuccessPayload> => {
    return {
      type: FETCH_ARTICLES_SUCCESS,
      payload: {
        feedId,
        feeds
      }
    };
  }
};

export type State = {
  currentArticles: Article[];
};

export const initialState: State = { currentArticles: [] };

export const reducer = (
  state: State = initialState,
  action: Action<any>
): State => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS: {
      return { currentArticles: action.payload.feeds };
    }
    default: {
      return state;
    }
  }
};
