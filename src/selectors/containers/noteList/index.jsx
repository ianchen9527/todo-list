import { createSelector } from "reselect";
import { getNotes as getNotesFromResponse } from "../../responses/notes";
import { push } from "react-router-redux";
import routes from "../../../constants/routes";

export const getNotes = createSelector(
  getNotesFromResponse,
  (notesFromResponse) =>
    notesFromResponse.map((note) => ({
      id: note.id,
      title: note.title,
    }))
);

export const getOnNoteClick = (dispatch) => (id) => dispatch(push(routes.HOME));
