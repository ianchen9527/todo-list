import React from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import Button from "../Button";

const renderLoadingView = () => <div className={styles["loading-view"]} />;

const renderEditor = ({
  note,
  onTitleChange,
  onContentChange,
  onCancelClick,
  onSaveClick,
  onDeleteClick,
}) =>
  note.id && (
    <>
      <input
        className={styles["title"]}
        value={note.title}
        onChange={(event) => onTitleChange(event.target.value)}
      />
      <textarea
        className={styles["content"]}
        onChange={(event) => onContentChange(event.target.value)}
        value={note.content}
      />
      <div className={styles["buttons-wrapper"]}>
        <div className={styles["button-wrapper"]}>
          <Button onClick={onCancelClick} text="Cancel" icon="cancel" />
        </div>
        <div className={styles["button-wrapper"]}>
          <Button onClick={onSaveClick} text="Save" icon="save" />
        </div>
        <div className={styles["button-wrapper"]}>
          <Button onClick={onDeleteClick} text="Delete" icon="delete" />
        </div>
      </div>
    </>
  );

const NoteEditor = (props) => {
  console.log(props);
  return (
    <div className={styles["wrapper"]}>
      {props.loading ? renderLoadingView() : renderEditor(props)}
    </div>
  );
};

NoteEditor.propTypes = {
  note: PropTypes.shape({ title: PropTypes.string, id: PropTypes.number }),
  loading: PropTypes.bool,
  onTitleChange: PropTypes.func,
  onContentChange: PropTypes.func,
  onCancelClick: PropTypes.func,
  onSaveClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

NoteEditor.defaultProps = {
  note: {},
  loading: false,
  onTitleChange: null,
  onContentChange: null,
  onCancelClick: null,
  onSaveClick: null,
  onDeleteClick: null,
};

export default NoteEditor;
