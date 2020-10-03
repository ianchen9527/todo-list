import { all, call, select } from "redux-saga/effects";
import { getNotes as getNotesFromResponse } from "../../selectors/responses/notes";
import apis from "../../apis";
import { decrypt } from "../../utils/encrypt";

export function* sagaFetchNotes() {
  let notes = yield select(getNotesFromResponse);
  if (notes.length === 0) {
    notes = yield call(apis.fetchNotes);
    const decryptedNotes = yield all(
      notes.map((note) => call(decrypt, note.content))
    );
    notes = notes.map((note, index) => ({
      ...note,
      content: decryptedNotes[index],
    }));
  }
  return notes;
}
