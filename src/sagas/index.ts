import { takeEvery } from "redux-saga/effects";
import { POST_FEED } from "../reducers/feed";
import { INITIALIZE_WORKER, STOP_WORKER } from "../reducers/worker";
import { initializeWorkerSaga, stopWorkerSaga } from "./workerManager";
import { postFeedSaga } from "./rssFeed";

export const sagas = function*() {
  console.log("start");
  yield takeEvery(INITIALIZE_WORKER, initializeWorkerSaga);
  yield takeEvery(STOP_WORKER, stopWorkerSaga);
  yield takeEvery(POST_FEED, postFeedSaga);
};
