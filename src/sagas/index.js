import { all } from "redux-saga/effects";
import noteList from "./noteList";
import noteIncreaser from "./noteIncreaser";
import noteViewer from "./noteViewer";
import noteEditor from "./noteEditor";

function* rootSaga() {
  yield all([
    noteList(),
    noteIncreaser(),
    noteViewer(),
    noteEditor(),
  ]);
}

export default rootSaga;
