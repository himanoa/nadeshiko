import { call, put } from "redux-saga/effects";

import { ErrorAction } from "../reducers";
import { RssFeedRepository } from "../repositories/rssFeedRepository";

const feedRepository = new RssFeedRepository();
import { InitializeWorkerPayload, STOP_WORKER } from "../reducers/worker";

let workers = {};

export const initializeWorker = async (
  payload: InitializeWorkerPayload
): Promise<void> => {
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
  const feeds = yield call(feedRepository.toAsyncArray);
  feeds.forEach(feed => {
    initializeWorker(feed);
  });
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
