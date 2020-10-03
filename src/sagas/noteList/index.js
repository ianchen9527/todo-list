import { call, put, takeEvery } from "redux-saga/effects";
import apis from "../../apis";
import { updateNotes } from "../../reducers/responses/notes";
import { updateLoading } from "../../reducers/containers/noteList";

export const ON_DID_MOUNT = "noteList/ON_DID_MOUNT";

export const onDidMount = { type: ON_DID_MOUNT };

export const getOnDidMount = () => ({ dispatch }) => dispatch(onDidMount);

export function* sagaOnDidMount() {
  yield put(updateLoading(true));
  const notes = yield call(apis.fetchNotes);
  yield put(updateNotes(notes));
  yield put(updateLoading(false));
}

export default function* watcher() {
  yield takeEvery(ON_DID_MOUNT, sagaOnDidMount);
}
