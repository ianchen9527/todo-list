import { compose } from "redux";
import { connect } from "react-redux";
import {
  getNote,
  getLoading,
  getOnTitleChange,
  getOnContentChange,
} from "../../selectors/containers/noteEditor";
import NoteEditor from "../../components/elements/NoteEditor";
import withLifecycle from "@hocs/with-lifecycle";
import {
  getOnDidMount,
  getOnCancelClick,
  getOnSaveClick,
  getOnDeleteClick,
} from "../../sagas/noteEditor";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
  note: getNote(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch, { history, match }) => ({
  onCancelClick: getOnCancelClick(dispatch, history),
  onSaveClick: getOnSaveClick(dispatch, history),
  onDeleteClick: getOnDeleteClick(dispatch, history),
  dispatch,
  match,
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onTitleChange: getOnTitleChange(dispatchProps.dispatch, stateProps.note),
  onContentChange: getOnContentChange(dispatchProps.dispatch, stateProps.note),
});

const lifeCycle = {
  onDidMount: getOnDidMount(),
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  withLifecycle(lifeCycle)
)(NoteEditor);
