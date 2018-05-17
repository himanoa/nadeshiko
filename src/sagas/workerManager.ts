import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { Action, ErrorAction } from "../reducers";
import {
  INITIALIZE_WORKER,
  InitializeWorkerPayload,
  STOP_WORKER,
  StopWorkerPayload
} from "../reducers/worker";

let workers = {};

export const initializeWorker = async (
  payload: InitializeWorkerPayload
): Promise<void> => {
  const worker = new Worker("rssWorker.bundle.js");
  worker.postMessage({
    payload: {
      type: "start",
      urlHost: payload.url,
      interval: payload.updateInterval
    }
  });
  workers[payload.id] = worker;
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
    const feed = yield call(initializeWorker, action.payload);
  } catch (e) {
    yield put<ErrorAction>({
      type: INITIALIZE_WORKER,
      payload: e,
      error: true
    });
  }
}.bind(this);
