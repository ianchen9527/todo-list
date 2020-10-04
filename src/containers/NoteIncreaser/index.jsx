import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getDisabled,
  getLoading,
  getOnClick,
} from "../../selectors/containers/noteIncreaser";
import NoteIncreaser from "../../components/elements/NoteIncreaser";

const mapStateToProps = (state, { match }) => ({
  disabled: getDisabled(match),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch, { history, match }) => ({
  onClick: getOnClick(dispatch, history, match),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NoteIncreaser);
