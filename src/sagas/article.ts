import { call, put } from "redux-saga/effects";

import { ArticleRepository } from "../repositories/articleRepository";
import { Action, ErrorAction } from "../reducers";

import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAITAL,
  FetchArticlesPayload,
  FetchArticlesSuccessPayload
} from "../reducers/article";

const articleRepository = new ArticleRepository();

export const fetchArticlesSaga = function*(
  action: Action<FetchArticlesPayload>
) {
  try {
    const articles = yield call(
      articleRepository.asyncWhereByRssFeedId,
      action.payload.feedId
    );
    yield put<Action<FetchArticlesSuccessPayload>>({
      type: FETCH_ARTICLES_SUCCESS,
      payload: {
        feedId: action.payload.feedId,
        articles
      }
    });
  } catch (e) {
    yield put<ErrorAction>({
      type: FETCH_ARTICLES_FAITAL,
      payload: e,
      error: true
    });
  }
};
