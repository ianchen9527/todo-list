import { combineReducers } from "redux";
import noteList from "./noteList";
import noteIncreaser from "./noteIncreaser";
import noteViewer from "./noteViewer";
import noteEditor from "./noteEditor";

export default combineReducers({
  noteList,
  noteIncreaser,
  noteViewer,
  noteEditor,
});
