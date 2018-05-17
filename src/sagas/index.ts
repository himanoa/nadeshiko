import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { POST_FEED } from "../reducers/feed";
import { InitializeWorker, StopWorker } from "../reducers/worker";
import { initializeWorkerSaga, stopWorkerSaga } from "./workerManager";

export const sagas = function*() {
  console.log("start");
  yield takeEvery(InitializeWorker, initializeWorkerSaga);
  yield takeEvery(StopWorker, stopWorkerSaga);
};
