import { createSelector } from "reselect";
import { onClick } from "../../../sagas/noteIncreaser";
import routes from "../../../constants/routes";

export const state = ({ containers }) => containers.noteIncreaser;

export const getDisabled = (match) =>
  window.location.pathname === routes.NOTE_EDIT(match.params.id);

export const getLoading = createSelector(state, ({ loading }) => loading);

export const getOnClick = (dispatch, history, match) => () =>
  !getDisabled(match) && dispatch(onClick(history));
