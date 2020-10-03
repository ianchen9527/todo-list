import { compose } from "redux";
import { connect } from "react-redux";
import {
  getNote,
  getLoading,
  getOnEditClick,
} from "../../selectors/containers/noteViewer";
import NoteViewer from "../../components/elements/NoteViewer";
import withLifecycle from "@hocs/with-lifecycle";
import { getOnDidMount } from "../../sagas/noteViewer";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, { history, match }) => ({
  note: getNote(state)(match),
  loading: getLoading(state),
  onEditClick: getOnEditClick(history)(match),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

const lifeCycle = {
  onDidMount: getOnDidMount(),
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withLifecycle(lifeCycle)
)(NoteViewer);
