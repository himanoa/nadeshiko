import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { ArticleRepository } from "../repositories/articleRepository";
import { Article } from "../models/article";
import { Action, ErrorAction } from "../reducers";

import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAITAL,
  FETCH_ARTICLES,
  FetchArticlesPayload,
  FetchArticlesSuccessPayload,
  actionCreators
} from "../reducers/article";

const articleRepository = new ArticleRepository();

export const fetchArticlesSaga = function*(
  action: Action<FetchArticlesPayload>
) {
  try {
    const feeds = yield call(
      articleRepository.asyncWhereByRssFeedId,
      action.payload.feedId
    );
    yield put<Action<FetchArticlesSuccessPayload>>({
      type: FETCH_ARTICLES_SUCCESS,
      payload: {
        feedId: action.payload.feedId,
        feeds
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
