import { all, put, call, takeEvery } from "redux-saga/effects";
import {
  GET_RANDOM_JOKE,
  GET_RANDOM_JOKE_SUCCESS,
  GET_RANDOM_JOKE_ERROR,
} from "./actionTypes";
import axios from "axios";

function* getRandomJokeSaga({ payload }) {
  console.log("saga joke");
  const response = yield call(
    axios.get,
    "https://api.chucknorris.io/jokes/random"
  );
  const joke = response.data.value;
  yield put({
    type: GET_RANDOM_JOKE_SUCCESS,
    payload: { joke },
  });
}

function* watchGetRandomJokeSaga() {
  yield takeEvery(GET_RANDOM_JOKE, getRandomJokeSaga);
}

export default function* chatSaga() {
  yield all([watchGetRandomJokeSaga()]);
}
