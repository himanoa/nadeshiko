import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  Action as createRssFetcherAction,
  CREATE_RSS_FETCHER_ACTION
} from "../reducers/worker";
import { ADD_FEED, AddFeedPayload } from "../reducers/feed";

let workers = {};

export const createRssFetcher = async (
  payload: AddFeedPayload
): Promise<void> => {
  const worker = new Worker("rssWorker.bundle.js");
  worker.postMessage({
    payload: {
      type: "start",
      urlHost: payload.feedUrl,
      interval: payload.updateInterval
    }
  });
  workers[payload.title] = worker;
};
export const createRssFetcherSaga = function*(action) {
  try {
    const feed = yield call(createRssFetcher, action.payload);
  } catch (e) {
    yield put<createRssFetcherAction>({
      type: CREATE_RSS_FETCHER_ACTION,
      payload: e,
      error: true
    });
  }
}.bind(this);

function* mySaga() {
  yield takeEvery(ADD_FEED, createRssFetcherSaga);
}

export default mySaga;
