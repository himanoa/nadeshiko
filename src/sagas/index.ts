import { takeEvery, takeLatest, all } from "redux-saga/effects";
import { POST_FEED } from "../reducers/feed";
import { INITIALIZE_WORKER, STOP_WORKER } from "../reducers/worker";
import { initializeWorkerSaga, stopWorkerSaga } from "./workerManager";
import { postFeedSaga } from "./rssFeed";

export const sagas = function*() {
  console.log("start");
  yield all([
    takeEvery(INITIALIZE_WORKER, initializeWorkerSaga),
    takeEvery(STOP_WORKER, stopWorkerSaga),
    takeEvery(POST_FEED, postFeedSaga)
  ]);
};
