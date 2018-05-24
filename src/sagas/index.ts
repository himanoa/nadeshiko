import { takeEvery, all } from "redux-saga/effects";
import { POST_FEED, INITIAL_FEED } from "../reducers/feed";
import { FETCH_ARTICLES } from "../reducers/article";
import { STOP_WORKER } from "../reducers/worker";
import { stopWorkerSaga } from "./workerManager";
import { postFeedSaga, initialFeedSaga } from "./rssFeed";
import { fetchArticlesSaga } from "./article";

export const sagas = function*() {
  yield all([
    takeEvery(STOP_WORKER, stopWorkerSaga),
    takeEvery(POST_FEED, postFeedSaga),
    takeEvery(FETCH_ARTICLES, fetchArticlesSaga),
    takeEvery(INITIAL_FEED, initialFeedSaga)
  ]);
};
