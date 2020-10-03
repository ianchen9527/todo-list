import { combineReducers } from "redux";
import noteList from "./noteList";
import noteIncreaser from "./noteIncreaser";
import noteViewer from "./noteViewer";

export default combineReducers({ noteList, noteIncreaser, noteViewer });
