import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { RssFeedRepository } from "../repositories/rssFeedRepository";

const rssFeedRepository = new RssFeedRepository();

import { RssFeed } from "../models/rssFeed";
import { Action, ErrorAction } from "../reducers";
import {
  POST_FEED,
  POST_FEED_SUCCESS,
  POST_FEED_FAITAL
} from "../reducers/feed";

export const postFeedSaga = function*(action) {
  try {
  } catch (e) {
    yield put<ErrorAction>({
      type: POST_FEED_FAITAL,
      payload: e,
      error: true
    });
  }
};
