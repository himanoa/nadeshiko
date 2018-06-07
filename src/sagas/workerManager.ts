import { call, put } from "redux-saga/effects";

import { ErrorAction } from "../reducers";
import { RssFeedRepository } from "../repositories/rssFeedRepository";

const feedRepository = new RssFeedRepository();
import {
  InitializeWorkerPayload,
  STOP_WORKER,
  INITIALIZE_WORKER
} from "../reducers/worker";

let workers = {};

export const initializeWorker = async (
  payload: InitializeWorkerPayload
): Promise<void> => {
  console.dir("poe");
  const worker = new Worker("/rssWorker.bundle.js");
  worker.postMessage({
    payload: {
      type: "start",
      urlHost: payload.url,
      interval: payload.updateInterval,
      id: payload.id
    }
  });
  workers[payload.id] = worker;
};

export const startUpApplicationSaga = function*(action) {
  try {
    const feeds = yield call(feedRepository.toAsyncArray);
    for (const feed of feeds) {
      initializeWorker(feed).catch(err => {
        throw err;
      });
    }
  } catch (e) {
    yield put<ErrorAction>({
      type: STOP_WORKER,
      payload: e,
      error: true
    });
  }
};
export const stopWorkerSaga = function*(action) {
  try {
    workers[action.id].terminate();
    workers[action.id] = undefined;
  } catch (e) {
    yield put<ErrorAction>({
      type: STOP_WORKER,
      payload: e,
      error: true
    });
  }
};
export const initializeWorkerSaga = function*(action) {
  try {
    yield call(initializeWorker, action.payload);
  } catch (e) {
    yield put<ErrorAction>({
      type: INITIALIZE_WORKER,
      payload: e,
      error: true
    });
  }
}.bind(this);
