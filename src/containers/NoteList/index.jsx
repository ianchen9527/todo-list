import { compose } from "redux";
import { connect } from "react-redux";
import { getNotes, getOnNoteClick } from "../../selectors/containers/noteList";
import NoteList from "../../components/elements/NoteList";
import withLifecycle from "@hocs/with-lifecycle";
import { getOnDidMount } from "../../sagas/noteList";

const mapStateToProps = (state) => ({
  notes: getNotes(state),
});

const mapDispatchToProps = (dispatch) => ({
  onNoteClick: getOnNoteClick(dispatch),
  dispatch,
});

const lifeCycle = {
  onDidMount: getOnDidMount(),
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLifecycle(lifeCycle),
)(NoteList);
