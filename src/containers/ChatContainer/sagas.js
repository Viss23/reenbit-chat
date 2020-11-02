import { all, put, call, takeEvery, delay } from "redux-saga/effects";
import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  GET_RANDOM_ANSWER_SUCCESS,
} from "./actionTypes";
import axios from "axios";
import getRandomIntInclusive from "../../helpers/getRandomIntInclusive";

function* getRandomAnswer({ payload }) {
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
  yield all([watchGetRandomAnswer()]);
}
