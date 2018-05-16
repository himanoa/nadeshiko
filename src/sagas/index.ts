import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ADD_FEED } from "../reducers/feed";
import { createRssFetcherSaga } from "./workerManager";

export const sagas = function*() {
  console.log("start");
  yield takeEvery(ADD_FEED, createRssFetcherSaga);
};
