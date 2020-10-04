import { call, put, takeEvery } from "redux-saga/effects";
import apis from "../../apis";
import { updateNotes } from "../../reducers/responses/notes";
import routes from "../../constants/routes";
import { updateLoading } from "../../reducers/containers/noteIncreaser";

export const ON_CLICK = "noteIncreaser/ON_CLICK";

export const onClick = (history) => ({ type: ON_CLICK, payload: { history } });

export function* sagaOnClick(action) {
  yield put(updateLoading(true));
  const note = yield call(apis.addNote);
  const notes = yield call(apis.fetchNotes);
  yield put(updateNotes(notes));
  yield put(updateLoading(false));
  yield call(action.payload.history.push, routes.NOTE_EDIT(note.id));
}

export default function* watcher() {
  yield takeEvery(ON_CLICK, sagaOnClick);
}
