import { createSelector } from "reselect";
import { getNotes as getNotesFromResponse } from "../../responses/notes";
import routes from "../../../constants/routes";

export const state = ({ containers }) => containers.noteList;

export const getNotes = createSelector(
  getNotesFromResponse,
  (notesFromResponse) =>
    notesFromResponse.map((note) => ({
      id: note.id,
      title: note.title,
    }))
);

export const getLoading = createSelector(state, ({ loading }) => loading);

export const getDisabled = (match) =>
  window.location.pathname === routes.NOTE_EDIT(match.params.id);

export const getOnNoteClick = (history, match) => (id) =>
  !getDisabled(match) && history.push(routes.NOTE(id));
