import { call, put, select, takeEvery } from "redux-saga/effects";
import { updateNotes } from "../../reducers/responses/notes";
import {
  updateLoading,
  updateNote,
} from "../../reducers/containers/noteEditor";
import {
  sagaFetchNotes,
  sagaSaveNotes,
  sagaDeleteNote,
} from "../notesProcessor";
import { getNote } from "../../selectors/containers/noteEditor";
import routes from "../../constants/routes";

export const ON_DID_MOUNT = "noteEditor/ON_DID_MOUNT";
export const ON_CANCEL_CLICK = "noteEditor/ON_CANCEL_CLICK";
export const ON_SAVE_CLICK = "noteEditor/ON_SAVE_CLICK";
export const ON_DELETE_CLICK = "noteEditor/ON_DELETE_CLICK";

export const onDidMount = (match) => ({
  type: ON_DID_MOUNT,
  payload: { match },
});
export const onCancelClick = (history) => ({
  type: ON_CANCEL_CLICK,
  payload: { history },
});
export const onSaveClick = (history) => ({
  type: ON_SAVE_CLICK,
  payload: { history },
});
export const onDeleteClick = (history) => ({
  type: ON_DELETE_CLICK,
  payload: { history },
});

export const getOnDidMount = () => ({ dispatch, match }) =>
  dispatch(onDidMount(match));
export const getOnCancelClick = (dispatch, history) => () =>
  dispatch(onCancelClick(history));
export const getOnSaveClick = (dispatch, history) => () =>
  dispatch(onSaveClick(history));
export const getOnDeleteClick = (dispatch, history) => () =>
  dispatch(onDeleteClick(history));

export function* sagaOnDidMount(action) {
  yield put(updateLoading(true));
  const notes = yield call(sagaFetchNotes);
  yield put(updateNotes(notes));
  yield put(
    updateNote(
      notes.find(
        (note) => parseInt(note.id) === parseInt(action.payload.match.params.id)
      )
    )
  );
  yield put(updateLoading(false));
}

export function* sagaOnCacncelClick(action) {
  const note = yield select(getNote);
  yield put(updateNote({}));
  yield call(action.payload.history.push, routes.NOTE(note.id));
}

export function* sagaOnSaveClick(action) {
  yield put(updateLoading(true));
  const note = yield select(getNote);
  yield call(sagaSaveNotes, note);
  yield put(updateLoading(false));
  yield call(action.payload.history.push, routes.NOTE(note.id));
}

export function* sagaOnDeleteClick(action) {
  yield put(updateLoading(true));
  const note = yield select(getNote);
  yield call(sagaDeleteNote, note.id);
  yield put(updateLoading(false));
  yield call(action.payload.history.push, routes.NOTES());
}

export default function* watcher() {
  yield takeEvery(ON_DID_MOUNT, sagaOnDidMount);
  yield takeEvery(ON_CANCEL_CLICK, sagaOnCacncelClick);
  yield takeEvery(ON_SAVE_CLICK, sagaOnSaveClick);
  yield takeEvery(ON_DELETE_CLICK, sagaOnDeleteClick);
}
