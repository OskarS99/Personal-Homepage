import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./personalHomepageAPI";
import {
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
  fetchRepositories,
} from "./personalHomepageSlice";
const loadingDelay = 2000;

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
