import { all } from "redux-saga/effects";
import noteList from "./noteList";
import noteIncreaser from "./noteIncreaser";
import noteViewer from "./noteViewer";

function* rootSaga() {
  yield all([
    noteList(),
    noteIncreaser(),
    noteViewer(),
  ]);
}

export default rootSaga;
