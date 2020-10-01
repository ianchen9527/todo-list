import { all } from "redux-saga/effects";
import noteList from "./noteList";

function* rootSaga() {
  yield all([noteList()]);
}

export default rootSaga;
