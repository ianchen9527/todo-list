import { compose } from "redux";
import { connect } from "react-redux";
import {
  getNotes,
  getDisabled,
  getLoading,
  getOnNoteClick,
} from "../../selectors/containers/noteList";
import NoteList from "../../components/elements/NoteList";
import withLifecycle from "@hocs/with-lifecycle";
import { getOnDidMount } from "../../sagas/noteList";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, { history, match }) => ({
  notes: getNotes(state),
  disabled: getDisabled(match),
  loading: getLoading(state),
  onNoteClick: getOnNoteClick(history, match),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

const lifeCycle = {
  onDidMount: getOnDidMount(),
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withLifecycle(lifeCycle)
)(NoteList);
