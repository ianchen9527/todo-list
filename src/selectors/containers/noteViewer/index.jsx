import { createSelector } from "reselect";
import { getNotes as getNotesFromResponse } from "../../responses/notes";
import routes from "../../../constants/routes";

const state = ({ containers }) => containers.noteViewer;

export const getNote = createSelector(
  getNotesFromResponse,
  (notesFromResponse) => (match) =>
    notesFromResponse.find(
      (note) => parseInt(note.id) === parseInt(match.params.id)
    )
);

export const getLoading = createSelector(state, ({ loading }) => loading);

export const getOnEditClick = (history) => (match) => () =>
  history.push(routes.NOTE_EDIT(match.params.id));
