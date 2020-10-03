import React from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

const getNoteWrapperClassName = (disabled) =>
  cx({
    [styles["note-wrapper"]]: true,
    [styles["disabled"]]: disabled,
  });

const renderLoadingView = () => <div className={styles["loading-view"]} />;

const renderList = ({ notes, disabled, onNoteClick }) => {
  const noteWrapperClassName = getNoteWrapperClassName(disabled);

  return notes.length > 0 ? (
    notes.map((note) => (
      <div
        className={noteWrapperClassName}
        onClick={() => onNoteClick(note.id)}
        key={note.id}
      >
        {note.title}
      </div>
    ))
  ) : (
    <div className={styles["place-holder"]}>
      Please click the "New Note" button to add a new note...
    </div>
  );
};

const NoteList = (props) => (
  <div className={styles["wrapper"]}>
    <div className={styles["title"]}>Note List</div>
    {props.loading ? renderLoadingView() : renderList(props)}
  </div>
);

NoteList.oropTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, id: PropTypes.number })
  ),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onNoteClick: PropTypes.func,
};

NoteList.defaultProps = {
  notes: [],
  disabled: false,
  loading: false,
  onNoteClick: null,
};

export default NoteList;
