import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getDisabled,
  getLoading,
  getOnClick,
} from "../../selectors/containers/noteIncreaser";
import NoteIncreaser from "../../components/elements/NoteIncreaser";

const mapStateToProps = (state) => ({
  disabled: getDisabled(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch, { history }) => ({
  onClick: getOnClick(dispatch, history),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NoteIncreaser);
