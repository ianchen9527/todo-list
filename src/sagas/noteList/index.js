import { call, put, takeEvery } from "redux-saga/effects";
import apis from "../../apis";
import { updateNotes } from "../../reducers/responses/notes";

const ON_DID_MOUNT = `${__filename}/ON_DID_MOUNT`;
const onDidMount = { type: ON_DID_MOUNT };

export const getOnDidMount = () => ({ dispatch }) => dispatch(onDidMount);

function* sagaOnDidMount() {
  const notes = yield call(apis.fetchNotes);
  yield put(updateNotes(notes));
}

function* watcher() {
  yield takeEvery(ON_DID_MOUNT, sagaOnDidMount);
}

export default watcher;
