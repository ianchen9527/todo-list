import { createSelector } from "reselect";
import { onClick } from "../../../sagas/noteIncreaser";

const state = ({ containers }) => containers.noteIncreaser;

export const getDisabled = () => {
  return false;
};

export const getLoading = createSelector(state, ({ loading }) => loading);

export const getOnClick = (dispatch, history) => () => {
  dispatch(onClick(history));
};
