import { call, put } from "redux-saga/effects";
import { RssFeedRepository } from "../repositories/rssFeedRepository";

import { Action, ErrorAction } from "../reducers";
import {
  INITIALIZE_WORKER,
  InitializeWorkerPayload,
  STOP_WORKER,
  StopWorkerPayload
} from "../reducers/worker";
import { UpdateParams as FeedUpdateParams } from "../models/rssFeed";

import {
  POST_FEED_SUCCESS,
  POST_FEED_FAITAL,
  UPDATE_FEED_FAILED,
  PostFeedPayload,
  PostFeedSuccessPayload
} from "../reducers/feed";

const rssFeedRepository = new RssFeedRepository();

export const initialFeedSaga = function*(action) {
  try {
    const feeds = yield call(rssFeedRepository.toArray);
    yield put<Action<PostFeedSuccessPayload>>({
      type: POST_FEED_SUCCESS,
      payload: {
        feeds
      }
    });
    for (const feed of feeds) {
      yield put<Action<InitializeWorkerPayload>>({
        type: INITIALIZE_WORKER,
        payload: {
          id: feed.id,
          url: feed.url,
          updateInterval: feed.updateInterval
        }
      });
    }
  } catch (e) {
    yield put<ErrorAction>({
      type: POST_FEED_FAITAL,
      payload: e,
      error: true
    });
  }
};

export const updateFeedSaga = function*(action: Action<FeedUpdateParams>) {
  try {
    const feed = yield call(rssFeedRepository.resolve, action.payload.id);
    yield put<Action<StopWorkerPayload>>({
      type: STOP_WORKER,
      payload: {
        id: feed.id
      }
    });
    yield put<Action<InitializeWorkerPayload>>({
      type: INITIALIZE_WORKER,
      payload: {
        id: feed.id,
        url: action.payload.url,
        updateInterval: action.payload.updateInterval
      }
    });
    const feeds = yield call(rssFeedRepository.toArray);
    yield put<Action<PostFeedSuccessPayload>>({
      type: POST_FEED_SUCCESS,
      payload: {
        feeds
      }
    });
  } catch (e) {
    yield put<ErrorAction>({
      type: UPDATE_FEED_FAILED,
      payload: e,
      error: true
    });
  }
};

export const postFeedSaga = function*(action: Action<PostFeedPayload>) {
  try {
    console.dir("poe");
    const id = yield call(rssFeedRepository.add, action.payload);
    yield put<Action<InitializeWorkerPayload>>({
      type: INITIALIZE_WORKER,
      payload: {
        id,
        url: action.payload.url,
        updateInterval: action.payload.updateInterval
      }
    });
    const feeds = yield call(rssFeedRepository.toArray);
    yield put<Action<PostFeedSuccessPayload>>({
      type: POST_FEED_SUCCESS,
      payload: {
        feeds
      }
    });
  } catch (e) {
    yield put<ErrorAction>({
      type: POST_FEED_FAITAL,
      payload: e,
      error: true
    });
  }
};
