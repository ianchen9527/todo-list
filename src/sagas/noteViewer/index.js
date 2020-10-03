import { call, put, takeEvery } from "redux-saga/effects";
import { updateNotes } from "../../reducers/responses/notes";
import { updateLoading } from "../../reducers/containers/noteViewer";
import { sagaFetchNotes } from "../notesProcessor";

export const ON_DID_MOUNT = "noteViewer/ON_DID_MOUNT";

export const onDidMount = () => ({
  type: ON_DID_MOUNT,
});

export const getOnDidMount = () => ({ dispatch }) => dispatch(onDidMount());

export function* sagaOnDidMount() {
  yield put(updateLoading(true));
  const notes = yield call(sagaFetchNotes);
  yield put(updateNotes(notes));
  yield put(updateLoading(false));
}

export default function* watcher() {
  yield takeEvery(ON_DID_MOUNT, sagaOnDidMount);
}
