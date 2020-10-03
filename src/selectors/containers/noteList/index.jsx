import { createSelector } from "reselect";
import { getNotes as getNotesFromResponse } from "../../responses/notes";
import routes from "../../../constants/routes";

const state = ({ containers }) => containers.noteList;

export const getNotes = createSelector(
  getNotesFromResponse,
  (notesFromResponse) =>
    notesFromResponse.map((note) => ({
      id: note.id,
      title: note.title,
    }))
);

export const getLoading = createSelector(state, ({ loading }) => loading);

export const getDisabled = () =>
  window.location.pathname === routes.NOTE_EDIT();

export const getOnNoteClick = (history) => (id) =>
  !getDisabled() && history.push(routes.NOTE(id));
