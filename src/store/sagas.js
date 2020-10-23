import { all } from "redux-saga/effects";
import chatSaga from "../containers/ChatContainer/sagas";

export function* rootSaga() {
  yield all([chatSaga()]);
}
