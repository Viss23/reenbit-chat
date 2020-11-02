import { all, put, call, takeEvery, delay } from "redux-saga/effects";
import {
  GET_RANDOM_JOKE,
  GET_RANDOM_JOKE_SUCCESS,
  GET_RANDOM_JOKE_ERROR,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  GET_RANDOM_ANSWER_SUCCESS,
} from "./actionTypes";
import axios from "axios";
import getRandomIntInclusive from "../../helpers/getRandomIntInclusive";

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

function* getRandomAnswer({ payload }) {
  console.log(payload);
  yield put({
    type: SEND_MESSAGE_SUCCESS,
    payload,
  });
  const response = yield call(
    axios.get,
    "https://api.chucknorris.io/jokes/random"
  );
  const answer = response.data.value;
  yield delay(1000 * getRandomIntInclusive(10, 15));
  yield put({
    type: GET_RANDOM_ANSWER_SUCCESS,
    payload: { userId: payload.userId, message: answer },
  });
}

function* watchGetRandomAnswer() {
  yield takeEvery(SEND_MESSAGE, getRandomAnswer);
}

export default function* chatSaga() {
  yield all([watchGetRandomJokeSaga(), watchGetRandomAnswer()]);
}
