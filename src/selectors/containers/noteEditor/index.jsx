import { createSelector } from "reselect";
import { updateNote } from "../../../reducers/containers/noteEditor";

export const state = ({ containers }) => containers.noteEditor;

export const getNote = createSelector(state, ({ note }) => note);

export const getLoading = createSelector(state, ({ loading }) => loading);

export const getOnTitleChange = (dispatch, note) => (title) =>
  dispatch(updateNote({ ...note, title }));

export const getOnContentChange = (dispatch, note) => (content) =>
  dispatch(updateNote({ ...note, content }));
