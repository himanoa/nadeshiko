import { takeEvery, takeLatest, all } from "redux-saga/effects";
import { POST_FEED } from "../reducers/feed";
import { FETCH_ARTICLES } from "../reducers/article";
import { INITIALIZE_WORKER, STOP_WORKER } from "../reducers/worker";
import { initializeWorkerSaga, stopWorkerSaga } from "./workerManager";
import { postFeedSaga } from "./rssFeed";
import { fetchArticlesSaga } from "./article";

export const sagas = function*() {
  yield all([
    takeEvery(INITIALIZE_WORKER, initializeWorkerSaga),
    takeEvery(STOP_WORKER, stopWorkerSaga),
    takeEvery(POST_FEED, postFeedSaga),
    takeEvery(FETCH_ARTICLES, fetchArticlesSaga)
  ]);
};
